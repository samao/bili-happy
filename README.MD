## BiliBili 视频下载爬虫

`npm -g install bilispider`

#### 通用爬取

* 精确爬取 `bilibili [aid] [output]`

  1. aid 对应B站aid
  2. output 为视频文件保存路径目录

* 按aid范围爬取 `bilibili [range] [output]`
  
  1. range aid范围，例如 0-1999
  2. output 为视频文件保存路径目录
  
* 按url爬取 `bilibili [url] [output]`

  1. url B站视频页地址，例如：https://www.bilibili.com/video/av33673910/
  2. output 为视频文件保存路径目录
  
#### 热门舞蹈爬取

`bilibili-dance-hot [output]`

output为视频文件保存路径目录
