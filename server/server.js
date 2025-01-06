const express = require('express');
const cors = require('cors');
const path = require('path');  // Para manejar rutas
const contactRoutes = require('./routes/contacts');  // Ruta de la API de contactos
const app = express();

// Habilitar CORS
app.use(cors());
app.use(express.json());  // Para procesar JSON

// Servir archivos estáticos desde la carpeta 'cliente'
app.use(express.static(path.join(__dirname, '../client')));

// Ruta de prueba (verificación de servidor)
app.get('/', (req, res) => {
    res.send('¡Servidor corriendo correctamente!');
});

// Rutas para la API de contactos
app.use('/api/contacts', contactRoutes);

// Iniciar el servidor en el puerto 5000
app.listen(5000, () => {
    console.log('Servidor ejecutándose en http://localhost:5000');
});
