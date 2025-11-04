const express = require('express');
const app = express();
const PORT = 3002;
const cors = require('cors');
app.use(
  cors({
    origin: "http://localhost:5173", // or "http://localhost:3001" if CRA
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.get('/', (req, res) => {

  const products = [{
      name: 'Wireless Headphones',
        price: 99.99,
        description: 'High-quality wireless headphones with noise cancellation.'
    },
    {
        name: 'Smart Watch',
        price: 199.99,
        description: 'Feature-rich smart watch with fitness tracking.'
    },
    {
        name: 'Bluetooth Speaker',
        price: 49.99,
        description: 'Portable Bluetooth speaker with excellent sound quality.'
    }];
    res.json(products);
});

app.listen(PORT, () => {
  console.log(`Product Service is running on http://localhost:${PORT}`);
});