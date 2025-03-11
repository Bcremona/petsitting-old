🚀 Proyecto: Petsitting App 

(English on line 47!)

Descripción
Este proyecto es una entrega universitaria, realizado para mostrar el uso de tecnologías como React, Node, JavaScript, APIs y SQL.

🏁 Instalación
Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. Clonar el repositorio
git clone [URL-del-repositorio]
cd [nombre-del-proyecto]

2. Instalar dependencias
npm install

3. Configurar las variables de entorno
Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

# Puerto para el cliente (React)
PORT=3001

# Otras variables para la conexión a la base de datos, API keys, etc.
DB_SERVER=[host]
DB_USER=[usuario]
DB_PASSWORD=[contraseña]
DB_DATABASE
⚠️ Importante: Asegúrate de no incluir el archivo .env en el control de versiones. Ya está agregado a .gitignore.

🚀 Uso
Desarrollo
Para iniciar tanto el servidor como el cliente:

npm start
El servidor se ejecutará en: http://localhost:3000
El cliente (React) estará en: http://localhost:3001

# Build y despliegue
Para construir la aplicación para producción y levantar el servidor:

npm run build
El bundle de React se generará en la carpeta build/.



### ENGLISH ###

Description
This project is a university assignment, created to demonstrate the use of technologies such as React, Node, JavaScript, APIs, and SQL.

🏁 Installation
Follow these steps to set up and run the project locally:

1. Clone the repository
git clone [repository-URL]
cd [project-name]

2. Install dependencies
npm install

3. Configure environment variables
Create a .env file in the root directory and add the following variables:

# Port for the client (React)
PORT=3001

# Other variables for database connection, API keys, etc.
DB_SERVER=[host]
DB_USER=[user]
DB_PASSWORD=[password]
DB_DATABASE=[database-name]
⚠️ Important: Make sure not to include the .env file in version control. It is already added to .gitignore.

🚀 Usage
Development
To start both the server and the client:

npm start
The server will run at: http://localhost:3000
The client (React) will be available at: http://localhost:3001

# Build and deployment
To build the application for production and start the server:

npm run build
The React build will be generated in the build/ folder.