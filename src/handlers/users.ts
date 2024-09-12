import { Context } from 'hono';
import {
  getUserByEmailAndPassword,
  createUser,
  checkUserExists,
} from '../api/users';

// Handler for user login
export const loginUser = async (c: Context) => {
  try {
    const { email, password } = await c.req.json();
    console.log('Attempting login with email:', email);
    console.log('Attempting login with password:', password);

    // Call the API function to get the user matching the email and password provided
    const user = await getUserByEmailAndPassword(email, password);
    console.log('Login result:', user);

    if (user) {
      return c.json({ message: 'Login successful', user }, 200);
    } else {
      return c.json({ error: 'Invalid email or password' }, 401);
    }
  } catch (error) {
    console.error('Login error:', error);
    return c.json({ error: 'Failed to login' }, 500);
  }
};

// Handler for user signup
export const signupUser = async (c: Context) => {
  try {
    const { email, password, username } = await c.req.json();
    console.log('Signup attempt with email:', email, 'and username:', username);

    // Check if the user already exists with the provided email
    const userExists = await checkUserExists(email);
    console.log('User exists:', userExists);

    if (userExists) {
      return c.json({ error: 'Email already exists' }, 409);
    }

    // Call the API function to create the user and add to the database
    const newUser = await createUser(username, email, password);
    console.log('New user created:', newUser);

    return c.json({ message: 'Signup successful', user: newUser }, 201);
  } catch (error) {
    console.error('Signup error:', error);
    return c.json({ error: 'Failed to sign up' }, 500);
  }
};

// Handler for user logout
export const logoutUser = async (c: Context) => {
  // handle sessions later
  return c.json({ message: 'Logged out successfully' }, 200);
};
