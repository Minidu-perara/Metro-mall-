const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { connectDB } = require("./utils/connection.js");

const app = express();
app.use(express.json());
app.use(cors());

//import routes
const itemRoutes = require("./routes/item.route.js");

//routes
app.use("/api/item", itemRoutes);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`😎 app is running on ${PORT}`);
  connectDB();
});
