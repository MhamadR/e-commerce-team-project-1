<?php

include("../../connection.php");


$seller_id = $_POST["seller_id"];

<<<<<<< HEAD
$query = "UPDATE users SET is_ban = !is_ban WHERE id= ? ";
=======
$query = "UPDATE users SET is_ban = !is_ban   WHERE id= ? ";
>>>>>>> origin/backend
$query = $mysqli->prepare($query);
$query->bind_param("s", $seller_id);
$query->execute();

if($query)
{
  echo "done successfully!";  

}
else
{
  echo "Something went wrong!";
}

?>
