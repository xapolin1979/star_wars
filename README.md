# Star Wars App

Este proyecto es una aplicación web desarrollada con Angular 17 que proporciona información sobre las naves del universo de Star Wars.

## Instrucciones de Uso

Sigue estos pasos para ejecutar la aplicación en tu entorno local:

### 1. Clonar el Repositorio

Primero, clona el repositorio utilizando el siguiente comando:

git clone https://github.com/xapolin1979/star_wars.git


### 2. Instala las dependencias

Accede al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

cd star_wars
npm install

### 2. Activar Servidor Falso JSON-Server-Auth

Para simular una base de datos falsa, necesitamos activar el servidor falso utilizando json-server-auth.

Ejecuta el siguiente comando: 

npx json-server-auth db.json  

Esto iniciará el servidor falso y podrás acceder a la base de datos simulada.

### 2. Iniciar la aplicación

Una vez que el servidor esté activo, puedes iniciar la aplicación Angular,
ejecutando el siguiente comando:

ng serve

Después de compilar correctamente, podrás acceder a la aplicación en tu navegador web ingresando la dirección http://localhost:4200.


