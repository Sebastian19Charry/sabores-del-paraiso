const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Prefix all API routes with /api
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('API del Proyecto de Grado está funcionando.');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
