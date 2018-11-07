<?php


    $user ="root";
    $password =""; 
    $host ="localhost";
    $db = "space ";

    $conn = mysqli_connect($host, $user, $password, $db);

    if (!$conn){
        echo "connection didn't work...";
        exit;
    }

    //echo "connected!";

    //get all the car DATA
    //$myQuery = "SELECT * FROM mainmodel";

    //make the query, get the result
    //$result = myqli_query($conn, $myQuery);

    //$rows = array();

    //while($row = mysqli_fetch_assoc($result)) {
    //    $rows[] = $row;
    //}

    if (isset($_GET{"spaceUniverse"})) {//chect for a parameter
        $space =$_GET["spaceUniverse"];
    
        $myQuery = "SELECT * FROM mainmodel WHERE model ='$space'";

        $result + mysqli_query($conn, $myQuery);
        $rows = array();

        while($row = mysqli_fetch_assoc($result)) {
            $row[] = $row;
    }

    //send the entire result set as a json encoded array
    echo json_encode($rows);

?>