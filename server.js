const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>📚 Online Book Store</h1>
        <p>Welcome to DevOps CI/CD Project</p>
        <ul>
            <li>Book 1: Clean Code</li>
            <li>Book 2: Atomic Habits</li>
            <li>Book 3: The Alchemist</li>
        </ul>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});