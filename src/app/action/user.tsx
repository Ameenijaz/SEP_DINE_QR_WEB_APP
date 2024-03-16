"use server"
import User from "../models/user";
import bcrypt from "bcrypt";


export async function DeleteUser(userid){
    try{
    const del_user = await User.findOneAndDelete({_id:userid});
    return({ sucess:true , message: "user Deleted Sucessfully ",del_user:del_user })
  
}catch(error){
     return ({ error:error , message: "user not Deleted !" })
    }


}




export async function GetUser(_id){
    try{
    const getdata = await User.find({_id});
    return({ sucess:true , message: "user Get Sucessfully ",  Get:getdata })
  
}catch(error){
     return ({ error:error , message: "user not Found Error !" })
    }


}







export async function UpdateUserById(_id, username , email) {
    try {
      // Assuming User is a Mongoose model
      const updatedUser = await User.findOneAndUpdate({ _id }, {username , email} , { new: true });
  
      if (updatedUser) {
        return ({ status : 200, message: "User updated successfully", updatedUser });
      } else {
        return ({  status : 404, message: "User not found" });
      }
    } catch (error) {
      return ({ status : 400, message: "Error updating user" });
    }
  }
  

/////////////////////////  Change Password //////////////////////////////////


export async function UserChangePassword(_id ,currentPassword ,newPassword  ){

console.log(_id , currentPassword , newPassword , "get in api ")

  // Find the user by username
  const user = await User.findOne({ _id });

  if (user) {
    // Compare the provided current password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

    if (isPasswordValid) {
      // Hash the new password before updating it in the database
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);

      // Update the user's password
      await User.updateOne({ _id }, { password: hashedNewPassword });

     return ({status : 200 , message: 'Password changed successfully' });
    } else {
      return ({ status: 400 ,  message: 'Invalid current password' });
    }
  } else {
    return ({ status : 404 , message: 'User not found' });
  }

}




