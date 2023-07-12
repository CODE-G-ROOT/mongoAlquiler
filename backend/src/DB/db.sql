-- Active: 1689075950615@@localhost@3306
CREATE DATABASE citas_medicas;
DROP DATABASE citas_medicas;
USE citas_medicas;
CREATE TABLE usuario(
    usu_id INT NOT NULL PRIMARY KEY,
    usu_nombre VARCHAR(50) NOT NULL,
    usu_segdo_nombre VARCHAR(45) NOT NULL,
    usu_primer_apellido_usuar VARCHAR(50) NOT NULL,
    usu_segdo_apellido_usuar VARCHAR(50) NOT NULL,
    usu_telefono VARCHAR(50),
    usu_direccion VARCHAR(100) NOT NULL,
    usu_email VARCHAR(100) NOT NULL
);
CREATE TABLE tipo_documento(
    tipdoc_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipdoc_nombre VARCHAR(20) NOT NULL,
    tipdoc_abreviatura VARCHAR(20)
);
CREATE TABLE genero(
    gen_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    gen_nombre VARCHAR(20) NOT NULL,
    gen_abreviatura VARCHAR(20) NOT NULL
);
CREATE TABLE acudiente(
    acu_codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    acu_nombreCompleto VARCHAR(100) NOT NULL,
    acu_telefono VARCHAR(100),
    acu_direccion VARCHAR(200) NOT NULL
);
CREATE TABLE cita(
    cit_codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cit_fecha DATE NOT NULL
);
CREATE TABLE estado_cita(
    estcita_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    estcita_nombre VARCHAR(20) NOT NULL
);
CREATE TABLE medico(
    med_nroMatriculaProsional INT NOT NULL PRIMARY KEY,
    med_nombreCompleto VARCHAR(120) NOT NULL
);
CREATE TABLE especialidad(
    esp_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    esp_nombre VARCHAR(20) NOT NULL
);
CREATE TABLE consultorio(
    cons_codigo INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    cons_nombre VARCHAR(50)
);



/*
    TODO: CREACIÓN DE LAS LLAVES FORANEAS 
*/
/*
    *  USUARIO
*/
ALTER TABLE usuario ADD usu_tipodoc INT NOT NULL, 
    ADD usu_genero INT NOT NULL, 
    ADD usu_acudiente INT NOT NULL
;
/*
    * CITA
*/
ALTER TABLE cita 
    ADD cit_datosUsuario INT NOT NULL,
    ADD cit_estadoCita INT NOT NULL,
    ADD cit_medico INT NOT NULL
;

/*
    * MEDICO
*/
ALTER TABLE medico 
    ADD med_especialidad INT NOT NULL,
    ADD med_consultorio INT NOT NULL
;


/*
TODO: RELACIONES CON LAS LLAVES FORANEAS
*/

/*
*   USUARIO
*/
ALTER TABLE usuario 
    ADD CONSTRAINT usuario_tipo_documento_fk FOREIGN KEY (usu_tipodoc) REFERENCES tipo_documento (tipdoc_id),
    ADD CONSTRAINT usuario_genero_fk FOREIGN KEY (usu_genero) REFERENCES genero (gen_id),
    ADD CONSTRAINT usuario_acudiente_fk FOREIGN KEY (usu_acudiente) REFERENCES acudiente (acu_codigo)
;
/*
*  CITA
*/

ALTER TABLE cita 
    ADD CONSTRAINT cita_usuarios_fk FOREIGN KEY (cit_datosUsuario) REFERENCES usuario (usu_id),
    ADD CONSTRAINT cita_estado_cita_fk FOREIGN KEY (cit_estadoCita) REFERENCES estado_cita (estcita_id),
    ADD CONSTRAINT cita_medico_fk FOREIGN KEY (cit_medico) REFERENCES medico (med_nroMatriculaProsional)
;
/*
* MEDICO
*/
ALTER TABLE medico 
    ADD CONSTRAINT medico_especialidad_fk FOREIGN KEY (med_especialidad) REFERENCES especialidad (esp_id),
    ADD CONSTRAINT medico_consultorio_fk FOREIGN KEY (med_consultorio) REFERENCES consultorio (cons_codigo)
;

/*
TODO INSERTS
*/
/*
*   TIPO DOCUMENTO
*/
INSERT INTO tipo_documento (tipdoc_nombre,tipdoc_abreviatura) VALUES ('Cedula de Ciudadania','Cc');
INSERT INTO tipo_documento (tipdoc_nombre,tipdoc_abreviatura) VALUES ('Tarjeta de Identidad','T.i');
INSERT INTO tipo_documento (tipdoc_nombre,tipdoc_abreviatura) VALUES ('Pasaporte','Past');

/*
*   GENERO
*/
INSERT INTO genero (gen_nombre,gen_abreviatura) VALUES ('Masculino','M');
INSERT INTO genero (gen_nombre,gen_abreviatura) VALUES ('Femenino','F');
INSERT INTO genero (gen_nombre,gen_abreviatura) VALUES ('Otro','Otro');

/*
*   ACUDIENTE
*/
INSERT INTO acudiente (acu_nombreCompleto, acu_telefono, acu_direccion) VALUES ('Edgar Eduardo Mantilla Garcia','3167965248', 'Lebrija Santander');
INSERT INTO acudiente (acu_nombreCompleto, acu_telefono, acu_direccion) VALUES ('Stiven Carvajal','3147854987', 'Palomitas Floridablanca');

/*
*   USUARIO
*/
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES ('123','Andres','Santiago','Carvajal','Peliño','3154784596','Bucaramanga','santiagoyo@gmail.com',1,1,1);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES ('321','Fabio','Alberto','Morales','Petriño','3174578496','Giron','fabio478@outlook.es',1,1,1);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente)  VALUES ('74','Alejandra','Señora','Mantilla','Garcia','3007845647','Lebrija','aleja78@outlook.es',2,2,2);

/*
*   COLSULTORIO
*/
INSERT INTO consultorio (cons_nombre) VALUES ('Recepción 1'),('Recepción 2'), ('Recepción 3'),('Pediatria'), ('Pediatria prem'), ('Odontología');

/*
*   ESPECIALIDAD
*/
INSERT INTO especialidad(esp_nombre) VALUES("Medicina General");

/*
*   ESTADO CITA
*/
INSERT INTO estado_cita (estcita_nombre) VALUES ("ACTIVA"), ('SUPENDIDA'), ('CANCELADA'), ('PERDIDA');

/*
*   MEDICO
*/
INSERT INTO
    medico (med_nroMatriculaProsional,med_nombreCompleto,med_consultorio,med_especialidad) VALUES ("465899584","David Rojas",1,1);

/*
*   CITA
*/
INSERT INTO cita(cit_fecha,cit_estadoCita,cit_medico,cit_datosUsuario) VALUES ("2023-07-12 10:30:00",1,465899584,74)

