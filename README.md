# Alquiler de autos

Sistema de gestión de alquileres y reservas para optimizar su procesos y brindar un mejor servicio a sus clientes basado en **Node.js, Express.js y MongoDB**

## ¿Cómo usar el software?

Para poder instalar este software en local y utilizarlo en tu servidor, necesitaras tener instalado los siquientes requisitos

- Node.js
- Mongodb

Ahora que ya sabemos que nuestro sistema puede correr en este servidor, es hora de intentarlo siguiendo los siguientes pasos:

1. Clonar el repositorio: `https://github.com/JuanDavidAvilaRaveloCampus/mongoAlquiler.git`

2. Ubicarse en la carpeta `backend` desde la terminal e instalar todas las dependencias; para ello utilizaremos el siguiente comando: 

   ```shell
   npm update
   ```

3. Luego de haber instalado las dependencias y estando ubicados en la carpeta `backend` deberás correr el softaware:

   ```shell
   npm run dev
   ```

4. Al correr el software te saldrá en cosola la url padre del servidor. Ejemplo:

   `http://localhost:3001`

   Si quieres cambiar el host y el puerto te recomiendo revisar el siguiente enlace: [Cómo cambiar de host y puerto]()

5. Listo ya tienes corriendo tu servidor a gusto



## Rutas

<br>

#### **Alquiler:**

- `http://[tu_host]:[tu_puerto]/alquiler` : Consulta todos los alquileres

- `http://[tu_host]:[tu_puerto]/alquiler/seach=:id` : Cambia `:id` por el identificador del alquiler que deseas optener.

- `http://[tu_host]:[tu_puerto]/alquiler/search-estado=:sts`: Cambia `:sts` al estado que de los alquileres que deseas obtener. Por ejemplo: Activo, Disponible o Innactivo. 

  **Nota: ** Al hacer las consultas en esta url, es obligatorio que el parámetro insertado empiece en mayúscula.

- `http://[tu_host]:[tu_puerto]/alquiler/search-costo-total=:id`: Acceso a costo total por alquiler

- `http://[tu_host]:[tu_puerto]/alquiler/search-start_date=:inicio&end_date=:fin` : Cambiar `:inicio` a la fecha de inicio del alquiler y `:final` a la fecha de terminación del contrato del alquiler.

  **Formato de fecha de consulta:** YYYY-MM-DD
  **Example:** 2023-01-01

- `http://[tu_host]:[tu_puerto]/alquiler/search-fechas=Punto_12`: Busca todos los alquileres que inicien con la fecha **2023-08-01**. **NOTA:** Por el momento no tiene parámetros dinámicos, sin embargo se implementarán mas adelante.

- `http://[tu_host]:[tu_puerto]/alquiler/search-cliente`: Realiza una consulta a todos los clientes que tengan al menos un alquiler.

<br>

#### Automoviles

- `http://[tu_host]:[tu_puerto]/automoviles`: Consulta todos los atumoviles
- `http://[tu_host]:[tu_puerto]/automoviles/disponibles` : Consulta todos los automoviles que estén disponibles en este momento. **Proximamente dinámico**
- `http://[tu_host]:[tu_puerto]/automoviles/capacidad/qte=:id`: Consulta todos los automoviles cuya capacidad sea igual o mayor al a del parámetro. Para ello cambiar el `:id` por la cantidad deseada
- `http://[tu_host]:[tu_puerto]/automoviles/capacidad/lte=:id` : Consulta todos los automoviles cuya capacidad sea igual o menor a la del parámetro. Para ello cambiar el `:id` por la cantidad deseada.
- `http://[tu_host]:[tu_puerto]/automoviles/modelo_marca` : Constula todos los automoviles ordenados por su modelo y marca.

<br>

#### Clientes

- `http://[tu_host]:[tu_puerto]/clientes`: Consulta a todos los clientes de la base de datos

- `http://[tu_host]:[tu_puerto]/clientes/dni=:id`: Realiza una consulta al cliente deseado según el parámetro. Para ello cambiar `:id` por el DNI del específico del cliente.

- `http://[tu_host]:[tu_puerto]/clientes/alquiler` : Realiza una consulta que se trae a todos los clientes que tienen al menos un alquiler

  <br>

#### Empleados

- `http://[tu_host]:[tu_puerto]/empleados` : Realiza una colsulta a todos los empleados registrados
- `http://[tu_host]:[tu_puerto]/empleados/cargo=:cg` : Realiza una consulta a todos los empleados relacionados con el cargo espeficicado en los parámetros. Para ello cambiar el `:cg` por alguna de las siguientes opciones: Gerente, Supervisor, Asistente, Recepcionista y Vendedor.

<br>

#### Reservas

- `http://[tu_host]:[tu_puerto]/reservas`: Realiza una consulta a todas las reservas registradas
- `http://[tu_host]:[tu_puerto]/reservas/estado=:sto` : Realiza una consulta a todas las reservas cuyo estado sea el especificado en el parámetro `:sto`. Estos deben ser: Pendiente o Disponible