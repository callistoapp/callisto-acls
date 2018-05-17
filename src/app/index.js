import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import Graphql from './graphql'
const app = express();

app.get('/', (req, res) => {
    res.send('Coucou')
})

app.use('/graphql', graphqlHTTP({
    schema: Graphql.schema,
    rootValue: Graphql.root,
    graphiql: true,
}));

export default app
