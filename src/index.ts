import path from 'path'
import { downloadVideo } from './downloadVideo'

const videoUrl = 'http://10.20.48.57:8081/cat.mp4'
const outputFilePath = path.resolve(process.cwd(), 'download/downloaded_video.mp4')
downloadVideo(videoUrl, outputFilePath)
   .then(() => {
        console.log('下载成功')
    })
   .catch((error) => {
        console.error('下载失败:', error.message)
    })
