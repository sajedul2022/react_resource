<?php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
	isset($data->prid)
	&& isset($data->prname)
	&& isset($data->prdetails)
	&& isset($data->prprice)
	&& !empty(trim($data->prid))
	&& !empty(trim($data->prname))
	&& !empty(trim($data->prdetails))
	&& !empty(trim($data->prprice))
) {

	$id = mysqli_real_escape_string($db_conn, trim($data->prid));
	$name = mysqli_real_escape_string($db_conn, trim($data->prname));
	$details = mysqli_real_escape_string($db_conn, trim($data->prdetails));
	$price = mysqli_real_escape_string($db_conn, trim($data->prprice));

	$add = mysqli_query($db_conn, "UPDATE products SET name ='$name', details='$details', price ='$price'where id='$id'");

	if ($add) {
		echo json_encode(["success" => true]);
		return;
	} else {
		echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
		return;
	}
} else {
	echo json_encode(["success" => false, "msg" => "Please fill all the required fields!"]);
	return;
}
