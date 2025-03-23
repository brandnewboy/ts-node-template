import fs from 'node:fs'


export type ILoadJson = typeof loadJson

/**
 * 从指定路径加载 JSON 文件并解析为指定类型。
 *
 * @template R - 解析后 JSON 数据的类型。
 * @param {string} path - 要读取的 JSON 文件的路径。
 * @returns {Promise<R | NodeJS.ErrnoException>} - 一个 Promise，成功时解析为 JSON 数据，失败时返回错误。
 */
export const loadJson = <R>(path: string): Promise<R | NodeJS.ErrnoException> => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                reject(err)
            }
                resolve(JSON.parse(data) as R)
        })
    })
}


const a = loadJson<{ name: string }>('package.json')
console.log(a.then(res => console.log(res.name)))