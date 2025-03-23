import path from 'node:path'
import { runCommandLocal } from '../shared/runCommand.js'
import { getDirname } from '../shared/index.js'

const rootDir = path.resolve(getDirname(import.meta.url), '..')

runCommandLocal(
    'tsc',
    ['--init'],
    {
        outputStr: data => `stdout 'tsc --init' 命令执行结果: ${data}`,
        cwd: rootDir,
        shell: true
      }
    )
