<?php

class Database{

private $host = 'localhost';
private $db = 'Project';
private $username = 'postgres';
private $password ='Camelia';
public $conn;

public function getConnection(){

   $this -> conn = null;
    try{

        $dsn ='pgsql:host=localhost;port=5432;dbname=Project;';
         // make a database connection
        $this -> conn = new PDO($dsn, $this->username, $this->password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
       
    
    }catch(PDOException $e) {
    
        echo "Erreur de connexion : " . $e->getMessage();
    
    }
    
    return $this -> conn;
        

}

}



?>