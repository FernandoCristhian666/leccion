const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');  

const app = express();  // Inicializa la aplicación Express
const port = 3000;  // Define el puerto en el que escuchará el servidor

// Middleware para procesar datos JSON en las peticiones
app.use(bodyParser.json());

// Configura la ruta base para las APIs
app.use('/api', routes);

// Exporta la instancia de app para ser utilizada en otros archivos (como bin/www)
module.exports = app;

// Inicia el servidor en el puerto especificado
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}
