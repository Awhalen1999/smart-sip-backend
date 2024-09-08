import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { UsersRouter } from './routers';

const app = new Hono();

app.use(
  cors({
    origin: ['https://awhalen1999.github.io', 'http://localhost:5173'],
  })
);

app.route('/users', UsersRouter);

app.get('/', (c) => {
  console.log('Root endpoint hit');
  return c.text('Welcome to the API');
});

app.get('/test', (c) => c.text('Backend running locally'));

console.log('Backend running on port 8787');

serve({
  fetch: app.fetch,
  port: 8787,
});
