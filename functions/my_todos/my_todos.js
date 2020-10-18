const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    todos: [Todo!]
  }
  type Todo {
    id: ID!
    task: String!
    status: String!
  }
`

const todos = [
  { id: 1, task: 'Terry Pratchett', status:"New" },
  { id: 2, task: 'Stephen King', status:"New"},
  { id: 3, task: 'JK Rowling', status:"New" },
]

const resolvers = {
  Query: {
    todos: (root, args, context) => {
      return todos
    }
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()
