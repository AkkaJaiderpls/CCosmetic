# 📚 GUÍA DE INSTALACIÓN - CCOSMETIC

Bienvenido a la guía de instalación de CCosmetic. Sigue estos pasos para configurar el entorno de manera efectiva.
### 🚀 Clonar el Repositorio de GitHub

Para comenzar, clona el repositorio utilizando el siguiente comando:

```shell
git clone https://github.com/AkkaJaiderpls/CCosmetic.git
```

### 🐳 Iniciar Docker-Compose

Una vez clonado el repositorio, navega a la carpeta del proyecto e inicia Docker-Compose:

```shell
cd CCosmetic-master && docker-compose up --build
```

### ⏹️ Detener Docker-Compose

Para detener los servicios en ejecución sin eliminar los contenedores:

```shell
docker-compose stop
```

### 🧹 Eliminar y Detener Docker-Compose

Si necesitas detener y eliminar los contenedores, junto con las redes y volúmenes asociados:

```shell
docker-compose down
```

# 🖥️ USO DEL APLICATIVO

Sigue estos pasos para utilizar la aplicación después de haber iniciado los contenedores:

1. Acceso a los Servicios:
        
    Los contenedores estarán disponibles en los puertos 8090 y 3000.

2. Rutas del Backend:
        
    ├─ REST API: http://0.0.0.0:8090/api/

    └─ Admin UI: http://0.0.0.0:8090/_/

3. Rutas del Frontend:

    ├─ FRONTEND: http://0.0.0.0:3000/

4. Configuración Inicial:
        
    Se requerirá crear una cuenta de administración con un correo electrónico y una contraseña.

    ![Screenshot from 2023-11-11 01-51-33](https://github.com/AkkaJaiderpls/CCosmetic/assets/82175311/9396bf72-e408-4947-8536-57da6b2ef2d9)

5. Restaurar la Base de Datos:
    
    Tienes dos opciones para restaurar la base de datos:

   - Restaurar las Migraciones:
            
        Utiliza este método si deseas tener solo las colecciones vacías.
        
        ![Screenshot from 2023-11-11 01-52-14](https://github.com/AkkaJaiderpls/CCosmetic/assets/82175311/60db6926-1d2a-4bfa-8aee-5a46c94d78dc)

   - Restaurar el Backup:
        
        Elige esta opción para tener las colecciones con datos predefinidos que se pueden modificar posteriormente.
        
        ![Screenshot from 2023-11-11 01-52-28](https://github.com/AkkaJaiderpls/CCosmetic/assets/82175311/ba9ff3a0-c141-430d-aedc-39112f587655)
        
    Nota: Ambos métodos tienen sus archivos correspondientes en la carpeta backend, dentro de las subcarpetas migrations y backup.

- - -

Recuerda que puedes modificar y ajustar los datos según tus necesidades una vez completada la instalación. ¡Esperamos que disfrutes utilizando CCosmetic! 🌟
