
INSERT INTO autor (id_autor, nombre, apellido, nacionalidad) VALUES
(1, 'Gabriel', 'García Márquez', 'Colombiano'),
(2, 'J.K.', 'Rowling', 'Británico'),
(3, 'Stephen', 'King', 'Estadounidense'),
(4, 'Isabel', 'Allende', 'Chileno'),
(5, 'Haruki', 'Murakami', 'Japonés'),
(6, 'Jane', 'Austen', 'Británico'),
(7, 'Ernest', 'Hemingway', 'Estadounidense'),
(8, 'Mario', 'Vargas Llosa', 'Peruano'),
(9, 'Emily', 'Brontë', 'Británico'),
(10, 'Leo', 'Tolstoy', 'Ruso');

INSERT INTO categoria (id_categoria, nombre) VALUES
(1, 'Novela'),
(2, 'Poesía'),
(3, 'Ciencia Ficción'),
(4, 'Historia'),
(5, 'Fantasía'),
(6, 'Biografía'),
(7, 'Ensayo'),
(8, 'Drama'),
(9, 'Aventura'),
(10, 'Romance');

INSERT INTO editorial (id_editorial, nombre, direccion, telefono) VALUES
(1, 'Editorial Alfaguara', 'Calle del Libro, 123', '+1234567890'),
(2, 'Editorial Salamandra', 'Avenida de los Escritores, 456', '+9876543210'),
(3, 'Editorial Anagrama', 'Plaza de la Cultura, 789', '+5647382910'),
(4, 'Editorial Planeta', 'Calle de los Editores, 101', '+8795624310'),
(5, 'Editorial Penguin Random House', 'Avenida de las Letras, 202', '+9081726354'),
(6, 'Editorial RBA Libros', 'Paseo de la Literatura, 303', '+9876543210'),
(7, 'Editorial Tusquets', 'Avenida de los Escritores, 123', '+5678912345'),
(8, 'Editorial Seix Barral', 'Calle del Autor, 404', '+1234567890'),
(9, 'Editorial Galaxia Gutenberg', 'Plaza de los Libros, 505', '+9081726354'),
(10, 'Editorial Sudamericana', 'Avenida de los Escritores, 303', '+9876543210');

INSERT INTO estado_libro (id_estado, nombre, descripcion) VALUES
(1, 'Disponible', 'El libro está disponible para préstamo o reserva'),
(2, 'Prestado', 'El libro está en préstamo a un usuario'),
(3, 'En reparación', 'El libro está siendo reparado o restaurado'),
(4, 'Reservado', 'El libro ha sido reservado por un usuario'),
(5, 'Extraviado', 'El libro se ha extraviado y no está disponible temporalmente'),
(6, 'Fuera de stock', 'El libro está temporalmente fuera de stock');

INSERT INTO libro (id_libro, id_autor, id_categoria, id_editorial, titulo, anio_publicacion, isbn, num_paginas, id_estado) VALUES
(1, 1, 1, 1, 'Cien años de soledad', 1967, '9780307474728', 417, 1),
(2, 2, 1, 2, 'Harry Potter y la piedra filosofal', 1997, '9788478886456', 309, 1),
(3, 3, 3, 3, 'It', 1986, '9780450411434', 1138, 1),
(4, 4, 1, 4, 'La casa de los espíritus', 1982, '9788401343039', 442, 1),
(5, 5, 2, 5, 'Tokio blues (Norwegian Wood)', 1987, '9788483835086', 389, 1),
(6, 6, 1, 2, 'Orgullo y prejuicio', 1813, '9788497940246', 447, 1),
(7, 7, 7, 6, 'El viejo y el mar', 1952, '9788497593644', 152, 1),
(8, 8, 6, 7, 'La ciudad y los perros', 1963, '9788420471830', 382, 1),
(9, 9, 2, 8, 'Cumbres borrascosas', 1847, '9788497940314', 479, 1),
(10, 10, 1, 9, 'Ana Karenina', 1877, '9788420600283', 1273, 1);

INSERT INTO usuario (id_usuario, nombre, apellido, direccion, telefono, email) VALUES
(1, 'Juan', 'Pérez', 'Calle de los Libros, 456', '+1234567890', 'juan.perez@example.com'),
(2, 'María', 'Gómez', 'Avenida de los Escritores, 789', '+9876543210', 'maria.gomez@example.com'),
(3, 'Pedro', 'López', 'Plaza de la Cultura, 101', '+5647382910', 'pedro.lopez@example.com'),
(4, 'Laura', 'Hernández', 'Calle del Lector, 202', '+8795624310', 'laura.hernandez@example.com'),
(5, 'Carlos', 'García', 'Avenida de los Escritores, 303', '+9081726354', 'carlos.garcia@example.com'),
(6, 'Ana', 'Martínez', 'Paseo de la Literatura, 404', '+9876543210', 'ana.martinez@example.com'),
(7, 'José', 'Rodríguez', 'Avenida de los Escritores, 505', '+5678912345', 'jose.rodriguez@example.com'),
(8, 'Sofía', 'Fernández', 'Plaza de los Libros, 606', '+1234567890', 'sofia.fernandez@example.com'),
(9, 'Manuel', 'Torres', 'Calle del Escritor, 707', '+9081726354', 'manuel.torres@example.com'),
(10, 'Isabel', 'Díaz', 'Avenida de la Cultura, 808', '+9876543210', 'isabel.diaz@example.com');

INSERT INTO prestamo (id_prestamo, id_usuario, id_libro, fecha_prestamo, fecha_devolucion, estado) VALUES
(1, 1, 2, '2023-07-10', '2023-07-17', 'Devuelto'),
(2, 2, 5, '2023-07-11', '2023-07-18', 'Devuelto'),
(3, 3, 7, '2023-07-12', '2023-07-19', 'Prestado'),
(4, 4, 10, '2023-07-13', '2023-07-20', 'Prestado'),
(5, 5, 3, '2023-07-14', '2023-07-21', 'Devuelto'),
(6, 6, 8, '2023-07-15', '2023-07-22', 'Devuelto'),
(7, 7, 4, '2023-07-16', '2023-07-23', 'Devuelto'),
(8, 8, 1, '2023-07-17', '2023-07-24', 'Prestado'),
(9, 9, 9, '2023-07-18', '2023-07-25', 'Prestado'),
(10, 10, 6, '2023-07-19', '2023-07-26', 'Devuelto');

INSERT INTO reserva (id_reserva, id_usuario, id_libro, fecha_reserva, fecha_reserva_fin, estado) VALUES
(1, 1, 3, '2023-07-10', '2023-07-17', 'Confirmada'),
(2, 2, 6, '2023-07-11', '2023-07-18', 'Pendiente'),
(3, 3, 8, '2023-07-12', '2023-07-19', 'Pendiente'),
(4, 4, 1, '2023-07-13', '2023-07-20', 'Confirmada'),
(5, 5, 4, '2023-07-14', '2023-07-21', 'Confirmada'),
(6, 6, 10, '2023-07-15', '2023-07-22', 'Pendiente'),
(7, 7, 7, '2023-07-16', '2023-07-23', 'Confirmada'),
(8, 8, 2, '2023-07-17', '2023-07-24', 'Pendiente'),
(9, 9, 9, '2023-07-18', '2023-07-25', 'Confirmada'),
(10, 10, 5, '2023-07-19', '2023-07-26', 'Pendiente');