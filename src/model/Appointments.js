import mongoose from "mongoose";


const appointmentSchema= new mongoose.Schema({
  title:{
    type:String,
    required: true,
  },
  description:{
    type:String,
    required: true,
  },
  withWhom:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true,
  },
  byWhom:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true,
  },
  startTime:{
    type: Number, // Store time in seconds
    required: true,
  },
  endTime:{
    type: Number, // Store time in seconds
    required: true,
  },
  isStarred:{
    type:Boolean,
    default:false,
  }
})

export const Appointment = mongoose.models.Appointment ?? mongoose.model("Appointment", appointmentSchema)