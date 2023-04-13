-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 09 2023 г., 21:49
-- Версия сервера: 8.0.24
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `kindergarten`
--

-- --------------------------------------------------------

--
-- Структура таблицы `kindergartens`
--

CREATE TABLE `kindergartens` (
  `name` varchar(255) NOT NULL,
  `num_of_children` int NOT NULL,
  `num_of_workers` int NOT NULL,
  `avg_salary` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `kindergartens`
--

INSERT INTO `kindergartens` (`name`, `num_of_children`, `num_of_workers`, `avg_salary`) VALUES
('Детский сад \"Веселый клоун\"', 70, 14, '29000.00'),
('Детский сад \"Дружок\"', 30, 6, '22000.00'),
('Детский сад \"Колобок\"', 40, 8, '23000.00'),
('Детский сад \"Малышок\"', 45, 9, '24000.00'),
('Детский сад \"Радость\"', 75, 15, '30000.00'),
('Детский сад \"Ромашка\"', 50, 10, '25000.00'),
('Детский сад \"Сказка\"', 55, 11, '26000.00'),
('Детский сад \"Созвездие\"', 80, 16, '31000.00'),
('Детский сад \"Солнышко\"', 60, 12, '27000.00'),
('Детский сад \"Улыбка\"', 65, 13, '28000.00');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `kindergartens`
--
ALTER TABLE `kindergartens`
  ADD PRIMARY KEY (`name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
