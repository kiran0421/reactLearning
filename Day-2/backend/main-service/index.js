const { default: axios } = require('axios');
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(
  cors({
    origin: "http://localhost:5173", // or "http://localhost:3001" if CRA
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/users', (req, res) => {
  const users = axios.get('http://localhost:3001/');
  users.then(response => {
    res.json(response.data);
  }).catch(error => {
    res.status(500).send('Error fetching users');
  });
});
app.get('/products', (req, res) => {
  const products = axios.get('http://localhost:3002/');
  products.then(response => {
    res.json(response.data);
  }).catch(error => {
    res.status(500).send('Error fetching products');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
