//console.log("¡Hola Mundo!");

const express = require("express");
const app = express();
const path = require("path");

// Ruta de prueba
app.get("/api/", (req, res) => {
    res.json({ mensaje: "Servicio de Descarga de musica" });
  });

app.get("/api/hola", (req, res) => {
  res.json({ mensaje: "¡Hola Mundo desde un servicio en Node.js!" });
});

// Ruta que recibe un código como parámetro en la URL
app.get("/api/donwload/:codigo", (req, res) => {
    const filePath = path.join(__dirname, "songs", "NoTVaGustar.mp3");
    res.sendFile(filePath);
  });

// Configurar el puerto
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});