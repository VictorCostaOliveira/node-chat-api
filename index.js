const express  = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const http = require('http');

const message = require('./model/message');

const ChatSocket = require('./chatSocket');
const Mongo = require('./config/mongo');

const app = new express()

app.use(bodyParser.json())
app.use(cors())

const server = app.listen(5000, '0.0.0.0', () => {
  console.log("I am running at port 5000")
});

Mongo.init();
const chatSocket = new ChatSocket();
chatSocket.init(server);

app.get('/chat', async (req,res) => {
  let result = await message.find()
  console.log(result.filter(message => !(message.handle == null)));
  res.send(result.filter(message => !(message.handle == null)));
});