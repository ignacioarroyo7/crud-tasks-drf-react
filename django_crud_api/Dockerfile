# Usa una imagen base de Python 3.11
FROM python:3.11-slim

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Instalar dependencias del sistema necesarias
RUN apt-get update && \
    apt-get install -y libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# Copiar los archivos de tu proyecto
COPY . /app/

# Crear un entorno virtual y activarlo
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Instalar dependencias de Python
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Exponer el puerto donde corre Django
EXPOSE 8000

# Comando para ejecutar Django usando Gunicorn
CMD ["gunicorn", "django_crud_api.wsgi:application", "--bind", "0.0.0.0:8000"]
