import React from "react";
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
import { useState } from "react";
export default function DialogDefault(props) {
  const [open, setOpen] = React.useState(false);
  const values = props.values;
  const handleOpen = () => setOpen(!open);
  const [title, setTitle] = useState(values.row.title);
  const [color, setColor] = useState(values.row.color);
  const [rom, setRom] = useState(values.row.rom);
  const [price, setPrice] = useState(values.row.price);
  const [remainAmount, setRemainAmount] = useState(values.row.remain_amount);
  const [description, setDescription] = useState(values.row.description);
  const [thumbnail, setThumbnail] = useState(values.row.thumbnail);

  
  function handleChangeTitle(event) {
    setTitle(event.target.value)
  }
  function handleChangeColor(event) {
    setColor(event.target.value)
  }
  function handleChangeRom(event) {
    setRom(event.target.value)
  }
  function handleChangePrice(event) {
    setPrice(event.target.value)
  }
  function handleChangeRom(event) {
    setRom(event.target.value)
  }
  function handleChangeAmount(event) {
    setRemainAmount(event.target.value)
  }
  function handleChangeDescription(event) {
    setDescription(event.target.value)
  }
  function handleChangeThumbnail(event) {
    setThumbnail(event.target.value)
  }
  
  return (
    <>
      <IconButton onClick={handleOpen} style={{padding:'0',height:'fit-content',alignSelf:'center'}}>
        <EditIcon/>
      </IconButton>
      <Dialog open={open} handler={handleOpen} className="flex flex-col justify-center items-center">
            <DialogHeader>Chỉnh sửa sản phẩm</DialogHeader>
            <DialogBody style={{height:'500px',overflow:'auto', scrollbarWidth: '0px'}} className="!overflow-x-hidden !overflow-y-visible">
                <form className="w-100 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-3">
                        <Input size="lg" type="text" name='title' label="Tên sản phẩm" value={title} onChange={(e)=>handleChangeTitle(e)} required/>
                                                   
                        <Input size="lg" type="text" name='color' label="Màu sắc" value={color} onChange={(e)=>handleChangeColor(e)} required/>
                    
                        <Input size="lg" type="text" name='rom' label="Dung lượng" value={rom} onChange={(e)=>handleChangeRom(e)} required/>
                                
                        <Input size="lg" type="text" name='price' label="Giá thành" value={price} onChange={(e)=>handleChangePrice(e)} required/>

                        <Input size="lg" type="text" name='remain_amount' label="Số lượng" value={remainAmount} onChange={(e)=>handleChangeAmount(e)} required/>

                    
                        <Input size="lg" type="text" name='img' label="Hình ảnh" value={thumbnail} onChange={(e)=>handleChangeThumbnail(e)} required/>

                        <Textarea id="message" rows="4" label="Mô tả" name="description" value={description} onChange={(e)=>handleChangeDescription(e)} ></Textarea>                    
                    
                    </div>
                    <Button className="mt-6" type="submit" fullWidth>
                    Lưu thông tin
                    </Button>

                </form>
            </DialogBody>
      </Dialog>
    </>
  );
}