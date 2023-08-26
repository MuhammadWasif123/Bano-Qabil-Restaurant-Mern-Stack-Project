import { connect, set } from 'mongoose';
import { UserModel } from '../models/userModel.js';
import { FoodModel } from '../models/foodModel.js';
import {Fooddata} from '../FoodData.js';
import { users } from '../UserData.js';
import bcrypt from 'bcrypt';
const HASH_SALT_VALUE = 10;

set('strictQuery', true);



export const dbconnect = async () => {
    try {
      connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await seedUsers();
      console.log('MongoDB connect successfully---');
    } catch (error) {
      console.log(error);
    }
  };

async function seedUsers() {
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0) {
      console.log('Users seed is already done!');
      return;
    }
  
    for (let user of users) {
      user.password = await bcrypt.hash(user.password, HASH_SALT_VALUE);
      await UserModel.create(user);
    }

    console.log('Users seed is done!');
}

