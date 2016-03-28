<?php
	include"conn.php";

	//////list of users
	if($_GET['list']==1){
	$q=mysqli_query($conn,"select *from Users") or die(mysqli_error($conn));

	$result=array();
	$row_data=array();
	while($row=mysqli_fetch_array($q)){
		$row_data['id']=$row['id'];
		$row_data['username']=$row['username'];
		$row_data['password']=$row['password'];
		$row_data['firstname']=$row['firstname'];
		$row_data['lastname']=$row['lastname'];
		array_push($result,$row_data);
	}
	$response = array("users" => $result);
	echo json_encode($response);
	}elseif($_GET['validation']==1){
		include"checker.php";
	}
	

	
	//end
?>