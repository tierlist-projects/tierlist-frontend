// 게시글 수를 K, M 등을 붙여 표시하기 위한 함수
export function changeNumberOfPost(number: number) {
  const size = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  let i
  for (i = size.length - 1; i > 0; i -= 1) {
    if (number >= size[i].value) {
      break
    }
  }

  return (number / size[i].value).toFixed(2).replace(rx, '') + size[i].symbol
}
