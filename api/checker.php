<?php
  include"conn.php";

  	$username=mysqli_real_escape_string($conn,$_GET['username']);
  	$password=mysqli_real_escape_string($conn,md5($_GET['password']));
  	$q=mysqli_query($conn,"select *from Users where username='$username' and password='$password'") or die(mysqli_error($conn));
  	if(mysqli_num_rows($q)>0){
  		$result=array('authorize' => true);	
  	}else{
  		$result=array('authorize' => false);	
  	}
		
  		$response=array('Validation' => $result);
  		echo json_encode($response);
  	
  	
?>