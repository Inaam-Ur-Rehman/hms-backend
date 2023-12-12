import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    fullName: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
