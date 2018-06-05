import {
  isFormEmpty,
  isValidCpf,
  isValidEmail,
  isValidName
} from './../validations/'

export default (values) => {
  return validateAll(values)
}

function validateAll (values) {
  if (!isFormEmpty(values)) {
    if (!isValidName(values.name)) {
      return returnValidation('warning', 'Forneça pelo menos um sobrenome', false)
    } else if (!isValidCpf(values.cpf)) {
      return returnValidation('warning', 'Forneça um CPF válido', false)
    } else if (!isValidEmail(values.email)) {
      return returnValidation('warning', 'Forneça um E-mail válido', false)
    } else {
      return returnValidation('positive', 'Dados validados', true)
    }
  } else {
    return returnValidation('info', 'Forneça todos os dados necessários para cadastrar um membro a sua equipe', false)
  }
}

function returnValidation (type, message, isValidate) {
  return {
    type: type,
    message: message,
    isValidate: isValidate
  }
}
