import mongoose from "mongoose";
import userSchema from './user.schema.js'
import {ApplicationError} from '../../error-handler/applicationError.js'
import UserModel from "./user.model.js";
const userModel=mongoose.model('User',userSchema);
export default class UserRepository{
  async signUp(user){
    try{
      const newUser=new userModel(user);
      await newUser.save();
      return newUser;
    }
    catch(err){
      console.log(err);
      if(err instanceof mongoose.Error.ValidationError){
        throw err;
      }
      throw new ApplicationError('something is worng in database',500);
    }
  }
  async signIn(email,password){
    try{
      return await userModel.find({email,password});
    }
    catch(err){
      console.log(err);
      throw new ApplicationError('something is worng in database',500);
    }
  }
  async findByEmail(email) {
      try {
        return await userModel.findOne({email});
      } catch (err) {
        console.log("err", err);
        throw new ApplicationError("Something went wrong with database", 500);
      }
    }
    async resetPassword(userID,newPassword){
        try{
          let user=await UserModel.findById(userID);
          if(user){
             user.password=newPassword;
             user.save();
          }
          else{
            throw new Error('user not find');
          }
       
        }
        catch(err){
          console.log("err", err);
          throw new ApplicationError("Something went wrong with database", 500);
        }
    }
}