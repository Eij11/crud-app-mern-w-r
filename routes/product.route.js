const express = require("express");
const router = express.Router();
// const Product = require("./models/product.model.js");
const {
  getProducts,
  getProductById,
  putProductUpdate,
  postProductCreate,
  deleteProducts,
} = require("../controllers/product.controller.js");

//Controller Function
// can add separately in a file
router.post("/", postProductCreate);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", putProductUpdate);
router.delete("/:id", deleteProducts);

module.exports = router;
