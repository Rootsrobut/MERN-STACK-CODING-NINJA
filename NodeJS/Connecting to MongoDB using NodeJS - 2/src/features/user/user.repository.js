import { ApplicationError } from "../../error-handler/applicationError.js";
import { getDB } from "../../config/mongodb.js";
class UserRepository {
  async signUp(newUser) {
    try {
      const db = getDB();
      const collection = db.collection("users");
      await collection.insertOne(newUser);
      console.log(newUser);
      return newUser;
    } catch (err) {
      console.log("err", err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
  async findByEmail(email) {
    try {
      const db = getDB();
      const collection = db.collection("users");
      return await collection.findOne({email});
    } catch (err) {
      console.log("err", err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
}

export default UserRepository;
