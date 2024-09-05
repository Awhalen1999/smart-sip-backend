import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { UsersRouter } from './routers';

const app = new Hono();

app.use(
  cors({
    origin: ['http://localhost:3000', 'https://awhalen1999.github.io'],
  })
);

app.route('/users', UsersRouter);

app.get('/', (c) => {
  console.log('Root endpoint hit');
  return c.text('Welcome to the API');
});

serve({
  fetch: app.fetch,
  port: 8787,
});
