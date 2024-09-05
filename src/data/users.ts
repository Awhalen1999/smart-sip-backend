import { getSql } from './db';

// Data function to find a user by email and password
export const findUserByEmailAndPassword = async (
  email: string,
  password: string
) => {
  const sql = await getSql();

  const result = await sql`
    SELECT * FROM users WHERE email = ${email} AND password = ${password}
  `;

  return result[0]; // Return the first user found with matching email and password
};

// Data function to find a user by email
export const findUserByEmail = async (email: string) => {
  const sql = await getSql();

  const result = await sql`
    SELECT * FROM users WHERE email = ${email}
  `;

  return result[0]; // Return the first user found with matching email
};

// Data function to insert a new user
export const insertUser = async (
  username: string,
  email: string,
  password: string
) => {
  const sql = await getSql();

  const result = await sql`
    INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password})
    RETURNING *
  `;

  return result[0]; // Return the newly created user
};
