// Dependencies
const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const db = require("./models");
const mongoDBPW = "dogmeat2020";

const PORT = process.env.PORT || 3001;

const app = express();
const cors = require('cors');


// app.use(logger("dev"));



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://aBuiDev:${mongoDBPW}@honeyhomagecluster.zwmmp.mongodb.net/honeyHomageDB?retryWrites=true&w=majority`, { useNewUrlParser: true });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Routes
app.get('/products/all', (request, response) => {
  db.Product.find({}, (error, data) => {
    response.json(data);
  });
});

app.get('/orders/all', (request, response) => {
  db.Order.find({}, (error, data) => {
    response.json(data);
  });
});

app.post("/#store", async (request, response) => {
  
  const cart_id = request.body.cart_id;
  const product = request.body.product;
  const price = request.body.price;
  const quantity = request.body.quantity;

  const Cart = new CartModel({
    cart_id: cart_id,
    product: product,
    price: price,
    quantity: quantity
  });
  
  try{ await Cart.save();
  response.send('Item added');}catch(error){
    console.log(error.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



// Listener
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// app.post("/AdminPortal", async (request, response)) => {
  //   const Title = request.body.title;
  //   const Details = request.body.details;
  //   const Price = request.body.price;
  //   const Img = request.body.img;
    
  //   const Product = new ProductModel({
  //     title: Title,
  //     details: Details,
  //     price: Price,
  //     img: Img,
  //   });
  
  //   try{ await Product.save
  //     response.send("Product Submitted");
  //   }catch(error){
  //     console.log(error.message);