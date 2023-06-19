import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import pkg from 'validator';
const { isEmail } = pkg;

const { Schema } = mongoose;
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'invalid email'],
        createIndexes: { unique: true },
    },
    password: { type: String, required: true },
});

userSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.validatePassword = async function validatePassword(data) {
  return bcrypt.compare(data, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;