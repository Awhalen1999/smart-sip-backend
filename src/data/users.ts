import { getSql } from './db';

// Data function to find a user by email and password
export const findUserByEmailAndPassword = async (
  email: string,
  password: string
) => {
  const sql = await getSql();
  console.log('Querying user by email and password...');

  const result = await sql`
    SELECT * FROM users WHERE email = ${email} AND password = ${password}
  `;
  console.log('Query result:', result);

  return result[0]; // Return the first user found with matching email and password
};

// Data function to find a user by email
export const findUserByEmail = async (email: string) => {
  const sql = await getSql();
  console.log('Querying user by email...');

  const result = await sql`
    SELECT * FROM users WHERE email = ${email}
  `;
  console.log('Query result:', result);

  return result[0]; // Return the first user found with matching email
};

// Data function to insert a new user
export const insertUser = async (
  username: string,
  email: string,
  password: string
) => {
  const sql = await getSql();
  console.log('Inserting new user...');

  const result = await sql`
    INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password})
    RETURNING *
  `;
  console.log('Insert result:', result);

  return result[0]; // Return the newly created user
};

// Data function to get a user by ID
export const findUserById = async (id: string) => {
  const sql = await getSql();
  const result = await sql`
    SELECT * FROM users WHERE id = ${id}
  `;
  return result[0]; // Return the first user with that id
};
