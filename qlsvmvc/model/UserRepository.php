<?php
class UserRepository
{
    public $error;

    public function getBySearch($search)
    {
        $cond = "username = '$search'";
        $users = $this->fetch($cond);
        return $users;
    }
    public function getAll()
    {
        return $this->fetch();
    }

    public function fetch($cond = null)
    {
        global $conn;
        $sql = "SELECT * FROM account";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $users = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $user = $row;
                $users[] = $user;
            }
        }
        return $users;
    }


    
    public function register($data)
    {
        global $conn;
        
        $username = $data->taiKhoan;
        $password = $data->matKhau;
        $img="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg";
       
        if($username!="" and $password!="")
        {
            $sql = "INSERT INTO account(username,password,role,image) VALUES('$username','$password','user','$img')";
        if ($conn->query($sql)) {
            return true;
        }
       
        return false;

        }
        return false;
    }
    function save($data) {
        global $conn;
       
            $username= $data->username;
            $password= $data->password;
            $image= $data->image;
            $phone= $data->phone;
            $role= $data->role;
            $email= $data->email;
            $fullname= $data->fullname;
            
            if($username!="" and $password!="" and $fullname!="" )
            {
                    $sql = "INSERT INTO account(username,password,image,phone,role,email,fullname) VALUES('$username','$password','$image','$phone','$role','$email','$fullname')";
                    if ($conn->query($sql)) {
                        return true;
                    }
                    $this->error = "Error: $sql <br>" .$conn->error ;
                    return false;
                }
                return false;
      
    
    }
   

    

    public function update($student)
    {
        global $conn;
        $id  = $student->id ;
        $username = $student->username;
        $password = $student->password;
        $role = $student->role;
        $image = $student->image;
        $fullname = $student->fullname;
        $email = $student->email;
        $phone = $student->phone;
        
        $sql = "UPDATE account SET username='$username', password='$password', role='$role', image='$image', email = '$email',phone='$phone',fullname='$fullname' WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;

    }
    public function login($data)
    {
        global $conn;
        $username = $conn->real_escape_string($data->taiKhoan);
        $password = $conn->real_escape_string($data->matKhau);

        $sql = "SELECT * FROM account WHERE username = '$username' AND password = '$password'";
        $result = $conn->query($sql);

        if ($result && $result->num_rows == 1) {
            $user = $result->fetch_assoc();
            return [
                "username" => $user["username"],
                "role" => $user["role"]
            ];
        } else {
            return false;
        }
        

    }
    public function delete($id)
    {
        global $conn;
        $sql = "DELETE FROM account WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;

    }
}