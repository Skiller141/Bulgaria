<?php

/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$tel = htmlspecialchars($_POST["tel"]);
$website = htmlspecialchars($_POST["website"]);
$message = htmlspecialchars($_POST["message"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);

$hoteler = htmlspecialchars($_POST["hotel"]);

/* Ваш адрес и тема сообщения */
$address = "smadihome@mail.ru";
$sub = "Сообщение с сайта smadi.by/landing/";

/* Формат письма */
$mes = "Сообщение с сайта smadi.by/landing/.\n
Отель: $hoteler
Имя отправителя: $name 
Электронный адрес отправителя: $email
Телефон отправителя: $tel
Текст сообщения: $message";

/* Отправляем сообщение, используя mail() функцию */
$from = "Reply-To: $email \r\n";
mail($address, $sub, $mes, $from);