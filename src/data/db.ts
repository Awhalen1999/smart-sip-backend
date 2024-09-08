// import postgres from 'postgres';

// // Only use dotenv in local development-
// if (process.env.NODE_ENV !== 'production') {
//   console.log('Development environment detected. Loading .env file...');
//   await import('dotenv/config');
// }

// // Function to create a PostgreSQL connection using the DATABASE_CONNECT variable
// async function createSqlConnection() {
//   try {
//     // Log before retrieving the environment variable
//     console.log('Retrieving DATABASE_CONNECT environment variable...');
//     const { DATABASE_CONNECT } = process.env;

//     // Log the value of the DATABASE_CONNECT variable
//     console.log({
//       DATABASE_CONNECT: DATABASE_CONNECT ? 'Present' : 'Not Set',
//     });

//     // Check if DATABASE_CONNECT is missing
//     if (!DATABASE_CONNECT) {
//       throw new Error('Missing DATABASE_CONNECT environment variable');
//     }

//     console.log(
//       'Attempting to connect to PostgreSQL using DATABASE_CONNECT...'
//     );

//     // Create PostgreSQL connection using DATABASE_CONNECT
//     const sqlConnection = postgres(DATABASE_CONNECT, {
//       ssl: {
//         rejectUnauthorized: false, // Disable strict SSL
//       },
//     });

//     console.log('PostgreSQL connection successful.');
//     return sqlConnection;
//   } catch (error) {
//     console.error('Error creating SQL connection:', error);
//     throw new Error('Failed to create SQL connection');
//   }
// }

// let sqlPromise: Promise<postgres.Sql<any>> | null = null;

// export async function getSql() {
//   if (!sqlPromise) {
//     console.log('Initializing SQL connection...');
//     sqlPromise = createSqlConnection();
//   } else {
//     console.log('Using existing SQL connection...');
//   }
//   return sqlPromise;
// }
