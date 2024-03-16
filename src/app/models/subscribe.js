import mongoose from "mongoose";

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

const Subscribe =
  mongoose.models.Subscribe || mongoose.model("Subscribe", UserSchema);

export default Subscribe;
