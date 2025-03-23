import { getDirname } from '../shared/index.js'

console.log('process.cwd', process.cwd())
console.log('import_getDirname', getDirname(import.meta.url))