// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/test', (req, res) => {
    console.log(req.body);
});

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});