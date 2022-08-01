export const createCliente =
/* GraphQL */`mutation ($cliente: ClienteInput = {}) {
  createCliente(cliente: $cliente){
    dataCadastro
    faturamentoDeclarado
    razaoSocial
    telefone
    endereco
  }
}`

export const deleteCliente =
/* GraphQL */`mutation ($cliente: ClienteInput = {}) {
  deleteCliente(cliente: $cliente){
    dataCadastro
    faturamentoDeclarado
    razaoSocial
    telefone
    endereco
  }
}`
