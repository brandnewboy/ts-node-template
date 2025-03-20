import path from 'node:path'
import { getDirname, runCommandLocal, CONSOLE_COLOR } from '../shared/runCommand.js'


runCommandLocal(
    'ts-node',
    ['--esm', '../src/index.ts'],
    {
        outputStr: data => `ts-node===>>>: ${CONSOLE_COLOR.GREEN}${data}`,
        shell: true
    }
)
