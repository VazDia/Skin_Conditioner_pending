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
    include_once '../../models/Users.php';

    // On instancie la base de données
    $database = new Database();
    $db = $database->getConnection();

    // On instancie les utilisateurs
    $user = new Users($db);

    $data = json_decode(file_get_contents("php://input"));

    if(!empty($data -> email) && !empty($data -> password)){
        $user -> email = $data -> email;
        $user -> password = $data -> password;

        // On récupère le produit
        $user->read_single();

        // On vérifie si le produit existe
        if($user -> first_name != null){

            $usr = [
                "id_user" => $user -> id_user,
                "first_name" => $user -> first_name,
                "last_name" => $user -> last_name,
                "email" => $user -> email,
                "password" => $user -> password
                
            ];
            // On envoie le code réponse 200 OK
            http_response_code(200);

            // On encode en json et on envoie
            echo json_encode($usr);
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