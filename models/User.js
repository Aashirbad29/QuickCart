import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    _id:{ type : String, required: true},
    name: {type : String, required: true},
    email: {type : String, required: true, unique: true},
    imageUrl : {type : String, required: true},
    cartItems: {type : Object, default: {}}
},{minimize: false})

const User = mongoose.models.user || mongoose.model('user',userSchema)

<<<<<<< HEAD
export default User
=======
export default User;
>>>>>>> a0255ea353ca7e1712e9fa20ff271676138bda13
