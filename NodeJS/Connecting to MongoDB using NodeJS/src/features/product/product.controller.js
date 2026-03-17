import ProductModel from "./product.model.js";
import { ObjectId } from "mongodb";
import ProductRepository from "./product.repository.js";
import { ApplicationError } from "../../error-handler/applicationError.js";
export default class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }
  async getAllProducts(req, res) {
    try{
      const products = await this.productRepository.getAll();
      res.status(200).send(products);
    }catch(err){
      console.log('Error',err);
      throw new ApplicationError('something is worng with database ',500);
   }
  }
  async addProduct(req, res) {
    try {
      const { name, price, sizes } = req.body;
      const newProduct = new ProductModel(
        name,null,
        parseFloat(price),
        req.file.filename,
        null,
        sizes.split(",")
      );
      const createdRecord = await this.productRepository.add(newProduct);
      console.log(createdRecord)
      res.status(201).send(createdRecord);
    } catch (err) {
      console.log("Error", err);
      throw new ApplicationError("something is worng with database ", 500);
    }
  }
  async rateProduct(req, res, next) {
    try {
      const userID = req.userID;
      const productID = req.body.productID;
      const rating = req.body.rating;
      await this.productRepository.rate(userID, productID, rating);
      return res.status(200).send('ratings has been added');
    } catch (err) {
      console.log("Passing error to middleware");
      next(err);
    }
  }

  async getOneProduct(req, res) {
    try{
      const { id } = req.params; 
      console.log("Received ID:", req.params.id);
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid product ID" });
     }
      const product = await this.productRepository.get(id);
      if (!product) {
        res.status(404).send("Product not found");
      } else {
        return res.status(200).send(product);
      }
    }
    catch(err){
      console.log('Error',err);
      throw new ApplicationError('something is worng with database ',500);
   }
  }
  async filterProducts(req, res) {
    try{
      const minPrice = req.query.minPrice;
      const maxPrice = req.query.maxPrice;
      const category = req.query.category;
      const result = await this.productRepository.filter(minPrice, maxPrice, category);
      res.status(200).send(result);
    }
    catch(err){
      console.log('Error',err);
      throw new ApplicationError('something is worng with database ',500);
   }
  }
}
