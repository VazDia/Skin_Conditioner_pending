<?php 
  class Users {
    // DB stuff
    private $conn;
    private $table = 'app_user';
    private $space_table='space';

    // Post Properties
    public $id_user;
    public $first_name;
    public $last_name;
    public $email;
    public $password;
   

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get Posts
    public function read() {
      // Create query
      $query = 'SELECT DISTINCT id_user, first_name, last_name, email, password 
      FROM '.$this->table .' ORDER BY id_user ASC';
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }

    // Get Single Post
    public function read_single() {
          // Create query
          $query = 'SELECT id_user, first_name, last_name, email, password
                                    FROM ' . $this->table . ' 
                                    WHERE
                                      email = :email
                                       AND 
                                       password = :password
                                    ';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

           // Bind email
          $stmt->bindParam(':email', $this->email);
            // Bind password
          $stmt->bindParam(':password', $this->password);

          // Execute query
          $stmt->execute();

          $row = $stmt->fetch(PDO::FETCH_ASSOC);

          // Set properties
          $this -> id_user = $row['id_user'];
          $this->first_name = $row['first_name'];
          $this->last_name = $row['last_name'];
          $this->email = $row['email'];
          $this->password = $row['password'];
          
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

    // Update Post
    public function update() {
          // Create query
          $query = 'UPDATE ' . $this->table . '
                                SET first_name = :first_name, last_name = :last_name, email = :email, password = :password
                                WHERE id_user = :id_user';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->first_name = htmlspecialchars(strip_tags($this->first_name));
          $this->last_name = htmlspecialchars(strip_tags($this->last_name));
          $this->email = htmlspecialchars(strip_tags($this->email));
          $this->password = htmlspecialchars(strip_tags($this->password));
          $this->id_user = htmlspecialchars(strip_tags($this->id_user));

          // Bind data
          $stmt->bindParam(':first_name', $this->first_name);
          $stmt->bindParam(':last_name', $this->last_name);
          $stmt->bindParam(':email', $this->email);
          $stmt->bindParam(':password', $this->password);
          $stmt->bindParam(':id_user', $this->id_user);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }

    // Delete Post
    public function delete() {
          // Create query
          $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }
    
  }