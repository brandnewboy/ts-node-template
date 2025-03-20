import path from 'node:path'
import { runCommandLocal, CONSOLE_COLOR } from '../shared/runCommand.js'
const rootDir = path.resolve(process.cwd(), '../')

runCommandLocal(
    'tsc',
    ['--init'],
    {
        outputStr: data => `stdout 'tsc --init' 命令执行结果: ${CONSOLE_COLOR.GREEN}${data}`,
        cwd: rootDir,
        shell: true
      }
    )
