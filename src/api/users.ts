import {
  findUserByEmailAndPassword,
  insertUser,
  findUserByEmail,
} from '../data/users';

// API function to get user by email and password
export const getUserByEmailAndPassword = async (
  email: string,
  password: string
) => {
  // Call the data function to find the user
  return await findUserByEmailAndPassword(email, password);
};

// API function to check if user exists by email
export const checkUserExists = async (email: string) => {
  // Call the data function to find the user by email
  const user = await findUserByEmail(email);
  return !!user; // Return true if user exists, otherwise false
};

// API function to create a new user
export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  // Call the data function to insert the new user
  return await insertUser(name, email, password);
};
