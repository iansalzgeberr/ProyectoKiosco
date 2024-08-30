const express = require('express');
const sequelize = require('./config/database');
const Producto = require('./models/Producto');
const productoRoutes = require('./routes/productoRoutes');


const app = express();
app.use(express.json());
app.use('/api', productoRoutes);

// Conexión y sincronización con la base de datos
sequelize.sync()
  .then(() => console.log('Conectado a la base de datos y sincronizado'))
  .catch((err) => console.error('Error conectando a la base de datos:', err));

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
