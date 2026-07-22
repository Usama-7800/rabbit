const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/.+@.+\..+/, "please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "password must be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
  },
  { timestamps: true },
);

// password hash middleware
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bycrypt.genSalt(10);
  this.password = await bycrypt.hash(this.password, salt);
});

// match user enter password to hashed password
userSchema.methods.matchPassword = async function (userPassword) {
  return await bycrypt.compare(userPassword, this.password);
}; 

module.exports = mongoose.model("User", userSchema);
