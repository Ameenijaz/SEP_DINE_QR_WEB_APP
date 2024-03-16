
import mongoose from "mongoose";

var UserSchema = new mongoose.Schema({    
        resturantname: {
                type: String,
        },
        phonenum:{
                type: Number,
        },
        cnic:{
                type: String,
        },
        email: {
                type: String,
        },
        password: { 
                type: String
        },
        username:{
                type: String         
        },
        userType:{
                type: String         
        }
});


const User   = mongoose.models.users_dineqr || mongoose.model('users_dineqr', UserSchema);

export default User;