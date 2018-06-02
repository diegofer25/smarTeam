export default (email) => {
  if (email.indexOf('@') > 0) {
    const prefix = email.split('@')[0]
    const domain = email.split('@')[1]
    if (domain.indexOf('.') > 0) {
      const sufix = domain.split('.')[1]
      return prefix.length > 2 && domain.split('.')[0].length > 2 && sufix.length > 1
    }
  }
  return false
}
