import { afterEach } from 'node:test'
import { describe, it, assert, vi, expect } from 'vitest'
import { testObj, test } from './index.js'

describe('index', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('test', () => {
    it('returns the string passed in', () => {
      const res = test('hello world')

      assert.equal(res, 'hello world')
    })
  })

  it('returns a string of "hello"', () => {
    const mockedFn = vi.spyOn(testObj, 'hello')

    testObj.hello()

    expect(mockedFn).toHaveBeenCalled()
  })
})
