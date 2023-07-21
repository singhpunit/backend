const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect('mongodb+srv://punitsnz:PunitSingh1234@cluster0.fkexuiu.mongodb.net/?retryWrites=true&w=majority/myapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
