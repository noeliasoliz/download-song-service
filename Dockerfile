# 1. Usar la imagen oficial de Node.js
FROM node:18

# 2. Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# 3. Copiar archivos del proyecto al contenedor
COPY package*.json ./
RUN npm install
COPY . .

# 4. Exponer el puerto en el contenedor
EXPOSE 3000

# 5. Comando para iniciar la aplicación
CMD ["node", "index.js"]

