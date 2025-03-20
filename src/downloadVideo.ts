import fs from "node:fs";
import axios from "axios";

/**
 * 根据指定的 URL 下载视频并保存到本地
 * @param url - 视频的下载地址
 * @param outputPath - 视频保存的本地路径
 * @returns 一个 Promise，当下载完成时 resolve，出现错误时 reject
 */
export async function downloadVideo(url: string, outputPath: string): Promise<void> {
    try {
        // 发起请求，设置响应类型为流
        const response = await axios.get(url, { responseType: 'stream' });

        // 创建一个可写流，用于将视频数据写入文件
        const writer = fs.createWriteStream(outputPath);

        // 将响应流通过管道传输到文件流
        response.data.pipe(writer);

        // 返回一个 Promise，等待写入完成或发生错误
        await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        console.log('视频下载完成');
    } catch (error) {
        // 若发生错误，删除已创建的文件
        if (fs.existsSync(outputPath)) {
            fs.unlinkSync(outputPath);
        }
        console.error('下载出错:', error);
        throw error;
    }
}
