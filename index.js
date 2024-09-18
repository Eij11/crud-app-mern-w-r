const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

//middleware
app.use(express.json());
//CREATE API: TC Form || Needs to be below the middleware
app.use(express.urlencoded({ extended: true }));

//middleware: routes
app.use("/api/products", productRoute);

//request and response
//goto: http://localhost:3000/
// run the server to get the message
app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});

//=====================================================
//make sure db is connected first before the server
//paste connection string
mongoose
  .connect(
    "mongodb+srv://admin123:test123@backend.igyzi.mongodb.net/?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected to the db!");

    app.listen(3000, () => {
      console.log("Server is running in port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed.");
  });
