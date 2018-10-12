/*
 * @Author: iDzeir 
 * @Date: 2018-10-12 15:47:51 
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-10-12 16:56:59
 */
const program = require('commander');

const description = `
=============================
**                         **
** BILIBILI VIDEO DOWNLOAD **
**                         **
=============================
`;

async function biliHelp() {
    return await new Promise((res) => {
        program
            .version(require('../../package.json').version, '-v,--version')
            .description(description)
            .usage('BiliBili 视频下载器帮助文档')
            .arguments('[url] [output]')
            .action((url, output) => {
                res({ url, output });
            })
            .on('--help', () => {
                console.log('');
                console.log('例子:');
                console.log('  $ bilibili 343434 output');
                console.log('  $ bilibili 32344-43434 output');
                console.log('  $ bilibili http://www.bilibili.com/av/xxxx output');
            })
            .parse(process.argv);
    });
};

async function biliDanceHelp() {
    return await new Promise((res) => {
        program
            .version(require('../../package.json').version, '-v,--version')
            .description(description)
            .usage('BiliBili 热门舞蹈下载帮助文档')
            .arguments('[output]')
            .action((output) => {
                res({output });
            })
            .on('--help', () => {
                console.log('');
                console.log('例子:');
                console.log('  $ bilibili-dance-hot output');
            })
            .parse(process.argv);
    });
};

module.exports = {
    biliHelp,
    biliDanceHelp
}