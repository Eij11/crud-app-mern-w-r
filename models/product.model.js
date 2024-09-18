const mongoose = require("mongoose");

//this will contain every objects
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  //this allows to have 2 more extra fields
  // when it is created and updated
  { timestamps: true }
);
// This line creates a Mongoose model named “Product” based on the ProductSchema. A model is a class with which we construct documents. In this case, each document will be a product with the defined schema.
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;

//we're going to use this to create products in the db
