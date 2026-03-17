import { Schema } from "mongoose";
const userSchema=new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,'please enter valid email']
    },
    password:{
        type:String,
        //match:[/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,'please enter valid password']
        //custom validater
        //
        validate:{
            validator:function(value){
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value);
            },
            massage:"pasword must be 8-12 characters and have a spacial characters"
        }
    },
    type:{
        type:String,
        enum:['customer','seller']
    }
});
export default userSchema;