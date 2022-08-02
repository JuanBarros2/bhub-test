export const getClientes =
/* GraphQL */`query {
  clientes {
    id
    dataCadastro
    endereco
    faturamentoDeclarado
    telefone
    razaoSocial
    dadosBancarios{
      agencia
      conta
      banco
    }
  }
}`
