import { binarySearch } from './binarySearch';

const bs = binarySearch

function t(arr, val, expected) {
  return expect(bs(arr, val)).toBe(expected)
}

function testGen(number: number, searchVal: number) {
  it ('in ' + number, () => {
    t(Array.from({length: number}, (v, k) => k+1), searchVal, searchVal - 1)
  })
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


  it ('searches in 4, found at start', () => {
    t([1, 2, 3, 4], 1, 0)
  })

  it ('searches in 4, found at end', () => {
    t([1, 2, 3, 4], 4, 3)
  })

  it ('searches in 4, found at middle-left', () => {
    t([1, 2, 3, 4], 2, 1)
  })

  it ('searches in 4, found at middle-right', () => {
    t([1, 2, 3, 4], 3, 2)
  })

  it ('searches in 4, not found', () => {
    t([1, 2, 3], 9, undefined)
  })

  it ('searches in 10, found', () => {
    t([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8, 7)
  })

  it ('searches in 20, found', () => {
    t([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 13, 12)
  })

  // TODO: test-cases generator
  testGen(100, 31)

})
