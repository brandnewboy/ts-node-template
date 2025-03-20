import fs from 'node:fs'

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
