"use server"
// "UpdatePassword.js" file
import User from "../../models/user";
import bcrypt from 'bcrypt';

export async function UpdatePassword(userId, newPassword) {
  // console.log(userId,newPassword,'hit ...?');
    try {

        const newPasswordHash = await bcrypt.hash(newPassword, 10);
    // Find the user by their userId
    const updatedUser = await User.findByIdAndUpdate(
        userId,
        { password: newPasswordHash },
        { new: true }
    );
    console.log(updatedUser)
    return { success: true, message: "Password updated successfully" };
  } catch (error) {
    return { success: false, error: "Internal server error" };
  }
}


export async function UserById(userId) {
    // console.log(userId,newPassword,'hit ...?');
      try {
  
      const updatedUser = await User.findById(userId);
      console.log(updatedUser)
      return { updatedUser:updatedUser, success: true, message: "fetched user data successfully" };
    } catch (error) {
      return { success: false, error: "Internal server error" };
    }
  }



  // export async function UpdateData(userId, username,email) {
  //   // console.log(userId,newPassword,'hit ...?');
  //     try {
  
  //     const updatedData = await User.findByIdAndUpdate(
  //         userId,
  //         { username: username },
  //         { email: email },
  //         { new: true }
  //     );
  //     console.log(updatedData)
  //     return { success: true, message: "Password updated successfully" };
  //   } catch (error) {
  //     return { success: false, error: "Internal server error" };
  //   }
  // }
  
  export async function UpdateData(userId, updateFields) {
    try {
      const updatedData = await User.findByIdAndUpdate(
        userId,
        updateFields, // Pass an object containing the field(s) to update
        { new: true }
      );
      console.log(updatedData);
      return { updatedData:updatedData, success: true, message: "Data updated successfully" };
    } catch (error) {
      return {  success: false, error: "Internal server error" };
    }
  }



