import { runCommandLocal } from '../shared/runCommand.js'

runCommandLocal(
    'http-server',
    ['../static', '-p', '8081'],
    {
        outputStr: data => `http-server===>>>: ${data}`,
        shell: true
    }
)
