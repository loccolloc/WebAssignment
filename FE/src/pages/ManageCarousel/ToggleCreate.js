import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Select,
  Option

} from "@material-tailwind/react";
export default function ToggleCreate() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
        <Button onClick={handleOpen} variant="gradient" style={{padding:'10px',height:'fit-content',alignSelf:'center'}}>
            Thêm quảng cáo
        </Button>
        <Dialog open={open} size='xs' handler={handleOpen} className="flex flex-col justify-center items-center">
            <DialogHeader>Thêm quảng cáo</DialogHeader>
            <DialogBody style={{height:'fit-content',overflow:'auto', scrollbarWidth: '0px'}} className="!overflow-x-hidden !overflow-y-visible">
                <form className="w-100 max-w-screen-lg sm:w-96" method="post">
                    <div className="mb-1 flex flex-col gap-3">
                        <Input size="lg" type="text" name='img' label="Ảnh" required/>
                    </div>
                    <Button className="mt-6" type="submit" fullWidth>
                    Tạo quảng cáo
                    </Button>
                </form>
            </DialogBody>
        </Dialog>
    </>
  );
}