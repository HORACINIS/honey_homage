const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://aBuiDev:dogmeat2020@honeyhomagecluster.zwmmp.mongodb.net/honeyHomageDB?retryWrites=true&w=majority", { useNewUrlParser: true });

const productSeed = [
  {
    title: "Lakeview Honey T-One",
    details: 
      "500ml Grade I, Organically Filtered Honey.",
    image: "honeyType01",
    price: 19.95,
    sale: false,
    inStock: true
  },
  {
    title: "Riverwood Honey T-Two",
    details: 
      "500ml Grade I, Organically Filtered Honey.",
    image: "honeyType02",
    price: 19.95,
    sale: false,
    inStock: true
  },
  {
    title: "Rockpool Honey T-Three",
    details: 
      "500ml Grade I, Organically Filtered Honey.",
    image: "honeyType03",
    price: 19.95,
    sale: false,
    inStock: true
  },
  {
    title: "Fir Honey O-One",
    details: 
      "500ml Grade II, Organic Honey w/ Honeycomb.",
    image: "honeyType04",
    price: 24.95,
    sale: false,
    inStock: true
  },
  {
    title: "Ash Honey O-Two",
    details: 
      "500ml Grade II, Organic Honey w/ Honeycomb.",
    image: "honeyType05",
    price: 24.95,
    sale: false,
    inStock: true
  },
  {
    title: "Oak Honey O-Three",
    details: 
      "500ml Grade II, Organic Honey w/ Honeycomb.",
    image: "honeyType06",
    price: 24.95,
    sale: false,
    inStock: true
  },
  {
    title: "Dolostone Honey A-One",
    details: 
      "450ml Grade III, Stone Filtered Organic Honey.",
    image: "honeyType07",
    price: 29.95,
    sale: false,
    inStock: true
  },
  {
    title: "Rhyolite Honey A-Two",
    details: 
      "450ml Grade III, Stone Filtered Organic Honey.",
    image: "honeyType08",
    price: 29.95,
    sale: false,
    inStock: true
  },
  {
    title: "Slate Honey A-Three",
    details: 
      "450ml Grade III, Stone Filtered Organic Honey.",
    image: "honeyType09",
    price: 29.95,
    sale: false,
    inStock: true
  }
];

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
