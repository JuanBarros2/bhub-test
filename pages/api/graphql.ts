import { Cliente, ClientId } from './../../domain/Cliente';
import { createServer, ResolverFn } from '@graphql-yoga/node'

const typeDefs = /* GraphQL */ `
  type Query {
    clientes: [Cliente]
  }

  type Mutation {
    createCliente(cliente: ClienteInput!): Cliente!
    deleteCliente(razaoSocial: String!): [Cliente]
  }

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

  type Cliente {
    razaoSocial: String
    telefone: String
    endereco: String
    dataCadastro: String
    faturamentoDeclarado: Float
    dadosBancarios: [DadoBancario]
  }

  input ClienteInput {
    razaoSocial: String
    telefone: String
    endereco: String
    dataCadastro: String
    faturamentoDeclarado: Float
    dadosBancarios: [DadoBancarioInput]
  }

`
let clientes: Cliente[] = []

const resolvers = {
  Query: {
    clientes() {
      return clientes
    },
  },
  Mutation: {
    createCliente(_: unknown, args: { cliente: Cliente }) {
      clientes.push(args.cliente)
      return args.cliente
    },
    deleteCliente(_: unknown, args: { razaoSocial: ClientId }) {
      clientes = clientes.filter((cliente) => cliente.razaoSocial !== args.razaoSocial)
      return clientes;
    }
  }
}

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: '/api/graphql',
})

export default server