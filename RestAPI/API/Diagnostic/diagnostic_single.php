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
    include_once '../../models/diagnostic.php';

    // On instancie la base de données
    $database = new Database();
    $db = $database->getConnection();

    // On instancie les utilisateurs
    $diagnostic = new Diagnostic($db);

    $data = json_decode(file_get_contents("php://input"));

    if(!empty($data -> id_user)){
        $diagnostic -> id_user = $data -> id_user;

        // On récupère le produit
        $stmt = $diagnostic->read_single();

        // On vérifie si le produit existe
        if($diagnostic -> first_name != null){
            $tableau = [];
            $tableau['d'] = [];
            while($row=$stmt -> fetchAll(PDO::FETCH_ASSOC)){
                $dgtc = [
                    "id_user" => $diagnostic -> id_user,
                    "id_diagnostic" => $diagnostic -> id_diagnostic,
                    "first_name" => $diagnostic -> first_name,
                    "last_name" => $diagnostic -> last_name,
                    "images_name" => $diagnostic -> images_name,
                    "result" => $diagnostic -> result,
                    "date" => $diagnostic -> date
                    
                ];
                $tableau['d'][]=$dgtc;
            }
           
            // On envoie le code réponse 200 OK
            http_response_code(200);

            // On encode en json et on envoie
            echo json_encode($tableau);
        }else{
            // 404 Not found
            http_response_code(404);
         
            echo json_encode(array("message" => "Aucun."));
            
        }
        
    
}else{
    // On gère l'erreur
    http_response_code(405);
    echo json_encode(["message" => "La méthode n'est pas autorisée"]);
}

}else{
    // On gère l'erreur
    http_response_code(405);
    echo json_encode(["message" => "La méthode n'est pas autorisée"]);
}

?>