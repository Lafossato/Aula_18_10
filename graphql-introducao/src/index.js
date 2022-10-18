import { createServer } from '@graphql-yoga/node'

const typeDefs = `
type Livro {
id: ID!
titulo: String!
genero: String!
edicao: Int,
preco: Float
},
type Query {
    effectiveJava: Livro!
    }
`;

const resolvers = {
    Query: {
        effectiveJava() {
            return {
                id: '123456',
                titulo: null,
                genero: 'Técnico',
                edicao: 3,
                preco: 43.9
            }
        }
    },
};
const server = createServer({
    schema: {
        typeDefs,
        resolvers
    }
})
server.start(() => {
    'Servidor no ar...'
})