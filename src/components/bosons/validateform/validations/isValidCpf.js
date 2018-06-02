// FUNÇÃO DE VALIDAÇÃO DE CPF. FONTE: http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
export default (cpf) => {
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
