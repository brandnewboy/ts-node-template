import { createWorker } from 'tesseract.js'

// 定义异步函数执行 OCR 任务
async function performOCR(imagePath: string) {
    const worker = await createWorker('eng')
    try {
        // 初始化工作器
        await worker.load()

        // 对指定路径的图像执行 OCR 识别
        const { data: { text } } = await worker.recognize(imagePath)
        console.log('识别结果:')
        console.log(text)
    } catch (error) {
        console.error('OCR 识别出错:', error)
    } finally {
        // 终止工作器
        await worker.terminate()
    }
}

const imagePath = 'path/to/image.jpg';
// 调用 performOCR 函数开始识别
performOCR(imagePath)
    .then(result => {
        console.log(result)
    })
