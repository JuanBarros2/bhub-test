import { Cliente, ClientId } from './../../domain/Cliente';
import { createServer } from '@graphql-yoga/node'
import { typeDefs } from '../../graphql/typeDefs';

let clientes: Cliente[] = []
let indexKey = 0

const resolvers = {
  Query: {
    clientes() {
      return clientes
    },
  },
  Mutation: {
    createCliente(_: unknown, args: { cliente: Cliente }) {
      const newId = indexKey
      indexKey++;
      const newCliente = { ...args.cliente, id: `${newId}`, dataCadastro: new Date() }
      clientes.push(newCliente)
      return newCliente
    },
    deleteCliente(_: unknown, args: { id: ClientId }) {
      clientes = clientes.filter((cliente) => cliente.id !== args.id)
      return clientes;
    },
    updateCliente(_: unknown, args: { cliente: Cliente }) {
      clientes = clientes.map((cliente) => cliente.id === args.cliente.id
        ? args.cliente
        : cliente)
      return args.cliente
    },
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