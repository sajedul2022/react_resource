-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2022 at 02:07 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wdpf51_react_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `category` varchar(30) NOT NULL,
  `seller` varchar(30) NOT NULL,
  `price` int(20) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `name`, `category`, `seller`, `price`, `image`) VALUES
(1, 'Security Camera | CCTV', 'Laptops', 'Camron LTD ', 15000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU'),
(2, 'Led Camera | CCTV', 'TV', 'Camron LTD ', 20000, 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70'),
(3, ' Camera | CCTV', 'Laptops', 'Camron LTD ', 32000, 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg'),
(4, 'Fridge', 'Laptops', 'Camron LTD ', 63000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) NOT NULL,
  `product_id` int(20) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_qty` int(20) NOT NULL,
  `user_id` int(10) NOT NULL,
  `order_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `product_id`, `product_name`, `product_price`, `product_qty`, `user_id`, `order_time`) VALUES
(1, 3, ' Camera | CCTV', '32000.00', 1, 0, '2022-12-12 12:55:49'),
(2, 4, 'Fridge', '63000.00', 1, 0, '2022-12-12 12:55:49'),
(3, 2, 'Led Camera | CCTV', '20000.00', 1, 100, '2022-12-12 13:00:59'),
(4, 3, ' Camera | CCTV', '32000.00', 1, 100, '2022-12-12 13:00:59'),
(5, 1, 'Security Camera | CCTV', '15000.00', 2, 100, '2022-12-12 13:05:00'),
(6, 4, 'Fridge', '63000.00', 1, 100, '2022-12-12 13:05:17');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `details` varchar(255) NOT NULL,
  `image` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `details`, `image`, `price`) VALUES
(6, 'Mouse', 'Computer', 'product6.jpg', '150.00'),
(7, 'fdfd', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has su', 'product7.jpg', '222.00'),
(9, 'Led TV', 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ', '', '36000.00');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `name`, `city`) VALUES
(18, 'Sajedul ', 'Dhaka');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` char(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(4, 'Dipu', 'dipu@gmail.com', 'fdf'),
(5, 'Sajedur', 'Rahman', 'fdf'),
(6, 'dfdfd', 'fdfd', 'fdfd'),
(10, 'fdfd', 'fdfd', 'fdfd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
