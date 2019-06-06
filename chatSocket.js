"use strict";
const socket = require('socket.io')
const SidekiqAdapter = require('./sidekiqAdapter.js');
const message = require('./model/message')

class ChatSocket {

  init(server) {
    const io =  socket(server);
    const sidekiqAdapter = new SidekiqAdapter();

    io.on("connection", (socket) => {
      console.log("Socket Connection Established with ID :" + socket.id)
      socket.on("chat", async (chatParams) => {
        console.log(chatParams);
        chatParams.created = new Date();
        let response = await new message(chatParams).save()
        io.emit("chat", chatParams);
        // sidekiqAdapter.enqueueChatWorker(chatParams);
      });
    });
  };
};

module.exports = ChatSocket;