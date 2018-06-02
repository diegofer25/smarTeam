export default (name) => {
  if (name.indexOf(' ') > 0) {
    return name.split(' ').length > 1 && name.split(' ')[1].length > 2
  }
  return false
}
