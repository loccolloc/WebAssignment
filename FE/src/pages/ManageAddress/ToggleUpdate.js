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

    const [province, setProvince] = useState(values.row.province);
    const [address, setAddress] = useState(values.row.address);
    const [email, setEmail] = useState(values.row.email);
    const [phoneNumber, setPhoneNumber] = useState(values.row.phone);

    const handleProvinceChange = (e) => setProvince(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e .target.value);
    return (
        <>
        <IconButton onClick={handleOpen} style={{padding:'0',height:'fit-content',alignSelf:'center'}}>
            <EditIcon/>
        </IconButton>
        <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
            <DialogHeader>Chỉnh sửa địa chỉ</DialogHeader>
            <DialogBody style={{height:'fit-content',overflow:'auto', scrollbarWidth: '0px'}} className="!overflow-x-hidden !overflow-y-visible">
                <form className="w-100 max-w-screen-lg sm:w-96" method="post">
                    <div className="mb-1 flex flex-col gap-3">
                        <Input size="lg" type="text" name='province' label="Tỉnh thành" value={province} onChange={handleProvinceChange} required/>   
                        <Input size="lg"  type="text" name='address' label="Địa chỉ" value={address}  onChange={handleAddressChange}/>     
                        <Input size="lg" type='email' name='email' label="Email"  value={email} onChange={handleEmailChange} required/>     
                        <Input size="lg" type="text" name='phone_number' label="Số điện thoại" value={phoneNumber} onChange={handlePhoneNumberChange} required/>     
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