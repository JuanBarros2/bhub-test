export const createCliente =
/* GraphQL */`mutation ($cliente: ClienteInput = {}) {
  createCliente(cliente: $cliente){
    id
    dataCadastro
    faturamentoDeclarado
    razaoSocial
    telefone
    endereco
  }
}`

export const deleteCliente =
/* GraphQL */`mutation ($razaoSocial: String = "") {
  deleteCliente(razaoSocial: $razaoSocial) {
    id
    dataCadastro
    endereco
    faturamentoDeclarado
    razaoSocial
    telefone
  }
}`

export const updateCliente =
/* GraphQL */`mutation ($cliente: ClienteInput = {}) {
  updateCliente(cliente: $cliente) {
    id
    dataCadastro
    endereco
    faturamentoDeclarado
    razaoSocial
    telefone
  }
}`

