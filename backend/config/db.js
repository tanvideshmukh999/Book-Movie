// import mongoose from  'mongoose'
// export const connectDB=async () => {
//     await mongoose.connect('mongodb+srv://tanvideshmukh999_db_user:moviebook123@cluster0.yfwr3pj.mongodb.net/MovieBooking').then(()=>console.log('DB CONNECTED'))
// }

import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB CONNECTED');
  } catch (error) {
    console.error('DB connection failed:', error.message);
    process.exit(1);
  }
};
