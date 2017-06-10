<?php

$request = $_GET['json'];
$json = json_decode($request);

$array;

foreach ($json as $name => $value) {
    // $variable = "$name: $value\n";
    // array_push($array, "$name: $value\n")

    $array[] = "$name: $value\n";
}

$data = implode("\n", $array);



mail( 'marek.melichar@centrum.cz', 'subject', $data, 'headers', 'attachments' );
