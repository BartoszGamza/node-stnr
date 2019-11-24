const express = require("express");
const mongoose = require("mongoose");

require("./models/url")

//Connect to MongoDB
const mongoURI = "mongodb://localhost/url-shortner";
const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect(mongoURI, connectOptions)
.then((db) => {
  console.log('connected to MongoDb')
})
.catch(err => console.log(err));

// Express
const app = express();
app.use(express.json());
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});
