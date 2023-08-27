import { model, Schema } from 'mongoose';
import bcrypt from "bcrypt";


export const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: {type:String, required: true, unique: true },
    address: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
    // picture: {type: String, required: true, default: 'https://img.freepik.com/premium-vector/plate-fork-knife-icon_548264-496.jpg?w=2000' }, for admin if needed
  },

  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next){
  if(!this.isModified('password')){
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);

});

UserSchema.methods.matchPassword = async function (inputPassword){
  return await bcrypt.compare(inputPassword,this.password )
};


const UserModel = model('User', UserSchema);
export default UserModel;

