import {
  findUserByEmailAndPassword,
  insertUser,
  findUserByEmail,
  findUserById,
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
  username: string,
  email: string,
  password: string
) => {
  // Call the data function to insert the new user
  return await insertUser(username, email, password);
};

// API function to get user by ID
export const getUserById = async (id: string) => {
  return await findUserById(id); // Call the data function to find the user by ID
};
