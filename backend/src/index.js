const express = require('express');
const sequelize = require('./config/database');
const proveedorRoutes = require('./routes/proveedorRoutes');
const productoRoutes = require('./routes/productoRoutes');
const ventaRoutes = require('./routes/ventaRoutes');
const detalleVentaRoutes = require('./routes/detalleVentaRoutes')
const comprasRoutes = require('./routes/comprasRoutes');
const inventariosRoutes = require('./routes/inventariosRoutes')
const categoriaProductoRoutes = require('./routes/categoriaProductoRoutes');


const app = express();
app.use(express.json());
app.use('/api', productoRoutes);
app.use('/api', proveedorRoutes);
app.use('/api', ventaRoutes);
app.use('/api', detalleVentaRoutes)
app.use('/api', comprasRoutes);
app.use('/api', inventariosRoutes)
app.use('/api', categoriaProductoRoutes);



// Conexión y sincronización con la base de datos
sequelize.sync()
  .then(() => console.log('Conectado a la base de datos y sincronizado'))
  .catch((err) => console.error('Error conectando a la base de datos:', err));

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
