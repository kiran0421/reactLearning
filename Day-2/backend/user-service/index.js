const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    const users = [{
            name: 'Alice Johnson',
            email: 'alicejohnson@gmail.com'
        },
        {
            name: 'Bob Smith',
            email: 'bobsmith@gmail.com'
        },
        {
            name: 'Charlie Brown',
            email: 'charlie@gmail.com'
        }
    ];
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`User Service is running on http://localhost:${PORT}`);
});