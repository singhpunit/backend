const mongoose = require("mongoose");

const connectDatabase = () => {//mongodb+srv://punitsnz:<password>@cluster0.fkexuiu.mongodb.net/?retryWrites=true&w=majority
  mongoose
    .connect('mongodb+srv://punitsnz:PunitSingh1234@cluster0.fkexuiu.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
