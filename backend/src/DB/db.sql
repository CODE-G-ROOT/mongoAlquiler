-- Active: 1689075950615@@localhost@3306
CREATE DATABASE citas_medicas;
USE citas_medicas;
CREATE TABLE usuario(
    usu_id INT NOT NULL AUTO_INCREMENT  PRIMARY KEY,
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
    tipdoc_nombre VARCHAR(20) NOT NULL,
    tipdoc_abreviatura VARCHAR(20) NOT NULL
);
CREATE TABLE acudiente(
    acu_codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    acu_nombreCompleto VARCHAR(100) NOT NULL,
    acu_telefono VARCHAR(100),
    acu_direccion VARCHAR(200) NOT NULL
);
CREATE TABLE cita(
    cit_codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cit_fecha DATE NOT NUL
);
CREATE TABLE estado_cita(
    estcita_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    estcita_nombre VARCHAR(20) NOT NULL
);
CREATE TABLE medico(
    med_nroMatriculaProsional INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
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






