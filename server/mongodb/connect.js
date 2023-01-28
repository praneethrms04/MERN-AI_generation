import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => {
      console.log("connected tomongodb");
    })
    .catch((err) => {
      console.log("failed to connect tomongodb");
      console.log(err);
    });
};
export default connectDB;
