import { Context } from 'hono';
import {
  getUserByEmailAndPassword,
  createUser,
  checkUserExists,
} from '../api/users';
import { setCookie, deleteCookie, getCookie } from 'hono/cookie';

// Handler for user login
export const loginUser = async (c: Context) => {
  try {
    const { email, password } = await c.req.json();

    const user = await getUserByEmailAndPassword(email, password);

    if (user) {
      const sessionId = user.id;

      // Log the session ID
      console.log(`Generated sessionId for user: ${sessionId}`);

      // Set session cookie
      setCookie(c, 'sessionId', sessionId, {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 60 * 60,
        sameSite: 'Strict',
      });

      return c.json({ message: 'Login successful', user }, 200);
    } else {
      return c.json({ error: 'Invalid email or password' }, 401);
    }
  } catch (error: any) {
    console.log(`Login error: ${error.message}`);
    return c.json({ error: 'Failed to login', details: error.message }, 500);
  }
};

// Handler for user signup
export const signupUser = async (c: Context) => {
  try {
    const { email, password, username } = await c.req.json();

    const userExists = await checkUserExists(email);
    if (userExists) {
      return c.json({ error: 'Email already exists' }, 409);
    }

    const newUser = await createUser(username, email, password);

    const sessionId = newUser.id;
    // Set session cookie
    setCookie(c, 'sessionId', sessionId, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 60 * 60,
      sameSite: 'Strict',
    });

    return c.json({ message: 'Signup successful', user: newUser }, 201);
  } catch (error: any) {
    return c.json({ error: 'Failed to sign up', details: error.message }, 500);
  }
};

// Handler for user logout
export const logoutUser = async (c: Context) => {
  try {
    // Log the session before deleting
    const sessionId = getCookie(c, 'sessionId');
    console.log(`Logging out session ID: ${sessionId}`);

    deleteCookie(c, 'sessionId', {
      path: '/',
      secure: true,
    });

    console.log('Session cookie deleted');
    return c.json({ message: 'Logged out successfully' }, 200);
  } catch (error: any) {
    console.log(`Logout error: ${error.message}`);
    return c.json({ error: 'Failed to logout', details: error.message }, 500);
  }
};
