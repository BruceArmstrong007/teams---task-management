<?php
require 'database.php';

$policies = [];
$sql = "SELECT * FROM tags";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = $result->fetch_assoc())
  {
    
      $policies[$i] = $row['tag'];
    

    $i= $i + 1;
  }

  echo json_encode($policies);
}
else
{
  http_response_code(404);
}

?>