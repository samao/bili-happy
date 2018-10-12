#!/usr/bin/env node
const log = require('./commons/log');

function makeTask(range) {
    if (range.startsWith('http') || range.startsWith('https')) {
        log('网址爬取:', range);
        return [range];
    } else if (/\d+-\d+/.test(range)) {
        log('范围爬取:', range);
        const [begin, end] = range.split('-').map(e => Number(e));
        const tmap = [];
        for (let start = begin; start <= end; ++start) {
            tmap.push(`https://www.bilibili.com/video/av${start}`);
        }
        return tmap;
    } else {
        log('单个视频:', range);
        const aid = parseInt(range);
        if (Number.isNaN(aid)) {
            //参数错误
            log('爬取错误目标:', aid);
            return [];
        } else {
            return [`https://www.bilibili.com/video/av${aid}`];
        }
    }
    log('爬取任务开启！！！');
}

async function run() {
    let task = await require('./commons/program').biliHelp();
    task = await require('./commons/prompt').biliPrompt(task);
    const { url: range, output } = task;
    return await require('./commons/bilibili-spider')(() => makeTask(range), output);
}

run().then(({ spend, results, fail }) => {
    log('耗时:', require('./commons/time')(spend));
    log('成功:', results.length);
    log('失败:', fail);
    log('##########爬取结束##########');
});
