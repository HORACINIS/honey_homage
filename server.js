// Dependencies
const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const db = require("./models");
const mongoDBPW = "dogmeat2020";

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(logger("dev"));



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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



app.post('/orders/create', (request, response) => {
  const orderItems = request.body;
  console.log(orderItems);
  db.Order.create({ 
    "user_id": request.body.user_id,
    "items": request.body.pickedItems,
    "total": request.body.total,
    "status": request.body.status,
    "shippingAddress": request.body.shippingAddress,
    "comments": request.body.comments,
    "contactNumber": request.body.contactNumber
  }, (error, data) => {
    console.log("Hello World");
  })
});



app.post('/orders/update/:id', (request, response) => {
  const updateItems = request.body;
  const updateItemsUserID = request.params.id;
  console.log(updateItems);
  console.log(updateItemsUserID);
  console.log("Hello World!");
  db.Order.updateMany({ user_id: updateItemsUserID }, { 
    "shippingAddress": request.body.shippingAddress,
    "contactNumber": request.body.contactNumber,
    "comments": request.body.comments
  }, { multi: true }, (error, result) => {
    if (error) {
      console.log(error);
    }
    console.log("Item Updated");
  });
});



// Display All Orders
app.get('/orders/all', (request, response) => {
  db.Order.find({}, (error, result) => {
    response.json(result);
  })
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



// Listener
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
