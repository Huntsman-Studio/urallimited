<?php

    $json = file_get_contents('php://input');

    // Convert to Object
    $data = json_decode($json);

    $msg = "<p>".echo $data->name."</p>";

    $msg .= "<p>".echo $data->email."</p>";

    $msg .= "<p>".echo $data->message."</p>";

    mail("kri.lamaj@gmail.com", "New contact form Message", $msg);
?>