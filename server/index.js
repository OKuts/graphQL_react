const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const root = require('./root/root');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root
}));


const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log('listening port ' + PORT);
    })
  } catch (e) {
    console.log(e)
  }
}

start();
