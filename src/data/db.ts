import postgres from 'postgres';
import 'dotenv/config';

// Function to create a PostgreSQL connection using the Railway-provided DATABASE_URL
async function createSqlConnection() {
  try {
    return postgres(process.env.DATABASE_URL, {
      ssl: {
        rejectUnauthorized: false, // Disable strict SSL
      },
    });
  } catch (error) {
    console.error('Error creating SQL connection:', error);
    throw new Error('Failed to create SQL connection');
  }
}

let sqlPromise: Promise<postgres.Sql<any>>;

export async function getSql() {
  if (!sqlPromise) {
    sqlPromise = createSqlConnection();
  }
  return sqlPromise;
}
