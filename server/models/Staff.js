import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema(
  {
    staff_name: String,
  },

);

const Staff = mongoose.model("Staff", StaffSchema);
export default Staff;
