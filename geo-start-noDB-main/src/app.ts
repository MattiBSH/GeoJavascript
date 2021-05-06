import express from 'express'
const app = express()
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';

app.get('/', (req, res) => res.send('Geo Demo!'))


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

const PORT = 4568
app.listen(4568, () => console.log('Example app listening on ' + PORT))
