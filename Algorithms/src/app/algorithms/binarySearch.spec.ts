import { binarySearch } from './binarySearch';

const bs = binarySearch

function t(arr, val, expected) {
  return expect(bs(arr, val)).toBe(expected)
}

fdescribe('binarySearch', () => {
  it ('searches empty', () => {
    t([], 0, undefined)
  })

  it ('searches in single, found', () => {
    t([0], 0, 0)
  })

  it ('searches in single, not found', () => {
    t([1], 9, undefined)
  })

  it ('searches in two, found at start', () => {
    t([1, 2], 1, 0)
  })

  it ('searches in two, found at end', () => {
    t([1, 2], 2, 1)
  })

  it ('searches in two, not found', () => {
    t([1, 2], 9, undefined)
  })

  it ('searches in 3, found at start', () => {
    t([1, 2, 3], 1, 0)
  })

  it ('searches in 3, found at end', () => {
    t([1, 2, 3], 3, 2)
  })

  it ('searches in 3, found at middle', () => {
    t([1, 2, 3], 2, 1)
  })

  it ('searches in 3, not found', () => {
    t([1, 2, 3], 9, undefined)
  })

})
