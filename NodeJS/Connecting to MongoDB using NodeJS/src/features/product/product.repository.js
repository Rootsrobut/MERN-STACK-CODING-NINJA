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
    async filter(minPrice,maxPrice,category){
        try{
             const db=getDB();
             const collection=db.collection(this.collection);
             let filterExpression={};
             if(minPrice){
                 filterExpression.price={$gte:parseFloat(minPrice)};
             }
             if(maxPrice){
                filterExpression.price={...filterExpression.price,$gte:parseFloat(maxPrice)};
             }
             if(category){
                filterExpression.category=category;
             }
             return await collection.find(filterExpression).toArray();
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
            // const productObjectId = new ObjectId(productID);
            // await collection.updateOne(
            //     { _id: new ObjectId(productID) },
            //     { $push: { ratings: { userID, rating } } }
            //         );

            // Methord 1

            // 1. find the Product
            // const product=await collection.findOne({_id:new ObjectId(productID)});
            // // 2. find the rating 
            // const userRating=product?.ratings?.find(r=>r.userID==userID);
            // if(userRating){
            //     //3. Update the rating
            //     await collection.updateOne({
            //        _id:new ObjectId(productID),"ratings.userID":new ObjectId(userID)
            //     },{
            //          $set:{"ratings.$.rating":rating}
            //     })
            // }
            // else{
            //     await collection.updateOne({
            //         _id:new ObjectId(productID)
            //     },{
            //         $push:{ratings:{userID:new ObjectId(userID),rating}}
            //     })
            // }

            // Methord 2
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
    
}

export default ProductRepository;