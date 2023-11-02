-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-11-2023 a las 22:18:03
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp45`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiendas`
--

CREATE TABLE `tiendas` (
  `idTiendas` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `tipo` int(11) NOT NULL,
  `nombreCalleDireccion` varchar(50) NOT NULL,
  `numeroCalleDireccion` int(11) NOT NULL,
  `codigoPostal` int(11) NOT NULL,
  `poblacion` int(11) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `latitud` float NOT NULL,
  `longitud` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `tiendas`
--

INSERT INTO `tiendas` (`idTiendas`, `nombre`, `tipo`, `nombreCalleDireccion`, `numeroCalleDireccion`, `codigoPostal`, `poblacion`, `localidad`, `latitud`, `longitud`) VALUES
(1, 'Magama', 2, 'Mendez', 32323, 1213, 3, 'Musaicos', 23.3242, 23.4342),
(2, 'Pancetero', 1, 'Castello', 2322, 7600, 2, 'Mar del Plata', 54.2323, 32.2232),
(3, 'Manuelardium', 1, '11 de Septiembre', 2009, 7600, 1, 'Mar del Plata', 23.2324, 49.7687);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tiendas`
--
ALTER TABLE `tiendas`
  ADD PRIMARY KEY (`idTiendas`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tiendas`
--
ALTER TABLE `tiendas`
  MODIFY `idTiendas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
