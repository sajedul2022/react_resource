<?php

include("db_connection.php");

$data = file_get_contents("php://input");
// echo $data;

$data = json_decode($data);

if (($data->fname) && ($data->fname != '')) {

    $fname = $data->fname;
    $lname = $data->lname;
    $email = $data->email;
    $password = $data->password;

    $result = mysqli_query($db_conn, "SELECT * FROM registration WHERE email = '$email'");



    if (mysqli_num_rows($result) > 0) {
        echo json_encode("Try with different Email Address");
    } else {
        $resultInsert = mysqli_query($db_conn, "INSERT INTO registration (fname, lname, email, password) VALUES ('$fname','$lname','$email','$password')");

        echo json_encode("Registration Completed.");
    }
} else {
    echo json_encode("All Field must be filled");
}
