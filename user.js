//mangoose connection
const mongoose = require("mongoose");
//the bcryptjs helps to hashing the password and comparing login time.
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true, 
      trim: true //remove extra space
    },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, default: "user", enum: ["user", "admin"] }
  },
  { timestamps: true }
);

// ✅ Save password in hash
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // if the password not change then skip
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//Password compare  method
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
