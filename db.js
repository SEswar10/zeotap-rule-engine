const { Pool } = require('pg');

// Create a new PostgreSQL client connection pool
const pool = new Pool({
  user: 'postgres', // Your PostgreSQL username
  host: 'localhost', // Your PostgreSQL host
  database: 'rule_engine', // Database name
  password: 'your_password', // Your PostgreSQL password
  port: 5432, // PostgreSQL default port
});

// Function to connect to the database
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to PostgreSQL');
  release(); // Release client back to pool after usage
});

module.exports = pool;
const { Pool } = require('pg');

// Create a new PostgreSQL client connection pool
const pool = new Pool({
  user: 'postgres', // Your PostgreSQL username
  host: 'localhost', // Your PostgreSQL host
  database: 'rule_engine', // Database name
  password: 'your_password', // Your PostgreSQL password
  port: 5432, // PostgreSQL default port
});

// Function to connect to the database
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to PostgreSQL');
  release(); // Release client back to pool after usage
});

module.exports = pool;
