<?php 
    include('db_connection.php');

    $data = file_get_contents("php://input");
    $data = json_decode($data);

    $id = $data->prodId;


    $sql = "DELETE FROM products WHERE id = '$id' ";
    $result = mysqli_query($db_conn, $sql);

    if($result){
        echo json_encode(["msg" => "Successfully Delete Product"]);
    }


    

   
 

?>

