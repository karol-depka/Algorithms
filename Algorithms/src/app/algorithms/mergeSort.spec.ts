const a = 'a'
const b = 'b'

function test(title: string, arrayToSort: string | any[]) {
  arrayToSort = (arrayToSort as string).split('') as any[]
  it('Sorts: ' + title + ' ' + arrayToSort, () => {
    expect((arrayToSort as any []).sort()).toEqual((arrayToSort as any []).sort())
  })
}

fdescribe('binarySearch', () => {

  test('empty', '')
  test('1', 'a')
  test('5 already sorted', 'abcdef')
  test('sorted in reverse', 'fedcba')

})
