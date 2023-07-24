/* Nombre de la base de datos: db_campus_bliblioteca */

CREATE TABLE `autor` (
  `id_autor` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `nacionalidad` varchar(100) DEFAULT NULL
);

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL
);

CREATE TABLE `editorial` (
  `id_editorial` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL
);

CREATE TABLE `estado_libro` (
  `id_estado` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
);

CREATE TABLE `libro` (
  `id_libro` int(11) NOT NULL,
  `id_autor` int(11) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `id_editorial` int(11) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `anio_publicacion` int(11) DEFAULT NULL,
  `isbn` varchar(20) DEFAULT NULL,
  `num_paginas` int(11) DEFAULT NULL,
  `id_estado` int(11) DEFAULT NULL
);

CREATE TABLE `prestamo` (
  `id_prestamo` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_libro` int(11) DEFAULT NULL,
  `fecha_prestamo` date DEFAULT NULL,
  `fecha_devolucion` date DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL
);

CREATE TABLE `reserva` (
  `id_reserva` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_libro` int(11) DEFAULT NULL,
  `fecha_reserva` date DEFAULT NULL,
  `fecha_reserva_fin` date DEFAULT NULL
  `estado` varchar(50) DEFAULT NULL,
);

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
);

ALTER TABLE `autor` ADD PRIMARY KEY (`id_autor`);

ALTER TABLE `categoria` ADD PRIMARY KEY (`id_categoria`);

ALTER TABLE `editorial` ADD PRIMARY KEY (`id_editorial`);

ALTER TABLE `estado_libro` ADD PRIMARY KEY (`id_estado`);

ALTER TABLE `libro`
  ADD PRIMARY KEY (`id_libro`),
  ADD KEY `id_autor` (`id_autor`),
  ADD KEY `id_categoria` (`id_categoria`),
  ADD KEY `id_editorial` (`id_editorial`),
  ADD KEY `id_estado` (`id_estado`);

ALTER TABLE `prestamo`
  ADD PRIMARY KEY (`id_prestamo`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_libro` (`id_libro`);

ALTER TABLE `reserva`
  ADD PRIMARY KEY (`id_reserva`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_libro` (`id_libro`);

ALTER TABLE `usuario` ADD PRIMARY KEY (`id_usuario`);

ALTER TABLE `libro`
  ADD CONSTRAINT `libro_ibfk_1` FOREIGN KEY (`id_autor`) REFERENCES `autor` (`id_autor`),
  ADD CONSTRAINT `libro_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`),
  ADD CONSTRAINT `libro_ibfk_3` FOREIGN KEY (`id_editorial`) REFERENCES `editorial` (`id_editorial`),
  ADD CONSTRAINT `libro_ibfk_4` FOREIGN KEY (`id_estado`) REFERENCES `estado_libro` (`id_estado`);

ALTER TABLE `prestamo`
  ADD CONSTRAINT `prestamo_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `prestamo_ibfk_2` FOREIGN KEY (`id_libro`) REFERENCES `libro` (`id_libro`);

ALTER TABLE `reserva`
  ADD CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `reserva_ibfk_2` FOREIGN KEY (`id_libro`) REFERENCES `libro` (`id_libro`);
