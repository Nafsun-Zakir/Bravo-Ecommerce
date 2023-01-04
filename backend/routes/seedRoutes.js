import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({}); // Remove all previous records in the product model.
  const createdProducts = await Product.insertMany(data.products); // Create new products by inserting an array of products to the product model in the db and reaturn the created product in the created product variable.
  await User.deleteOne({});
  const createdUsers = await User.insertMany(data.users); // Create new users in data
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;
