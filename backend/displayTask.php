<?php
require 'database.php';

$policies = [];
$sql = "SELECT * FROM task";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = $result->fetch_assoc())
  {
    
      $policies[$i]['Task']    = $row['Task'];
      $policies[$i]['Person'] = $row['Person'];
      $policies[$i]['Status'] = $row['Status'];
      $policies[$i]['Tags'] = $row['Tags'];
      $policies[$i]['ID'] = $row['id'];
    

    $i= $i + 1;
  }

  echo json_encode($policies);
}
else
{
  http_response_code(404);
}

?>