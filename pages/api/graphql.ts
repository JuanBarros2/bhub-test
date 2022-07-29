import { Cliente } from './../../domain/Cliente';
import { createServer, ResolverFn } from '@graphql-yoga/node'

const typeDefs = /* GraphQL */ `
  type Query {
    clientes: [Cliente]
  }

  type Mutation {
    createCliente(cliente: ClienteInput!): Cliente!
  }

  type DadoBancario {
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
  }

`
const clientes: Cliente[] = []

const resolvers = {
    Query: {
        clientes() {
            return clientes
        },
    },
    Mutation: {
        createCliente(parent: unknown, args: { cliente: Cliente }) {
            clientes.push(args.cliente)
            return args.cliente
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