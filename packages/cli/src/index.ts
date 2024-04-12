#!/usr/bin/env tsx
import cli from 'node-plop'
import path from 'node:path'
// load an instance of plop from a plopfile
const fatal = await cli(path.join('./', 'fatal.config.ts'))
console.log(import.meta)
fatal.setActionType('findAllDirs', (answers, config, ftl) => {
  console.log(answers, config, ftl)
  return new Promise((res) => {
    res('hello')
  })
})
fatal.setGenerator('basic-add', {
  prompts: [{ type: 'confirm', name: 'initProj', message: 'A ' }],
  actions: [{ type: 'find' }]
})
// get a generator by name
const basicAdd = fatal.getGenerator('basic-add')

// run all the generator actions using the data specified
basicAdd.runActions({ name: 'this is a test' }).then(function (results) {
  // do something after the actions have run
  console.log(results)
})

// import { Command } from 'commander'
// import pkg from '../package.json'

// const program = new Command()

// program
//   .name('fataldev')
//   .version(pkg.version)
//   .description('scaffold project structure and/or modifications over time using cli generator')
//   .command('init', 'initialize a new project')
//   .arguments('<target_dir>')
//   .action((target_dir: string) => {
//     console.log(target_dir)
//   })
//   .alias('i')
//   .command('gen', 'generate something')

// const opts = await program.parseAsync(process.argv)

// console.log('opts in index.ts', opts)

// export const test = (hello: string): string => {
//   return hello
// }

// export const testObj: { hello: () => string } = {
//   hello: () => 'hello'
// }
