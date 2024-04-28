# Star Wars App

Este proyecto es una aplicación web desarrollada con Angular 17 que proporciona información sobre las naves del universo de Star Wars.

## Instrucciones de Uso

Sigue estos pasos para ejecutar la aplicación en tu entorno local:

### 1. Clonar el Repositorio

Primero, clona el repositorio utilizando el siguiente comando:

```bash
git clone https://github.com/xapolin1979/star_wars.git


### 2. Instalar Dependencias

Accede al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
cd star_wars
npm install

###3. Activar Servidor Falso JSON-Server-Auth
Para simular una base de datos falsa, necesitamos activar el servidor falso utilizando json-server-auth.
Ejecuta el siguiente comando: 
```bash
   npx json-server-auth db.json  

Esto iniciará el servidor falso y podrás acceder a la base de datos simulada.

###4. Iniciar la Aplicación
Una vez que el servidor esté activo, puedes iniciar la aplicación Angular,
ejecutando el siguiente comando:
```bash
ng serve

Después de compilar correctamente, podrás acceder a la aplicación en tu navegador web ingresando la dirección http://localhost:4200.


