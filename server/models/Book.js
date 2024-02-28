import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    bookname: String,
    Tprice: Number,
    Lprice: Number,
    Nprice: Number,
    duration: Number,
    bookingTime: Date,
    catalogList: Array,
    message: String,
    instagramUserName: String,
    email: String,
    serviceId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Service',
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    firstName: String,
    lastName: String,
    phoneNumber: String,
    addNote: String,
    promoCode: String,
  },

);

const Book = mongoose.model("Book", BookSchema);
export default Book;
