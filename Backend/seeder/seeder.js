const mongoose = require("mongoose");
const dontenv = require("dotenv");
const Products = require("../models/Products.js");
const User = require("../models/User.js");
const productsData = require("../data/products.js");
dontenv.config();
//  connect databse
mongoose.connect(process.env.MONGO_URI);

// finction for seed data
const seedData = async () => {
  try {
    // clear the existing data in the products collection
    await Products.deleteMany();
    await User.deleteMany();

    // create defauld admin user
    const createdUser = await User.create({
      name: "Admin",
      email: "admin@example.com",
      password: "password123",
      role: "admin",
    });
    //assign the default user to the ID to each product
    const userID = createdUser._id;
    sampleProducts = productsData.map((product) => {
      return { ...product, user: userID };
    });

    //insert the sample products into the database
    await Products.insertMany(sampleProducts);
    console.log("Data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error occurred while seeding data:", error);
    process.exit(1);
  }
};

seedData();
