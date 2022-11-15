<?php

    $json = file_get_contents('php://input');

    // Convert to Object
    $data = json_decode($json);

    $msg = "<p>" + echo $data->name; +"</p>";

    mail("ural@urallimited.com", "New contact form Message", $msg);
?>