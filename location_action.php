<?php
include 'init.php';

if(!empty($_POST['action']) && $_POST['action'] == 'listLocation') {
	$location->listLocation();
}

if(!empty($_POST['action']) && $_POST['action'] == 'getLocationDetails') {
	$location->locationId = $_POST["locationId"];
	$location->getLocationDetails();
}

if(!empty($_POST['action']) && $_POST['action'] == 'addLocation') {
	$Location->Location = $_POST["Location"];
    $Location->status = $_POST["status"];
	$department->insert();
}

// if(!empty($_POST['action']) && $_POST['action'] == 'updateDepartment') {
// 	$department->departmentId = $_POST["departmentId"];
// 	$department->department = $_POST["department"];
//     $department->status = $_POST["status"];
// 	$department->update();
// }
//
// if(!empty($_POST['action']) && $_POST['action'] == 'deleteDepartment') {
// 	$department->departmentId = $_POST["departmentId"];
// 	$department->delete();
// }

?>