import mongoose from "mongoose";

var AddToCartSchema = new mongoose.Schema({
  food_name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  calories_burned: {
    type: String,
  },
   categories: {
    type: String,
  },
   d_name:{
    type: String,
  },
   d_price:{
    type: Number,
  },
   d_total:{
    type: Number,
  },
   d_quantity:{
    type: Number,
  },
   d_messages:{
    type: String,
  },
  images: [
    {
      name: String,
    },
  ],
  userid: {
    type: String,
  },
});

const AddToCartItems = mongoose.models.addtocartitems || mongoose.model("addtocartitems", AddToCartSchema);

export default AddToCartItems;
