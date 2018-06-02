const validate = {
  type: 'info',
  message: 'Forneça todos os dados necessários para cadastrar um membro a sua equipe',
  isValidate: false
}

export default (type, message, isValidate) => {
  if (type) {
    validate.type = type
  }
  if (message) {
    validate.message = message
  }
  validate.isValidate = isValidate
  return validate
}
