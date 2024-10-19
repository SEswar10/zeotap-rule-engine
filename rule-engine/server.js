const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Placeholder for database operations
const rulesDB = [];

// Rule engine: Create Rule
app.post('/create_rule', (req, res) => {
    const ruleString = req.body.rule_string;
    const ast = createAST(ruleString); // Convert rule string to AST
    rulesDB.push(ast); // Simulate saving AST to database
    res.status(200).json({ message: 'Rule created', rule: ast });
});

// Rule engine: Combine Rules
app.post('/combine_rules', (req, res) => {
    const rules = req.body.rules; // Array of rules
    const combinedAST = combineASTs(rules);
    res.status(200).json({ combinedAST });
});

// Rule engine: Evaluate Rule
app.post('/evaluate_rule', (req, res) => {
    const ast = req.body.ast;
    const data = req.body.data;
    const result = evaluateAST(ast, data);
    res.status(200).json({ result });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
