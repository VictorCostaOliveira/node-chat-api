const keys = require('./keys');
const mongoose = require('mongoose');

const Mongo = {
  init() {
    console.log(keys.mongoURI)
    mongoose.connect(keys.mongoURI)
    mongoose.connection.on('error',()=>{
      console.log("Error in database connection")
    });
    mongoose.connection.once('open',function(){
      console.log("DB connection established")
    });
  }
};

module.exports = Mongo;