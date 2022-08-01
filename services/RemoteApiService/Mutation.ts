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
/* GraphQL */`mutation ($razaoSocial: String = "") {
  deleteCliente(razaoSocial: $razaoSocial) {
    dataCadastro
    endereco
    faturamentoDeclarado
    razaoSocial
    telefone
  }
}`
