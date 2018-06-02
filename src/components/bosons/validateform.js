var validate = {
  type: 'info',
  message: 'Forneça todos os dados necessários para cadastrar um membro a sua equipe',
  isValidate: false
}

export default (values) => {
  return validateAll(values)
}

function setValidate (type, message, isValidate) {
  if (type) {
    validate.type = type
  }
  if (message) {
    validate.message = message
  }
  validate.isValidate = isValidate
  return validate
}

function validateAll (values) {
  if (!isEmpty(values)) {
    if (!isValidName(values.name)) {
      return setValidate('warning', 'Forneça pelo menos um sobrenome', false)
    } else if (!isValidCpf(values.cpf)) {
      return setValidate('warning', 'Forneça um CPF válido', false)
    } else if (!isValidEmail(values.email)) {
      return setValidate('warning', 'Forneça um E-mail válido', false)
    } else if (values.password !== values.confirmPassword) {
      return setValidate('warning', 'As senhas não conferem', false)
    } else if (!isValidPassword(values.password)) {
      return setValidate('warning', 'A senha não atende ao critério de segurança', false)
    } else {
      return setValidate('positive', 'Dados validados', true)
    }
  } else {
    return setValidate('info', 'Forneça todos os dados necessários para cadastrar um membro a sua equipe', false)
  }
}

function isEmpty (values) {
  const verifyFirstLine = values.name === '' || values.cpf === '' || values.email === ''
  const verifySecondLine = values.password === '' || values.confirmPassword === ''
  return verifyFirstLine || verifySecondLine
}

function isValidName (name) {
  if (name.indexOf(' ') > 0) {
    return name.split(' ').length > 1 && name.split(' ')[1].length > 2
  }
  return false
}

// FUNÇÃO DE VALIDAÇÃO DE CPF. FONTE: http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
function isValidCpf (cpf) {
  var sum = 0
  var rest
  if (cpf === '00000000000') return false
  for (var i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
  rest = (sum * 10) % 11
  if ((rest === 10) || (rest === 11)) rest = 0
  if (rest !== parseInt(cpf.substring(9, 10))) return false
  sum = 0
  for (i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
  rest = (sum * 10) % 11
  if ((rest === 10) || (rest === 11)) rest = 0
  return !(rest !== parseInt(cpf.substring(10, 11)))
} // FUNÇÃO DE VALIDAÇÃO DE CPF. FONTE: http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js

function isValidEmail (email) {
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

function isValidPassword (password) {
  return password.length > 5
}
