const express = require('express');
const {ServerConfig } = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the port on ${ServerConfig.PORT}`)
})