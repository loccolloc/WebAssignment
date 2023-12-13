import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Textarea
} from "@material-tailwind/react";
import EditIcon from '@mui/icons-material/Edit';
import {  IconButton } from "@mui/material";
export default function ToggleUpdate(props) {
    const [open, setOpen] = React.useState(false);
    const values = props.values;
    const handleOpen = () => setOpen(!open);
    const [name, setName] = useState(values.row.name);
    const [content, setContent] = useState(values.row.content);
    const [img, setImg] = useState(values.row.img);

    const handleNameChange = (e) => setName(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const handleImgChange = (e) => setImg(e.target.value);
    return (
        <>
        <IconButton onClick={handleOpen} style={{padding:'0',height:'fit-content',alignSelf:'center'}}>
            <EditIcon/>
        </IconButton>
        <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
            <DialogHeader>Chỉnh sửa thông tin phản hồi</DialogHeader>
            <DialogBody style={{height:'fit-content',overflow:'auto', scrollbarWidth: '0px'}} className="!overflow-x-hidden !overflow-y-visible">
                <form className="w-100 max-w-screen-lg sm:w-96" method="post">
                    <div className="mb-1 flex flex-col gap-3">

                        <Input size="lg" type="text" name='name' label="Tên" value={name} onChange={(e)=>handleNameChange(e)} required/>

                        <Input size="lg" type='text' name='img' label="Hình ảnh" value={img} onChange={(e)=>handleImgChange(e)} required/>     

                        <Textarea size="lg"  type="text" name='content' label="Nội dung" value={content} onChange={(e)=>handleContentChange(e)} required/> 
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