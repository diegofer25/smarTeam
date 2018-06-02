export default (values) => {
  const verifyFirstLine = values.name === '' || values.cpf === '' || values.email === ''
  const verifySecondLine = values.password === '' || values.confirmPassword === ''
  return verifyFirstLine || verifySecondLine
}
