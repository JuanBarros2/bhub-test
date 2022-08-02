export const typeDefs = /* GraphQL */ `
  type Query {
    """
    Retorna a lista com todos os clientes.
    """
    clientes: [Cliente]
  }

  type Mutation {
    """
    Cria um cliente e retorna o cliente criado.
    """
    createCliente(cliente: ClienteInput!): Cliente!
    """
    Deleta um cliente dado a razão social. Retorna a lista atualizada de clientes.
    """
    deleteCliente(id: ID!): [Cliente]
    """
    Atualiza um cliente de acordo com sua razão social. Retorna o cliente atualizado.
    """
    updateCliente(cliente: ClienteInput!): Cliente!
  }

  """
  Representação dos dados bancários.
  """
  type DadoBancario {
    agencia: String
    conta: String
    banco: String
  }

  input DadoBancarioInput {
    agencia: String
    conta: String
    banco: String
  }

  """
  Representação de um cliente.
  """
  type Cliente {
    id: ID!
    razaoSocial: String
    telefone: String
    endereco: String
    dataCadastro: String
    faturamentoDeclarado: Float
    dadosBancarios: [DadoBancario]
  }

  input ClienteInput {
    id: ID
    razaoSocial: String
    telefone: String
    endereco: String
    dataCadastro: String
    faturamentoDeclarado: Float
    dadosBancarios: [DadoBancarioInput]
  }

`