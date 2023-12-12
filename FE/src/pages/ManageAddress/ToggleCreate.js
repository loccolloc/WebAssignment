import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
} from "@material-tailwind/react";
export default function ToggleCreate() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
        <Button onClick={handleOpen} variant="gradient" style={{padding:'10px',height:'fit-content',alignSelf:'center'}}>
            Thêm địa chỉ
        </Button>
        <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
            <DialogHeader>Thêm địa chỉ</DialogHeader>
            <DialogBody style={{height:'fit-content',overflow:'auto'}}>
                <form className="w-fit" method="post">
                    <div className="mb-1 flex flex-col gap-3">
                        <Input size="lg" type="text" name='province' label="Tỉnh thành" required/>
                        <Input size="lg" type="text" name='address' label="Địa chỉ" required/>
                        <Input size="lg" type="email" name='email' label="Email" required/>
                        <Input size="lg" type="text" name='phone' label="Số điện thoại" required/>
                    </div>
                    <Button className="mt-6" type="submit" fullWidth>
                    Tạo địa chỉ
                    </Button>
                </form>
            </DialogBody>
        </Dialog>
    </>
  );
}