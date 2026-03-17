import mongoose from "mongoose";


export const categorySchama=new mongoose.Schema({
    name:String,
    products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ]

})