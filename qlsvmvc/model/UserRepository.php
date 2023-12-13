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
   

    public function find($id)
    {
        $cond = "id = $id";
        $students = $this->fetch($cond);
        $student = current($students); //lấy student tại vị trí con trỏ
        return $student;
    }

    public function update($student)
    {
        global $conn;
        $name = $student->name;
        $birthday = $student->birthday;
        $gender = $student->gender;
        $id = $student->id;
        $sql = "UPDATE student SET name='$name', birthday='$birthday', gender=$gender WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;

    }

    public function delete($id)
    {
        global $conn;
        $sql = "DELETE FROM account WHERE username=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;

    }
}