export const formatDateTime = (dateString: string): string => {
  const parts = dateString.split(' ')

  if (parts.length !== 2) {
    throw new Error('Invalid input format')
  }

  const dateParts = parts[0].split('-')
  const timeParts = parts[1].split(':')

  if (dateParts.length !== 3 || timeParts.length !== 3) {
    throw new Error('Invalid input format')
  }

  return `${dateParts[2]} ${timeParts[0]}:${timeParts[1]}`
}
