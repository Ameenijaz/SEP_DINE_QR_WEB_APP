
import mongoose from "mongoose";

var UserSchema = new mongoose.Schema({

    userid: {
        type: String,
     
},
        text: {
                type: String,
             
        },

      
    
});


const Search   = mongoose.models.searches || mongoose.model('searches', UserSchema);

export default Search;


