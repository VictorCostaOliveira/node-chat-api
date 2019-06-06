var Redis         = require('redis');
var Sidekiq       = require("sidekiq");

class SidekiqAdapter {
  constructor() {
    let redis = Redis.createClient({ "host": "localhost", "port": 6379, "namespace": "chat_development" })
    this.sidekiq = new Sidekiq(redis);
  };

  enqueueChatWorker(newChatParams) {
    console.log("SidekiqAdapter");
    console.log(newChatParams);
    console.log(this.sidekiq);
    let queue = this.sidekiq.enqueue("NewMessageWorker", [newChatParams], {
      retry: true,
      queue: 'critical'
    });
  };
};

module.exports = SidekiqAdapter;