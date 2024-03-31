#!/usr/bin/env tsx

import { Command } from 'commander'
import pkg from '../package.json'

const program = new Command()

program
  .name('fataldev')
  .version(pkg.version)
  .description('scaffold project structure and/or modifications over time using cli generator')
  .command('init', 'initialize a new project')
  .command('gen', 'generate something')

const opts = program.parse(process.argv)

console.log(opts)

export const test = (hello: string): string => {
  return hello
}

export const testObj: { hello: () => string } = {
  hello: () => 'hello'
}

console.log(testObj.hello)
console.log(test('world'))
