const { User } = require("@/model/User");

export async function createUser(user){
  
  try {
    let user= await User.create(user)

    console.log("user creaated successfully");

  } catch (error) {
    console.log("could not create", error.message);
    throw new Error(error)
  }
}