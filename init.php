<?php
session_start();
include 'config.php';
define('HOST', $host);
define('USER', $username);
define('PASSWORD', $password);
define('DATABASE', $database);
require 'class/Database.php';
require 'class/Users.php';
require 'class/Time.php';
require 'class/Tickets.php';
require 'class/Department.php';
require 'class/Location.php';
$database = new Database;
$users = new Users;
$time = new Time;
$department = new Department;
$location = new Location;
$tickets = new Tickets;
?>
