# Node.js API con Express - Arquitectura por Capas

Este proyecto es una API construida con **Node.js** y **Express** siguiendo los principios de **arquitectura por capas** para mantener una estructura limpia y modular. Proporciona dos endpoints para gestionar productos:

- **GET** `/api/products`: Obtiene todos los productos.
- **GET** `/api/products/:id`: Obtiene un producto por su ID.

## Requisitos Previos

Asegúrate de tener instalados los siguientes componentes en tu máquina:

- **Node.js** (v14 o superior)
- **npm** (v6 o superior)

Puedes verificar si los tienes instalados usando los siguientes comandos:

```bash
node -v
npm -v

Para ejecutar la aplicación en modo de desarrollo con autoreload (usando nodemon), puedes usar:
```bash
npm run dev