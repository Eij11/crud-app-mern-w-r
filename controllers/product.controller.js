const Product = require("../models/product.model.js");

//=====================================================
//CREATE API: nasasave ang data sa db
//await and async since it takes time
const postProductCreate = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//=====================================================
//GET API ALL: retrieve/read/view
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//=====================================================
//GET API by ID
// http://localhost:3000/api/products/66e90ced1684fae838ecec6c
//product: singular
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//=====================================================
//UPDATE PRODUCTS API
//put/patch - command to update
//update product by id
//product: singular
const putProductUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//=====================================================
//DELETE PRODUCT API
const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted succesfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  putProductUpdate,
  postProductCreate,
  deleteProducts,
};
