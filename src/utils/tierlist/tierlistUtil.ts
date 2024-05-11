export function StringToRank(str: string) {
  let result = ''

  switch (str) {
    case 'sranks':
      result = 'S'
      break
    case 'aranks':
      result = 'A'
      break
    case 'branks':
      result = 'B'
      break
    case 'cranks':
      result = 'C'
      break
    case 'dranks':
      result = 'D'
      break
    case 'franks':
      result = 'F'
      break
    default:
      break
  }

  return result
}
