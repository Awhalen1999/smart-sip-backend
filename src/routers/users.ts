import { Hono } from 'hono';
import { loginUser, signupUser, logoutUser } from '../handlers/users';
import { verifySession } from '../middleware/session';
import { User } from '../types';

const UsersRouter = new Hono();

// Endpoint for user login
UsersRouter.post('/login', loginUser);

// Endpoint for user signup
UsersRouter.post('/signup', signupUser);

// Endpoint for user logout
UsersRouter.post('/logout', logoutUser);

// Route checks session id
UsersRouter.get('/profile', verifySession, (c) => {
  //@ts-ignore
  const user = c.get('user') as User;
  return c.json({ message: 'Profile access', user }, 200);
});

export default UsersRouter;
