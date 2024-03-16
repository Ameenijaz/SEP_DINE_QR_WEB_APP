import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  food_name: String,
  description: String,
  price: String,
  calories_burned: String,
  categories: String,
  d_name: String,
  d_price: Number,
  d_total: Number,
  d_quantity: Number,
  d_messages: String,
  images: [
    {
      name: String,
    },
  ],

},
{
  timestamps: true
}
);

const OrderSchema = new mongoose.Schema({
  userid:String,
  status:String,
  cart_items: [CartItemSchema],
},
{
  timestamps: true
}
);

const Order = mongoose.models.order || mongoose.model('order', OrderSchema);

export default Order;
