import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Database connected");
    } catch (e) {
        console.log("Error while connect database: ", e);
    }
};

mongoose.connection.on('disconnected', () => {
  console.warn('MongoDB disconnected');
});

export default connectDB;

