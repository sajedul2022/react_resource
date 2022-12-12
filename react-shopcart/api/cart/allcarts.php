<?php
include('db_connection.php');

$sql = "SELECT * FROM cart";
$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $products['id'] = $row['id'];
    $products['name'] = $row['name'];
    $products['category'] = $row['category'];
    $products['seller'] = $row['seller'];
    $products['price'] = $row['price'];
    $products['image'] = $row['image'];

    $myproducts['pr'][] = $products;
}

echo json_encode(['success' => "Yes", 'datas' => $myproducts]);



// id	
// name	
// category	
// seller	
// price	
// image