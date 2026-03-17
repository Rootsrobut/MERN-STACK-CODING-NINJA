import mongoose from "mongoose";
import { categorySchama } from "../features/product/category.schema.js";

const url = process.env.DB_URL;
export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url);
    await addCategories();
    console.log("Mongodb using mongoose is connected");
  } catch (err) {
    console.log(err);
  }
};
async function addCategories() {
  const CategoryModel = mongoose.model('Category', categorySchama);
  const categories = await CategoryModel.find();
  if (!categories || categories.length == 0) {
    await CategoryModel.insertMany([
      { name: "Books" },
      { name: "Clothing" },
      { name: "Electronics" },
    ]);
  };
  console.log("Categories is added");
}
