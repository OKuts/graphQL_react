const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
// const router = require('./routes/router')

const PORT = process.env.PORT || 5000;
const app = express();
// app.use(express.json());
app.use(cors());
// app.use('/auth', router);
app.use('/graphql', graphqlHTTP({
  graphiql: true
}));

// const createPath = page => path.resolve(__dirname, 'pages', `${page}.html`);

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
