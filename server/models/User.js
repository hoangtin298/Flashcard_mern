const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Ma hoa password
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
  authGoogleID: {
    type: String,
    default: null,
  },
  authFacebookID: {
    type: String,
    default: null,
  },
  authType: {
    type: String,
    enum: ["local", "google", "facebook"],
    default: "local",
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

UserSchema.pre("save", async function (next) {
  try {
    //   If not login by local method
    if (this.authType !== "local") next();
    //   Generate salt
    const salt = await bcrypt.genSalt(10);
    //   Generate a hash password =  password + salt
    const hashedPassword = await bcrypt.hash(this.password, salt);
    //   Re-assign password
    this.password = hashedPassword;
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
