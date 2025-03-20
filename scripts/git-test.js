import { runCommand } from '../shared/runCommand.js'

runCommand(
    'git',
    ['-h'],
    {
        outputStr: data => `git===>>>: ${data}`,
        shell: true
    }
)
