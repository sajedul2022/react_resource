<?php
include('db_connection.php');

$data = file_get_contents("php://input");
$data = json_decode($data);
// print_r($data->items);

$items = $data->items;
$userid = $data->user;

// echo $data->user;

foreach($items as $item){
    // echo $item->name. "<br/>";

    $sql = "INSERT INTO orders(product_id, product_name, product_price, product_qty, user_id) VALUES ('$item->id','$item->name','$item->price','$item->quantity','$userid')";
    mysqli_query($db_conn,$sql);
}

if(mysqli_affected_rows($db_conn)>0){
    echo json_encode("Your Order Place Successflly!");
}




// id	
// name	
// category	
// seller	
// price	
// image