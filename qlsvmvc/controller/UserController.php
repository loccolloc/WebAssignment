<?php 
header('Content-Type: application/json; charset=utf-8');
class UserController {
    function list() {
        $userRepository = new UserRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $users =  $userRepository->getBySearch($search);
        }
        else {
            $users =  $userRepository->getAll();
        }
     
        $user=json_encode($users );
        echo ($user);
    }

    function add() {
        
    }
    function register(){
        $data=json_decode(file_get_contents("php://input"));
        $userRepository = new UserRepository();
        // $username = $data->taiKhoan;
        // $row=$userRepository->getBySearch('$username');
        // if($row > 0)
        // {
        //     echo json_encode(["success"=>"Da co username!"]);
        //     exit();
        // }
        
             if ( $userRepository->register($data)) {
            echo json_encode(["success"=>"User Added Successfully"]);
        }
        else {
            echo json_encode(["success"=>"Please Check the User Data!"]);
        }
       
       
    
        
    }

    function save() {
        $data=json_decode(file_get_contents("php://input"));
        global $conn;
        $username = $data->taiKhoan;
        $password = $data->matKhau;
        
        $sql = "insert into account(username,password) values('$username','$password')";
        $conn->query($sql);
        return true;
    

    }

    function edit() {
        $id = $_GET["id"];
        $userRepository = new UserRepository();
        $student =  $userRepository->find($id);
    }

    function update() {
        $id = $_POST["id"];
        $userRepository = new UserRepository();
        $student =  $userRepository->find($id);
        $student->name = $_POST["name"];
        $student->birthday = $_POST["birthday"];
        $student->gender = $_POST["gender"];
        if ( $userRepository->update($student)) {
            $_SESSION["success"] = "Đã tạo cập nhật sinh viên thành công";
        }
        else {
            $_SESSION["error"] =  $userRepository->error;
        }

    }

    function delete() {
        $id = $_GET["id"];
        $userRepository = new UserRepository();
        if ( $userRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa user thành công";
            echo "thanh cong";
        }
        else {
            $_SESSION["error"] =  $userRepository->error;
            echo $userRepository->error;
        }

    }
}
?>