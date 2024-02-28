import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    bookname: String,
    duration: Number,
    price: Number,
    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
    },
    availableTime: Array
  },

);

const Service = mongoose.model("Service", ServiceSchema);
export default Service;
