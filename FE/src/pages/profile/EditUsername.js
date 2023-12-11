import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export default function EditPassword() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [pass, setPass] = useState();
  const [username, setUsername] = useState();
  const [checkPass, setCheckPass] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost/WebAssignment/BE/index.php", {
        id: 6,
        password: pass,
        username: username,
        action: "updateUsername",
      })
      .then((res) => {
        if(res.data)
        {
          toast.success("Update Info successfully!!!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        else
        {
          toast.warning("Update failed, You entered incorrect password!!!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }

      });
  }
  return (
    <>
      <Button className="text-white bg-dark rounded py-2" onClick={handleOpen}>Thay đổi tên người dùng</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] p-2">
          <CardBody className="flex flex-col gap-6">
            <Typography
              variant="h5"
              color="blue-gray"
              className="text-center w-fit"
            >
              Chỉnh sửa tên người dùng
            </Typography>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-4">
                <Input
                  type="password"
                  size="lg"
                  label="Mật khẩu"
                  name="pass"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <Input
                  type="text"
                  size="lg"
                  label="Tên người dùng"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  // disabled = {!checkPass}
                />
                <Button
                  variant="gradient"
                  type="submit"
                  onClick={handleOpen}
                  fullWidth
                >
                  Xác nhận
                </Button>
              </div>
            </form>
            {/* <ToastContainer/>; */}
          </CardBody>
        </Card>
      </Dialog>
    </>
  );

}