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

export function formatDate(dateString: string) {
  const date = new Date(dateString)
  date.setHours(date.getHours() + 9)
  return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`
}
