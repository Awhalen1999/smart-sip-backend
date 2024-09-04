import { Hono } from 'hono';
import { loginUser, signupUser, logoutUser } from '../handlers/users';

const UsersRouter = new Hono();

// Endpoint for user login
UsersRouter.post('/login', loginUser);

// Endpoint for user signup
UsersRouter.post('/signup', signupUser);

// Endpoint for user logout
UsersRouter.post('/logout', logoutUser);

export default UsersRouter;
