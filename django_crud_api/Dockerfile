# Usa una imagen base de Python 3.11
FROM python:3.11-slim

# Establecer el directorio de trabajo en la raíz del proyecto
WORKDIR /app

# Instalar dependencias del sistema necesarias (incluyendo gcc y python3-dev)
RUN apt-get update && \
    apt-get install -y \
    gcc \
    libpq-dev \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Copiar todos los archivos de la raíz del proyecto
COPY . /app/

# Crear un entorno virtual y activarlo
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Instalar dependencias de Python
RUN pip install --upgrade pip
RUN pip install -r django_crud_api/requirements.txt

# Exponer el puerto donde corre Django
EXPOSE 8000

# Comando para ejecutar Django usando Gunicorn
CMD ["gunicorn", "django_crud_api.wsgi:application", "--bind", "0.0.0.0:8000"]

