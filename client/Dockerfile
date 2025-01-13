# Usa una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /client

# Copiar los archivos del cliente (frontend)
COPY . /client/

# Instalar dependencias del cliente
RUN npm install

# Construir el proyecto de React
RUN npm run build

# Servir la aplicación (usamos serve)
RUN npm install -g serve

# Exponer el puerto 3000 (que es el puerto por defecto de React)
EXPOSE 3000

# Comando para servir la aplicación de React con Vite
CMD ["serve", "-s", "dist", "-l", "3000"]

