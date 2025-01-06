const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db');
const cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(cors());  // Si tu cliente y servidor están en diferentes puertos

// Rutas
const contactRoutes = require('./routes/contacts');
app.use('/api/contacts', contactRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

const path = require('path');

// Servir archivos estáticos desde la carpeta 'cliente'
app.use(express.static(path.join(__dirname, 'client')));

// Ruta para manejar la solicitud GET a la raíz y servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});
