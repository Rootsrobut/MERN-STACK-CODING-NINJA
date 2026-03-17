import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../error-handler/applicationError.js";
import mongoose from "mongoose";
import {productSchema} from './product.schema.js';
import { reviewSchema } from "./review.schema.js";
import { categorySchama } from './category.schema.js'
const ProductModel=mongoose.model('Product',productSchema);
const ReviewModel=mongoose.model('Review', reviewSchema);
const CategoryModel=mongoose.model('Category',categorySchama);
class ProductRepository{
     constructor(){
           this.collection="products";
     }
    async add(productData){
        try{
            //1. Add the product
           productData.categories=productData.categories.split(',').map(e=>e.trim());
           const newProduct=new ProductModel(productData);
           const savedProduct=await newProduct.save();
           //2. update categories.
           await CategoryModel.updateMany(
             {_id:{$in:productData.categories}},
             {
                $push:{products:new ObjectId(savedProduct._id)}
             }
           );
        }
        catch(err){
            console.log('Error',err);
            throw new ApplicationError('something is worng with database ',500);
        }
    }
    async getAll(){
        try{
          const db=getDB();
          const collection=db.collection(this.collection);
          const ans=await collection.find({}).toArray();
          //console.log(ans);
          return ans;
        }
        catch(err){
            console.log('Error',err);
            throw new ApplicationError('something is worng with database ',500);
        }
    }
    async get(id){
        try{
          const db=getDB();
          const collection=db.collection(this.collection);
          if (!ObjectId.isValid(id)) {
            throw new ApplicationError("Invalid ObjectId");
         }
          return await collection.find({_id:new ObjectId(id)}).toArray() ;
        }
        catch(err){
            console.log('Error',err);
            throw new ApplicationError('something is worng with database ',500);
        }
    }
    // product should have minprice and category
    async filter(minPrice,categories){
        try{
             const db=getDB();
             const collection=db.collection(this.collection);
             let filterExpression={};
             if(minPrice){
                 filterExpression.price={$gte:parseFloat(minPrice)};
             }
             // ['Car1','Car2']
             categories=JSON.parse(categories.replace(/'/g,'"'));
             console.log(categories);
             if(categories){
               filterExpression.price={$and:[{category:{$in:categories}},filterExpression]}
             }
             return await collection.find(filterExpression).project({name:1,price:1,_id:0,ratings:{$slice:-1}}).toArray();
        }
        catch(err){
            console.log('Error',err);
            throw new ApplicationError('something is worng with database ',500);
        }
    }
    async rate(userID, productID, rating) {
        try {
           // 1 . check if Product exists
           const productToupdate=await ProductModel.findById(productID);
           if(!productToupdate){
            throw new Error('Product not found');
           }
           // 2 . Get the existing review
           const userReview = await ReviewModel.findOne({
            product:new ObjectId(productID),
            user:new ObjectId(userID)
           });
           if(userReview){
             userReview.rating=rating;
             await userReview.save();
           }
           else{
               const newReview=new ReviewModel({
                   product:new ObjectId(productID),
                   user:new ObjectId(userID),
                   rating:rating
               });
               newReview.save();
           }
        } catch (err) {
            console.error('Error:', err); 
            throw new ApplicationError(err.message || 'Database error', 500);
        }
    }
    async averageProductPricePerCategory(){
        try{
            const db = getDB();
            const collection = db.collection(this.collection);
            return await collection.aggregate([
                {
                    // Stage 1: Get avg  price per category
                    $group:{
                        _id:"$category",
                        averagePrice:{$avg:"$price"}
                    }

                }
            ]).toArray()

        }
        catch (err) {
            console.error('Error:', err); 
            throw new ApplicationError(err.message || 'Database error', 500);
        }
        
    }
    
}

export default ProductRepository;