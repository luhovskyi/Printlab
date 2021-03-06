<?php
namespace Backup;

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
require '../../../vendor/autoload.php';

$serviceAccount = ServiceAccount::fromJsonFile('./../../../config/stickers-9757a-firebase-adminsdk-oe4js-eb703f6cb4.json');

$filename = date('Y-m-d H-i-s').'.json';
$backup_dir = getcwd() . '/../../../backups/';

if(!is_dir($backup_dir)){
    mkdir($backup_dir);
}
$file_location = $backup_dir.$filename;

$firebase = (new Factory)
    ->withServiceAccount($serviceAccount)
    ->create();

$db = $firebase->getDatabase();

$reference = $db->getReference('/');
$data = $reference->getValue();
$data = json_encode($data);

$backup_file = fopen($file_location, 'wb');
fwrite($backup_file, $data);
fclose($backup_file);
echo 'Backup file \'' . $filename . '\' successfully has been created.';