// import mongoose from "mongoose";
// const ProductSchema = new mongoose.Schema({
// name:{
//     type:String,
//     required:true
// },
// slug:{
//     type:String,
//     required:true
// },
// description:{
//     type:String,
//     required:true
// },
// price:{
//     type:Number,
//     required:true
// },
// categray:{
//     type:mongoose.ObjectId,
//     ref:"category",
//     required:true
// },
// quantity:{
//     type:Number,
//     required:true
// },
// photo:{
//     type:Buffer,
//     contentType:true
// },
// shipping:{
//     type:Boolean,
// },
// },{timestamps:true})
// export default mongoose.model('products',ProductSchema)
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("products", productSchema);