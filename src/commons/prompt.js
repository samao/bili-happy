/*
 * @Author: iDzeir 
 * @Date: 2018-10-12 15:53:18 
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-10-12 17:01:22
 */
const inquirer = require('inquirer');

async function biliPrompt(task) {
    const prompt = [];
    if (!task.url) {
        prompt.push({
            type: 'input',
            name: 'url',
            message: '请输入爬取地址',
            validate: value => {
                const isAid = !Number.isNaN(Number(value));
                const isRange = /\d+-\d+/i.test(value);
                const isLink = /^https{0,1}:\/\//.test(value);
                return isAid || isRange || isLink || '请重新输入爬取地址';
            }
        });
    }
    if (!task.output) {
        prompt.push({
            type: 'input',
            name: 'output',
            message: '请输入视频文件存储位置',
            validate: value => ('' + value).trim().length > 0
        });
    }
    return prompt.length !== 0 ? { ...task, ...(await inquirer.prompt(prompt)) } : task;
}

async function biliDancePrompt(task) {
    const prompt = [];
    if (!task.output) {
        prompt.push({
            type: 'input',
            name: 'output',
            message: '请输入视频文件存储位置',
            validate: value => ('' + value).trim().length > 0
        });
    }
    return prompt.length !== 0 ? { ...task, ...(await inquirer.prompt(prompt)) } : task;
}

module.exports = {
    biliPrompt,
    biliDancePrompt
};
