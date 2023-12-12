import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
export default function ToggleCreate() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} variant="gradient" style={{padding:'10px',height:'fit-content',alignSelf:'center',width:'fit-content'}}>
        Thêm sản phẩm
      </Button>
      <Dialog open={open} handler={handleOpen} className="flex flex-col justify-center items-center">
            <DialogHeader>Thêm sản phẩm</DialogHeader>
            <DialogBody style={{height:'500px',overflow:'auto', scrollbarWidth: '0px'}} className="!overflow-x-hidden !overflow-y-visible">
                <form className="w-100 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-3">
                        <Input size="lg" type="text" name='title' label="Tên sản phẩm" required/>
                                                   
                        <Input size="lg" type="text" name='color' label="Màu sắc" required/>
                    
                        <Input size="lg" type="text" name='rom' label="Dung lượng" required/>
                                
                        <Input size="lg" type="text" name='price' label="Giá thành" required/>

                        <Input size="lg" type="text" name='remain_amount' label="Số lượng" required/>

                        <Input size="lg" type="text" name='thumbnail' label="Hình ảnh" required/>

                        <Textarea id="message" rows="4" label="Mô tả" name="description" ></Textarea>
                    
                    </div>
                    <Button className="mt-6" type="submit" fullWidth>
                    Xác nhận
                    </Button>

                </form>
            </DialogBody>
      </Dialog>
    </>
  );
}