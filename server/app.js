// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Client } = require('pg');

// Creating an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL client setup
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'rule_engine',  // Replace with your actual database name
    password: '8081',  // Replace with your actual database password
    port: 5432,
});

client.connect(err => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected to PostgreSQL');
    }
});

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Rule Engine API');
});

// Rule submission endpoint
app.post('/submit-rule', (req, res) => {
    const { rule } = req.body;
    // Here you can add your rule processing logic
    res.json({ result: 'Processed rule: ' + rule });
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
