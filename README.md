
El sistema de alquiler y gestión de reservas para autos es una solución optimizada basada en **Node.js, Express.js y MongoDB**, diseñada para mejorar la eficiencia de los procesos y ofrecer un servicio excepcional a los clientes.

<hr>
<br>

# ÍNDICE
- [Configuración de las Variables de Entorno](#configuración-de-las-variables-de-entorno)
- [¿Cómo Utilizar el Software?](#cómo-utilizar-el-software)
- [Rutas](#rutas)
  - [Alquiler:](#alquiler)
  - [Automóviles](#automóviles)
  - [Clientes](#clientes)
  - [Empleados](#empleados)
  - [Reservas](#reservas)
  - [Sucursal Automóvil](#sucursal-automóvil)

<br>

## Configuración de las Variables de Entorno

Para personalizar el host y el puerto, sigue estos pasos:

1. Abre el archivo `.env`.

2. Asigna la base de datos que deseas usar en tu cuenta de [MongoDB](https://www.mongodb.com/es) a `ATLAS_USE`.

3. Ingresa la contraseña de tu base de datos en `ATLAS_PASSWORD`.

4. Define el nombre de tu base de datos en `ATLAS_DB`.

5. Asigna el **URL** generado por MongoDB a `URL_CONNECT`. Copia el código y pégalo en la variable de entorno.

6. Reemplaza `<password>` con tu contraseña.

**OPCIONAL:** La variable `SERVER_CONFIG` controla el host y el puerto. Puedes ajustarlos como prefieras. 
**Ejemplo:** SERVER_CONFIG = {"hostname": 127.01.01, "port": 3000}

¡Listo! Has configurado las variables de entorno.

Pero...

<hr>
<br>

## ¿Cómo Utilizar el Software?

Para instalar este software en tu servidor y utilizarlo localmente, necesitarás tener instalados los siguientes requisitos:

- Node.js
- Una cuenta en [MongoDB](https://www.mongodb.com/es)

Ahora que sabemos que el sistema puede funcionar en tu servidor, intentemos ejecutarlo siguiendo estos pasos:

1. Clona el repositorio: `https://github.com/JuanDavidAvilaRaveloCampus/mongoAlquiler.git`

2. Desde la terminal, ve a la carpeta `backend` y instala las dependencias con el siguiente comando:

    ```shell
    npm update
    ```

3. Una vez instaladas las dependencias, estando en la carpeta `backend`, ejecuta el software:

    ```shell
    npm run dev
    ```

4. En la consola, verás la URL base de tu servidor, por ejemplo:

    `http://localhost:3001`

    Si deseas cambiar el host y el puerto, consulta [este enlace](#¿cómo-configurar-el-host-y-el-puerto?)

5. ¡Listo! Tu servidor está en funcionamiento.

<hr>

# Rutas


## Alquiler:


- `http://[tu_host]:[tu_puerto]/alquiler/search=:id` 🔍: Sustituye `:id` por el identificador del alquiler que deseas obtener.

- `http://[tu_host]:[tu_puerto]/alquiler/search-estado=:sts` 📋: Sustituye `:sts` por el estado de los alquileres que deseas obtener, como Activo, Disponible o Inactivo. 

  **Nota:** La consulta debe comenzar con mayúscula.

- `http://[tu_host]:[tu_puerto]/alquiler/search-costo-total=:id` 💰: Acceso al costo total por alquiler.

- `http://[tu_host]:[tu_puerto]/alquiler/search-start_date=:inicio&end_date=:fin` 📅: Sustituye `:inicio` con la fecha de inicio y `:final` con la fecha de finalización del alquiler.

  **Formato de fecha:** AAAA-MM-DD
  **Ejemplo:** 2023-01-01

- `http://[tu_host]:[tu_puerto]/alquiler/search-fechas=Punto_12` ⏳: Busca alquileres que comiencen el **2023-08-01**. **Nota:** Los parámetros no son dinámicos actualmente, pero se implementarán más adelante.

- `http://[tu_host]:[tu_puerto]/alquiler/search-cliente` 👤: Consulta a los clientes con al menos un alquiler.

<hr>
<br>

## Automóviles

- `http://[tu_host]:[tu_puerto]/automoviles` 🚘: Consulta todos los automóviles.
- `http://[tu_host]:[tu_puerto]/automoviles/disponibles` 🟢: Consulta automóviles disponibles. **Próximamente dinámico**.
- `http://[tu_host]:[tu_puerto]/automoviles/capacidad/qte=:id` 👥: Consulta autos con capacidad igual o mayor a `:id`.
- `http://[tu_host]:[tu_puerto]/automoviles/capacidad/lte=:id` 🙋‍♂️: Consulta autos con capacidad igual o menor a `:id`.
- `http://[tu_host]:[tu_puerto]/automoviles/modelo_marca` 🏁: Consulta automóviles ordenados por modelo y marca.

<br>

## Clientes

- `http://[tu_host]:[tu_puerto]/clientes` 🧑‍🤝‍🧑: Consulta a todos los clientes.

- `http://[tu_host]:[tu_puerto]/clientes/dni=:id` 🔑: Consulta cliente según `:id`.

- `http://[tu_host]:[tu_puerto]/clientes/alquiler` 📝: Consulta clientes con al menos un alquiler.

  <br>

## Empleados

- `http://[tu_host]:[tu_puerto]/empleados` 🕴️: Consulta empleados.

- `http://[tu_host]:[tu_puerto]/empleados/cargo=:cg` 👷: Consulta empleados por cargo, como Gerente, Supervisor, Asist

ente, Recepcionista y Vendedor.

<br>

## Reservas

- `http://[tu_host]:[tu_puerto]/reservas` 📆: Consulta todas las reservas.

- `http://[tu_host]:[tu_puerto]/reservas/estado=:sto` 📌: Consulta reservas por estado, como Pendiente o Disponible.

- `http://[tu_host]:[tu_puerto]/reservas/estado=:sto/cliente=:id` 📋🧑‍🤝‍🧑: Consulta reservas por estado y cliente. 

  `:sto`: Disponible o Pendiente.

  `:id`: Identificación del cliente.

<br>

## Sucursal Automóvil

- `http://[tu_host]:[tu_puerto]/sucursal-automovil`: Consulta relación entre sucursales y autos.
