// server.js
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.get("/", (req, res) => {
      res.send("Welcome to the backend server");
    });

    // Api routes
    // user routes
    app.use("/api/users", userRoutes);
    // product routes
    app.use("/api/products", productRoutes);
    app.listen(PORT, () => {
      console.log(`Server is Running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(
      "Failed to start server due to DB connection error:",
      error.message,
    );
    process.exit(1);
  }
};

startServer();
