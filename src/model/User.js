import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema= new Schema({
  name:{
    required:true,
    type:String
  }
  ,  password:{
    type:String,
    default:undefined
  }
  ,  email:{
    required:true,
    type:String
  }
  ,  isDoctor:{
    type:Boolean,
    default:false,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
  PendingAppointments:[
    {
      type:mongoose.Types.ObjectId,
      ref:'Appointment',
    }
  ],
  MyAppointments:[
    {
      type:mongoose.Types.ObjectId,
      ref:'Appointment',
    }
  ]

},{timestamps:true})

export const User= mongoose.models.User ?? mongoose.model("User", userSchema)