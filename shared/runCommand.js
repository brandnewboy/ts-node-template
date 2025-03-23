import { spawn } from 'node:child_process'
import path from 'node:path'
import { getDirname } from './index.js'

export const CONSOLE_COLOR = {
    DEFAULT: `\x1b[33m`,
    GREEN: `\x1b[32m`,
    RED: `\x1b[31m`,
    BLUE: `\x1b[34m`,
}


export function runCommandLocal(command, args, options) {

    const commandPath = path.resolve(getDirname(import.meta.url), '../node_modules/.bin/', command)

    console.log(`You are running a command: ${commandPath}`, '\n')

    const res = spawn(commandPath, [...args], { ...options })

    res.stdout.on('data', (data) => {
        console.log(options.outputStr(data))
    })
}

export function runCommand(command, args, options) {
    console.log(`You are running a command: ${command}`, '\n')

    const res = spawn(command, [...args], { ...options })

    res.stdout.on('data', (data) => {
        console.log(options.outputStr(data))
    })
}