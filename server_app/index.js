const { ApolloServer, gql } = require('apollo-server');

let students = [
  {
    "id": 1,
    "name": "Ali",
    "email": "ali@gmail.com",
    "age": 21
  },
  {
    "id": 2,
    "name": "Mohsin",
    "email": "mohsin@gmail.com",
    "age": 21
  },
  {
    "id": 3,
    "name": "Aamir",
    "email": "aamir@gmail.com",
    "age": 21
  }
]

const resolvers = {
  Query: {
    students: () => students,
  },
  Mutation: {
    addStudent: (e, { input }) => {
      console.log(input)
      students.push(
        {
          name: input.name,
          age: input.age,
          email: input.email,
          id: input.id
        }
      )
      return {
        name: input.name,
        age: input.age,
        email: input.age,
        id: input.id
      }
    }
  }
};

const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

  input StdInput {
    id: Int
    name: String
    email: String
    age: Int
  }

  type Query {
    students: [Student]
  }

  type Mutation {
    addStudent(input: StdInput): Student
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});