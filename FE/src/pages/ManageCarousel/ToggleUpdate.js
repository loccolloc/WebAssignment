import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Select,
  Option
} from "@material-tailwind/react";
import EditIcon from '@mui/icons-material/Edit';
import {  IconButton } from "@mui/material";
export default function ToggleUpdate(props) {
    const [open, setOpen] = React.useState(false);
    const values = props.values;
    const handleOpen = () => setOpen(!open);
    const [img, setImg] = useState(values.row.img);

    const handelChangeImg = (e) => setImg(e.target.value);

    return (
        <>
        <IconButton onClick={handleOpen} style={{padding:'0',height:'fit-content',alignSelf:'center'}}>
            <EditIcon/>
        </IconButton>
        <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
            <DialogHeader>Chỉnh sửa quảng cáo</DialogHeader>
            <DialogBody style={{height:'fit-content',overflow:'auto'}}>
                <form className="w-fit max-w-screen-lg sm:w-96" method="post">
                    <div className="mb-1 flex flex-col gap-3">
                        <Input size="lg" type="text" name='img' label="Ảnh" value={img} onChange={(e) => handelChangeImg(e)}required/>
                    </div>
                    <Button className="mt-6" type="submit" fullWidth>
                    Lưu thay đổi
                    </Button>
                </form>
            </DialogBody>
        </Dialog>
    </>
  );
}