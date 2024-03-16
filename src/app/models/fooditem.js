import mongoose from "mongoose";

var FoodSchema = new mongoose.Schema({
  userid: {
    type: String,
  },
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
  images: [
    {
      name: String,
    },
  ],
});

const FoodItems =
  mongoose.models.fooditems || mongoose.model("fooditems", FoodSchema);

export default FoodItems;
