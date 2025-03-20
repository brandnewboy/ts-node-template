import axios from "axios";
import * as cheerio from "cheerio";

export async function getRandomVideoFromSite(target: string) {
    // 设置请求头，模拟浏览器行为
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
    };

    // 设置超时时间为 10 秒
    const timeout = 10000;
    try {
        const response = await axios.get(target, { headers, timeout });
        const html = response.data;
        const $ = cheerio.load(html);
        const videoLinks: string[] = [];

        // 这里需要根据实际的 HTML 结构来选择视频链接
        const videoElements = $(`a[href*='video']`);
        videoElements.each((index, element) => {
            const link = $(element).attr('href');
            if (link) {
                videoLinks.push(link);
            }
        });

        if (videoLinks.length > 0) {
            const randomIndex = Math.floor(Math.random() * videoLinks.length);
            const randomVideo = videoLinks[randomIndex];
            console.log('随机获取的视频链接：', randomVideo);
            return randomVideo;
        } else {
            console.log('未找到视频链接');
            return null;
        }
    } catch (error) {
        console.error('请求出错：', error);
        return null;
    }
}
