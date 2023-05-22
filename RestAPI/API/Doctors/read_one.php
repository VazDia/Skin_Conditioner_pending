<?php
// Headers requis
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// On vérifie que la méthode utilisée est correcte
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    // On inclut les fichiers de configuration et d'accès aux données
    include_once '../../config/Database.php';
    include_once '../../models/doctors.php';

    // On instancie la base de données
    $database = new Database();
    $db = $database->getConnection();

    // On instancie les utilisateurs
    $doctor = new Doctors($db);

    $data = json_decode(file_get_contents("php://input"));

    if(!empty($data -> id_doctor)){
        $doctor -> id_doctor = $data -> id_doctor;

        // On récupère le produit
        $doctor->read_single();

        // On vérifie si le produit existe
        if($doctor -> first_name != null){

            $dctr = [
                "id_doctor" => $doctor -> id_doctor,
                "first_name" => $doctor -> first_name,
                "last_name" => $doctor -> last_name,
                "service_name" => $doctor -> service_name,
                "service_place" => $doctor -> service_place,
                "doctor_number" => $doctor -> doctor_number
                
            ];
            // On envoie le code réponse 200 OK
            http_response_code(200);

            // On encode en json et on envoie
            echo json_encode($dctr);
        }else{
            // 404 Not found
            http_response_code(404);
         
            echo json_encode(array("message" => "Le produit n'existe pas."));
        }
        
    }
}else{
    // On gère l'erreur
    http_response_code(405);
    echo json_encode(["message" => "La méthode n'est pas autorisée"]);
}