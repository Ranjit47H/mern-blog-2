import moongoose from "moongoose";
const userSchema = new moongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timeStamp: true }
);
const User = moongoose.model("User", userSchema);
export default User;
