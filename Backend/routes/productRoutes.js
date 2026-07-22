const express = require("express");
const Product = require("../models/Products");
const { protected, admin } = require("../middleware/authmiddleware");
const router = express.Router();

//route post /api/products/create
//description create a new product
//access private

router.post("/create", protected, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      sku,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      //   rating,
      tags,
      dimensions,
      weight,
    } = req.body;

    const existingProduct = await Product.findOne({ sku });
    if (existingProduct) {
      return res.status(400).json({
        message: `Product with SKU '${sku}' already exists. Please use a unique SKU.`,
      });
    }

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      sku,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      //   rating,
      tags,
      dimensions,
      weight,
      user: req.user._id, //admin creating the product will be stored in the user field of the product model
    });

    const createdProduct = await product.save();
    res
      .status(201)
      .json({ message: "Product created successfully", createdProduct });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

//route post /api/products/update
//description update existing product id
//access private

router.put("/:id", protected, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      sku,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
    } = req.body;

    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.discountPrice = discountPrice || product.discountPrice;
      product.countInStock = countInStock || product.countInStock;
      product.sku = sku || product.sku;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.sizes = sizes || product.sizes;
      product.colors = colors || product.colors;
      product.collections = collections || product.collections;
      product.material = material || product.material;
      product.gender = gender || product.gender;
      product.images = images || product.images;
      product.isFeatured =
        isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished =
        isPublished !== undefined ? isPublished : product.isPublished;
      product.tags = tags || product.tags;
      product.dimensions = dimensions || product.dimensions;
      product.weight = weight || product.weight;

      //save the updated product
      const updatedProduct = await product.save();
      res.json({ updatedProduct });
      res.status(200).json({
        message: "Product updated successfully",
      });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});
//route delete /api/products/:id
//description delete existing product id
//access private

router.delete("/:id", protected, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      if (product.user.toString() !== req.user._id.toString()) {
        return res
          .status(401)
          .json({ message: "Not authorized to delete this product" });
      } else {
        await product.deleteOne();
        res.status(200).json({ message: "Product deleted successfully" });
      }
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

//route post /api/products
//description get all product with optional  query filter
//access public

router.get("/",async(req,res)=>{
  try {
    const {collection,size,color,gender,minPrice, maxPrice, sortBy,search, category,material,brand,limit}=req.query;
    
    let query={};

    //filter logic
    if(collection && collection.toLocaleLowerCase() !== "all"){
      query.collections =collection;
    }
    if(material){
      query.material={$in: material.split(",")}
    }
    if(brand){
      query.brand={$in: material.split(",")}
    }
  } catch (error) {
    
  }
})

module.exports = router;
