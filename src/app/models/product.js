var mongoose = require('mongoose');


var products = new mongoose.Schema({
    purpose:{
        type: String,
    },

   

    propertyType:{
        type: String
    },
    subType:{
        type: String
    },



    city:{
        type: String,
    },

    location:{
        type: String,
    },

    Area_size:{
        type: String
    },
    price:{
        type: String
    },
    bedrooms:{
        type: String
    },
    bathrooms:{
        type: String
    },
     title:{
        type: String
    },
    description:{
        type: String
    },
    email:{
        type: String
    },
    mobile:{
        type: String
    },
    images: [
        {
            name:String
        }
    ],
    videos: [
        {
            name:String
        }
    ],
 
});



const Product   = mongoose.models.products || mongoose.model('products', products);

export default Product;



