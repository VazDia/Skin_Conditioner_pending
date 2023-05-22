<?php 
class Diagnostic{
     // DB stuff
     private $conn;
     private $table = 'diagnostic';
     
 
     // Post Properties
     public $id_diagnostic;
     public $id_user;
     public $first_name;
     public $last_name;
     public $image_name;
     public $result;
     public $date;
    
 
     // Constructor with DB
     public function __construct($db) {
       $this->conn = $db;
     }
 
     
 // Get Single Post
 public function read_single() {
  // Create query
  $query = 'SELECT ap.id_user, d.id_diagnostic, ap.first_name, ap.last_name, d.images_name, d.result, d.date
                            FROM ' . $this->table . ' d
                            JOIN app_user ap
                            ON d.id_user = ap.id_user
                            WHERE
                              d.id_user = :id_user
                            ';

  // Prepare statement
  $stmt = $this->conn->prepare($query);

   // Bind user id
  $stmt->bindParam(':id_user', $this->id_user);
   

  // Execute query
  $stmt->execute();
  $rows= $stmt->fetch(PDO::FETCH_ASSOC);
  foreach($row as $rows ){
    $this -> id_user = $row['id_user'];
    $this->first_name = $row['first_name'];
    $this->last_name = $row['last_name'];
    $this->_name = $row['last_name'];
  }
 
  
  return $stmt;
}

    

         // Delete Post
    public function delete() {
        // Create query
        $query = 'DELETE FROM ' . $this->table . ' WHERE id_diagnostic = :id_diagnostic';

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->id_diagnostic = htmlspecialchars(strip_tags($this->id_diagnostic));

        // Bind data
        $stmt->bindParam(':id_diagnostic', $this->id_diagnostic);

        // Execute query
        if($stmt->execute()) {
          return true;
        }

        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);

        return false;
  }

   // Create Post
   public function create() {
    // Create query
    $query = 'INSERT INTO ' . $this->table . ' (first_name, last_name, email, password) VALUES  (:first_name, :last_name, :email, :password)';
    
    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Clean data
    $this->first_name = htmlspecialchars(strip_tags($this->first_name));
    $this->last_name = htmlspecialchars(strip_tags($this->last_name));
    $this->email = htmlspecialchars(strip_tags($this->email));
    $this->password = htmlspecialchars(strip_tags($this->password));

    // Bind data
    $stmt->bindParam(':first_name', $this->first_name);
    $stmt->bindParam(':last_name', $this->last_name);
    $stmt->bindParam(':email', $this->email);
    $stmt->bindParam(':password', $this->password);

    // Execute query
    if($stmt->execute()) {
      return true;
}

// Print error if something goes wrong
printf("Error: %s.\n", $stmt->error);

return false;
}
}

?>