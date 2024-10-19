import React, { useState } from 'react';

function App() {
    const [rule, setRule] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/submit-rule', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rule }),
            });
            const data = await response.json();
            setResult(data.result);
        } catch (error) {
            console.error('Error occurred while processing the rule:', error);
            setResult('Error occurred while processing the rule.');
        }
    };

    return (
        <div>
            <h1>Rule Engine</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={rule}
                    onChange={(e) => setRule(e.target.value)}
                    placeholder="Enter rule"
                    required
                />
                <button type="submit">Submit Rule</button>
            </form>
            <p>Result: {result}</p>
        </div>
    );
}

export default App;
