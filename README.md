# Proyecto de CRUD de Contactos con Node.js y Express

Este es un proyecto que implementa un CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar una lista de contactos utilizando Node.js, Express, y una base de datos gestionada con PHPMyAdmin.

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:
/proyecto /cliente # Archivos del cliente (HTML, JS) index.html # Página principal app.js # Lógica de cliente (JS) /servidor # Archivos del servidor (Node.js) index.js # Servidor Express db.js # Conexión a la base de datos /node_modules # Dependencias instaladas .gitignore # Archivos y carpetas a ignorar por git README.md # Este archivo package.json # Dependencias y scripts


## Requisitos

- **Node.js**: La última versión LTS de Node.js.
- **PHPMyAdmin**: Herramienta para gestionar MySQL.

## Instalación

### 1. Clonar el Repositorio

Clona este repositorio en tu máquina local:
git clone https://github.com/usuario/proyecto.git
cd proyecto
2. Instalar las Dependencias del Servidor
Dentro de la carpeta servidor, instala las dependencias del servidor con el siguiente comando:

bash
Copy code
cd servidor
npm install
3. Configurar la Base de Datos
Asegúrate de que PHPMyAdmin esté funcionando en tu entorno local.
Crea una base de datos llamada contacts_db.
Ejecuta el siguiente código SQL para crear la tabla Contacts:
sql
Copy code
CREATE TABLE Contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(15) NOT NULL
);
4. Iniciar el Servidor
Una vez que las dependencias estén instaladas, ejecuta el servidor desde la carpeta servidor con el siguiente comando:

bash
Copy code
node index.js
El servidor debería estar corriendo en http://localhost:5000.

5. Abrir el Cliente
En la carpeta cliente, abre el archivo index.html en tu navegador. Esto se conectará automáticamente con el servidor y mostrará la lista de contactos.

Tecnologías Utilizadas
Node.js: Entorno de ejecución de JavaScript en el servidor.
Express.js: Framework de Node.js para crear la API REST.
PHPMyAdmin: Herramienta de administración de bases de datos MySQL.
MySQL: Sistema de gestión de bases de datos utilizado para almacenar los contactos.
HTML, CSS, JavaScript: Tecnologías del lado del cliente para la interfaz de usuario.
Endpoints de la API
Obtener Todos los Contactos
Método: GET
Ruta: /api/contacts
Descripción: Obtiene una lista de todos los contactos.
Crear un Nuevo Contacto
Método: POST
Ruta: /api/contacts
Descripción: Crea un nuevo contacto.
Cuerpo de la Solicitud (JSON):
json
Copy code
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890"
}
Notas Adicionales
Si tienes problemas con CORS (Cross-Origin Resource Sharing), instala el paquete cors en el servidor con el siguiente comando:
bash
Copy code
npm install cors
Y luego agrega el siguiente código en index.js para permitir el acceso desde diferentes orígenes:

javascript
Copy code
const cors = require('cors');
app.use(cors());
El servidor está configurado para escuchar en el puerto 5000. Si deseas cambiar el puerto, edita la siguiente línea en index.js:
javascript
Copy code
app.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});