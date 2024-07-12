Requisitos
Node.js
npm (Node Package Manager)
Instalación
Clona este repositorio o descarga los archivos.

Navega al directorio del proyecto e instala las dependencias:

sh

npm install
Archivos importantes
server.js: Archivo principal del servidor que configura Fastify y json-server.
db.json: Archivo de datos JSON para json-server.
src/seo.json: Archivo de configuración SEO.
src/colors.json: Archivo de configuración de colores.
src/pages/index.hbs: Archivo de plantilla de Handlebars para la página principal.
Estructura del Proyecto
graphql
Copiar código
.
├── public/
│   └── ...        # Archivos estáticos
├── src/
│   ├── colors.json
│   ├── seo.json
│   └── pages/
│       └── index.hbs
├── db.json        # Datos JSON para json-server
├── server.js      # Archivo principal del servidor
└── package.json   # Archivo de configuración de npm
Uso
Iniciar el Servidor
Para iniciar el servidor, ejecuta el siguiente comando:

sh

npm start
El servidor se ejecutará en el puerto 3000 por defecto. Puedes acceder a la aplicación en http://localhost:3000.

Rutas Disponibles
/: Página principal que utiliza Handlebars para renderizar el contenido.
/api: API RESTful servida por json-server.
/api/products: Endpoint para obtener la lista de productos.
Ejemplo de db.json
Asegúrate de que tu archivo db.json esté estructurado como un objeto:

json
{
  "products": [
    {
      "id": "1",
      "name": "Stormtrooper",
      "price": "$40.00",
      "image": "img/productos/casco-truper.jpg"
    },
    {
      "id": "2",
      "name": "Funko Stormtrooper",
      "price": "$60.00",
      "image": "img/productos/funko-truper.jpg"
    }
  ]
}
Desarrollo
Para desarrollar y probar la aplicación localmente, puedes utilizar herramientas como nodemon para reiniciar automáticamente el servidor cuando haya cambios en el código:

sh

npm install --save-dev nodemon
Agrega un script en package.json:

json

"scripts": {
  "dev": "nodemon server.js"
}
Luego, inicia el servidor en modo desarrollo:

sh

npm run dev
Contribución
¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request.

Licencia
Este proyecto está licenciado bajo la MIT License. Para más detalles, consulta el archivo LICENSE.
