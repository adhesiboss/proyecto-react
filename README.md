# 🛒 Proyecto Tienda Online

¡Bienvenido al Proyecto Tienda Online! Este proyecto es una aplicación de comercio electrónico moderna construida con React, Firebase y componentes estilizados. Incluye características como listados de productos, un carrito de compras y gestión de pedidos.

## 📝 Tabla de Contenidos

- [Introducción](#-introducción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Configuración](#-configuración)
- [Uso](#-uso)
- [Componentes](#-componentes)
- [Contribuciones](#-contribuciones)
- [Licencia](#-licencia)

## 🚀 Introducción

Este proyecto es una aplicación de tienda online simple pero robusta. Los usuarios pueden navegar por productos, agregarlos a un carrito de compras y proceder al pago. Los pedidos se almacenan en Firebase Firestore, y los usuarios reciben un ID de pedido al realizar la compra.

## ✨ Características

- **Listados de Productos**: Navega por una variedad de productos con vistas detalladas.
- **Carrito de Compras**: Agrega, elimina y actualiza cantidades de productos.
- **Pago**: Completa la compra con un resumen de los ítems, precio total e información del comprador.
- **Gestión de Pedidos**: Los pedidos se guardan en Firebase Firestore con un ID único y marca de tiempo.

## 🛠️ Tecnologías

- **Frontend**: React, React Router, React Context API
- **Backend**: Firebase Firestore
- **Estilos**: CSS, componentes estilizados (styled-components)
- **Notificaciones**: react-toastify

## 🛠️ Configuración

Sigue estos pasos para configurar el proyecto localmente:

1. Clona el repositorio: `git clone https://github.com/your-username/online-store-project.git`
2. Navega al directorio del proyecto: `cd online-store-project`
3. Instala las dependencias: `npm install`
4. Configura Firebase Firestore para el backend y configura tus credenciales de Firebase en el proyecto.
5. Inicia el servidor de desarrollo: `npm start`

## 📖 Uso

Para usar la aplicación, sigue estos pasos:

1. Navega por la lista de productos y haz clic en un producto para más detalles.
2. Agrega productos a tu carrito de compras seleccionando la cantidad y haciendo clic en "Agregar al Carrito".
3. Ve tu carrito de compras haciendo clic en el ícono del carrito.
4. Procede al pago, ingresa tu información y completa la compra.
5. Ve tu confirmación de pedido con el ID del pedido y los detalles.

## 🧩 Componentes

El proyecto incluye los siguientes componentes principales:

- **NavBar**: Barra de navegación con enlaces a diferentes secciones de la tienda.
- **ProductList**: Componente para mostrar una lista de productos.
- **ProductDetail**: Componente para mostrar información detallada sobre un producto.
- **Cart**: Componente para gestionar el carrito de compras y proceder al pago.
- **Checkout**: Componente para revisar el pedido y completar la compra.

## 👥 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Haz tus cambios y haz commit (`git commit -am 'Agregar nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un nuevo Pull Request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## 📦 Dependencias

- **firebase**: "^10.12.2"
- **react**: "^18.2.0"
- **react-dom**: "^18.2.0"
- **react-router-dom**: "^6.23.1"
- **react-toastify**: "^10.0.5"

