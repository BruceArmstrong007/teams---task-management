<?php
require 'database.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  // Validate.
  if(trim($request->Task) === '')
  {
    return http_response_code(400);
  }

  
  // Sanitize.
  $id    = mysqli_real_escape_string($con, trim($request->ID));
  $task = mysqli_real_escape_string($con, trim($request->Task));
  $status = mysqli_real_escape_string($con, trim($request->Status));
  $person = mysqli_real_escape_string($con, trim($request->Person));
  $tags = mysqli_real_escape_string($con, trim($request->Tags));
    

  // Store.
  $sql = "UPDATE `task` SET `Task`='$task',`Status`='$status',`Person`='$person',`Tags`='$tags' WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    echo json_encode(['data'=> 'Updated']);
  }
  else
  {
    http_response_code(422);
  }
}



?>