const { ApolloServer, gql } = require('apollo-server-lambda')
var faunadb = require('faunadb'),
  q = faunadb.query;

const typeDefs = gql`
  type Query {
    todos: [Todo!]
  }
  type Mutation {
    addTodo(task: String!): Todo
  }
  type Todo {
    id: ID!
    task: String!
    status: Boolean!
  }
`

const todosList = [
  { id: 1, task: 'My task 1', status: false },
  { id: 2, task: 'My second task', status: true },
  { id: 3, task: 'My third task', status: false },
]

const resolvers = {
  Query: {
    todos: async (root, args, context) => {
      // return todosList
      try {
        var adminClient = new faunadb.Client({ secret: 'fnAD3k5_3EACB6gCBsRr3R3wpEKT_uo1PpVFackm' });

        const result = await adminClient.query(
          q.Map(
            q.Paginate(q.Match(q.Index('task'))),
            q.Lambda(x => q.Get(x))
          )
        );
        // console.log(result.data)
        // return todosList
        return result.data.map(d => {
          return {
            id: d.ts,
            task: d.data.task,
            status: d.data.status
          }
        })
      }
      catch (err) {
        console.log(err)
      }
    }
  },
  Mutation: {
    addTodo: async (_, { task }) => {

      /*const newTask = {
        id: todosList.length + 1,
        task,
        status: false
      }
      todosList.push(newTask);
      console.log(todosList);*/

      try {
        var adminClient = new faunadb.Client({ secret: 'fnAD3k5_3EACB6gCBsRr3R3wpEKT_uo1PpVFackm' });

        const result = await adminClient.query(
          q.Create(
            q.Collection('todos'),
            {
              data: {
                task: task,
                status: false
              }
            },
          )
        );

        console.log(result.data)
        return (result.data)
      }
      catch (err) {
        console.log(err)
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()
