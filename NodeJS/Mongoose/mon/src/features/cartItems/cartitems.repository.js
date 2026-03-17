import { ObjectId, ReturnDocument } from "mongodb";
import { getDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

export default class CartItemsReposiory {
  constructor() {
    this.collection = "cartItmes";
  }
  async add(productID, userID, quantity) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      const id=await this.getNextCounter(db);
      // Find the document
      // find the quantity either  update or insert both 
      // Insertion
      await collection.updateOne({
         productID:new ObjectId(productID),
         userID:new ObjectId(userID)
        },
        {
            $setOnInsert:{_id:id},
            $inc:{quantity:quantity}
        },
        {
          upsert:true 
        });
    } catch (err) {
      console.log("Error", err);
      throw new ApplicationError("something is worng with database ", 500);
    }
  }
  async get(userID) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      return await collection.find({userID:new ObjectId(userID)}).toArray();

    } catch (err) {
      console.log("Error", err);
      throw new ApplicationError("something is worng with database ", 500);
    }
  }
  async delete(cardItemID, userID) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      const result=await collection.deleteOne({
        // _id:new ObjectId(cardItemID),
        _id:cardItemID,
        userID:new ObjectId(userID)
      });
      return result.deleteCount>0;
      
    } catch (err) {
      console.log("Error", err);
      throw new ApplicationError("something is worng with database ", 500);
    }
  }
  async getNextCounter(db){
   const returnDocument= await db.collection("counters").findOneAndUpdate(
      {_id:'cartItemId'},
      {$inc:{value:1}},
      {returnDocument:"after"}
    )
    console.log(returnDocument);
    return returnDocument.value;
  }
}
