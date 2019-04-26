export function binarySearch<T>(array: Array<T>, searchVal: T): number | undefined {
  let start = 0
  let end = array.length - 1
  let ret: number | undefined
  do {
    // let pivot = Math.abs(Math.round((start + end) / 2))
    let pivot = Math.round((start + end) / 2)
    console.log('start', start, 'end: ', end, 'pivot: ', pivot, array, searchVal)
    let valAtPivot = array[pivot]
    // 0 1 0 ......
    if ( valAtPivot === searchVal ) {
      ret = pivot
      break
    } if ( valAtPivot > searchVal) {
      // b -> [a >b *b2* c d]
      end = pivot - 1
      // pivot = Math.round(pivot / 2)
    } else { // valAtPivot < searchVal
      start = pivot + 1
      // d -> [a b *c* >d]
      // pivot = Math.round(pivot + ( end - pivot ) / 2)
    }
  } while ( start < end )

  return ret
}
