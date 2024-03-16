"use server"

import  FoodItems from "../models/fooditem";





export async function FetchItems(){
    try{
    const getdata = await FoodItems.find().lean();
    return({ sucess:true , message: "user Get Sucessfully ",  Productdata:getdata })
  
}catch(error){
     return ({ error:error , message: "user not Found Error !" })
    }


}