<?php
    $hostname='localhost';
    $username='root';
    $password='';
    try {
        $connection = new PDO("mysql:host=$hostname;dbname=php_crud", $username, $password);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        echo "Databse connection failed: " . $e->getMessage();
    }