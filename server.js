const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, images) from the project folder
app.use(express.static(__dirname));

// Main page — your Gray Cast Iron data collection sheet
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Optional second page (if you still need gmtn.html)
app.get('/gmtn', (req, res) => {
    res.sendFile(path.join(__dirname, 'gmtn.html'));
});

// Catch-all for SPA-style client-side routing (keep LAST)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
