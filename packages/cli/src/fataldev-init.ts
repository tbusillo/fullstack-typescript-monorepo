#!/usr/bin/env tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import fs from 'fs/promises'
import { Command } from 'commander'

const program = new Command()
console.log(program)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const startingPath = import.meta.dirname
console.log(import.meta.resolve(import.meta.filename))
console.log({
  startingPath,
  metaDirname: import.meta.dirname,
  metaUrl: import.meta.url,
  meta: import.meta,
  huh: import.meta.resolve('..', import.meta.dirname)
})

// Create a new directory

const main = async (...args: any[]): Promise<void> => {
  console.log('args', ...args)
  console.log(__dirname)
  try {
    const dirs = await fs.readdir(__dirname)
    console.log(dirs)
  } catch (e) {
    console.error(e)
  }
}

try {
  await main(program.registeredArguments)
} catch (e) {
  console.error(e)
}
