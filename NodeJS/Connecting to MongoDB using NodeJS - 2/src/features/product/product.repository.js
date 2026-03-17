import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

class ProductRepository{
     constructor(){
           this.collection="products";
     }
    async add(newProduct){
        try{
           const db=getDB();
           const collection=db.collection(this.collection);
           await collection.insertOne(newProduct);
           return newProduct;
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
            const db = getDB();
            const collection = db.collection(this.collection);
            //1. Remove existing entry
            await collection.updateOne({
                _id:new ObjectId(productID)
            },{
                $pull:{ratings:{userID:new ObjectId(userID)}}
            })
            //2. Add new entry
            await collection.updateOne({
                _id:new ObjectId(productID)
            },{
                $push:{ratings:{userID:new ObjectId(userID),rating}}
            })
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