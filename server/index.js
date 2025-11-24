const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/projects', (req, res) => {
    const projectsPath = path.join(__dirname, 'data', 'projects.json');

    fs.readFile(projectsPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading projects file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        try {
            const projects = JSON.parse(data);
            res.json(projects);
        } catch (parseError) {
            console.error('Error parsing projects JSON:', parseError);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`API available at http://localhost:${PORT}/api/projects`);
});
