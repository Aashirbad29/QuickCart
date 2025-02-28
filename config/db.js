<<<<<<< HEAD
import mongoose, { connect } from "mongoose";

let cached = global.mongoose

if(!cached){
    cached = global.mongoose = {
        conn: null, promise: null
    }
}

    async function connectDB() {

        if(cached.conn){
            return cached.conn
        }

        if (!cached.promise){
            const opts = {
                bufferCommands: false
            }

            cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/riki`,opts).then(mongoose => {
                return mongoose
            })
        }
        cached.conn = await cached.promise
        return cached.conn
       
    }

   
=======
import mongoose from "mongoose";

let cached = global.mongoose

if (!cached){
    cached = global.mongoose = {
        conn:null, promise: null
    }
}

async function connectDB() {

    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise){
        const opts = {
            bufferCommands: false
        }

        cached.promise =  mongoose.connect(`${process.env.MONGODB_URI}/riki`,opts).then(mongoose => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
    
}
>>>>>>> a0255ea353ca7e1712e9fa20ff271676138bda13

export default connectDB