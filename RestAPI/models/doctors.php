<?php 
class Doctors{
     // DB stuff
     private $conn;
     private $table = 'doctors';
     
 
     // Post Properties
     public $id_doctor;
     public $first_name;
     public $last_name;
     public $service_name;
     public $service_place;
     public $doctor_number;
    
 
     // Constructor with DB
     public function __construct($db) {
       $this->conn = $db;
     }
 
     // Get Posts
     public function read() {
       // Create query
       $query = 'SELECT id_doctor, d.first_name, d.last_name, s.name, s.place, d.number
       FROM '.
       $this ->table.' d
       JOIN service s
       ON d.id_service=s.id_service
       ORDER BY d.first_name';
       
       // Prepare statement
       $stmt = $this->conn->prepare($query);
 
       // Execute query
       $stmt->execute();
 
       return $stmt;
     }
 
     // Get Single Post
     public function read_single() {
           // Create query
           $query = 'SELECT d.id_doctor, d.first_name, d.last_name, s.name, s.place, d.number
                                     FROM ' . $this->table . ' d
                                      JOIN service s
                                      ON d.id_service=s.id_service
                                      WHERE
                                      d.id_doctor = :id_doctor
                                      
                                     ';
 
           // Prepare statement
           $stmt = $this->conn->prepare($query);
 
            // Bind email
           $stmt->bindParam(':id_doctor', $this->id_doctor);
 
           // Execute query
           $stmt->execute();
 
           $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
           // Set properties
           $this -> id_doctor = $row['id_doctor'];
           $this->first_name = $row['first_name'];
           $this->last_name = $row['last_name'];
           $this->service_name = $row['name'];
           $this->service_place = $row['place'];
           $this->doctor_number = $row['number'];
           
        }
}

?>