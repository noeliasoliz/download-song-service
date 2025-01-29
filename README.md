# Proyecto Node.js con Express

Este es un proyecto básico en **Node.js** utilizando **Express.js**.

## 🚀 Instalación

1. Clona este repositorio:
   ```sh
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```

## ▶ Uso

Para iniciar el servidor en modo desarrollo:
```sh
npm start
```

El servidor estará disponible en:
```
http://localhost:3000
```

## 📌 Rutas disponibles

| Método | Ruta                        | Descripción            |
|--------|-----------------------------|------------------------|
| GET    | `/`          |              | Página de bienvenida   |
| GET    | `/api/donwload/:codigo`     | Descarga un archivo MP4|

## 🛠 Tecnologías utilizadas
- Node.js
- Express.js


## Docker
- Construir la imagen Docker

docker build -t mi-servicio-node .

- Ejecutar el contenedor

docker run -p 3000:3000 mi-servicio-node


