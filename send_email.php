<?php

$request = $_GET['json'];
$json = $request;

$array;

foreach ($request as $name => $value) {
  $array[] = "$name: $value\n";
}

$data = implode("\n", $array);

mail( 'marek.melichar@centrum.cz', 'subject', $data, 'headers', 'attachments' );
