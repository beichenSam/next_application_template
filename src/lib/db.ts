import mongoose from "mongoose";
const uri =
  "mongodb+srv://shenbeichen22:dsH4EB7Om2OLgupV@cluster0.r0gj0gn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongooseUri =
  "mongodb+srv://shenbeichen22:dsH4EB7Om2OLgupV@cluster0.r0gj0gn.mongodb.net/next_template?retryWrites=true&w=majority&appName=Cluster0";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  const MONGODB_URI = mongooseUri; //TODO env.local

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
}

export default dbConnect;
