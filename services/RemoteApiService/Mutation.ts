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
