import { Cliente } from './../../domain/Cliente';
import { createServer } from '@graphql-yoga/node'

const typeDefs = /* GraphQL */ `
  type Query {
    clientes: [Cliente]!
  }
`

const resolvers = {
    Query: {
        clientes() {
            return [{ name: 'Nextjs' }]
        },
    },
}

const server = createServer({
    schema: {
        typeDefs,
        resolvers,
    },
    endpoint: '/api/graphql',
})

export default server