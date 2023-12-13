import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import EditPassword from './EditPassword'
import EditUsername from './EditUsername'
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { layThongTinChiTietUser } from "../../redux/actions/QuanLyUserAction";
const Profile = () => {

    var role = localStorage.getItem('role');
    var username = localStorage.getItem("username");
    const dispatch = useDispatch();


    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [onEdit, setOnEdit] = useState(true);
    
    const UserDetail = useSelector(
        (state) => state.QuanLyUserReducer.productDetail
    );
    useEffect(() => {
        //Lấy thông tin param từ url


        dispatch(layThongTinChiTietUser(username));

    }, []);
    console.log("username: ", UserDetail[0]?.username);

    const formik = useFormik({
        initialValues: {
            username: username,

        },
        onSubmit: (values) => {

            const sendData = {

                username: values.username,

            };

            axios
                .put("http://localhost/qlsvmvc/?c=produc&a=update", sendData)
                .then((result) => {
                    if (result.data.Status === "Invalid") {
                    } else {

                        window.location.reload();
                    }
                }).catch(error => {
                    console.log("error:", error);
                });;


        },
        validationSchema: Yup.object({
            username: Yup.string().required("Không được để trống!"),

        }),
    });


    return (
        <div className="grid m-4 gap-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                
                className="text-xl md:text-3xl font-semibold"
                sx={{ m: "0 0 5px 0" }}
                >
                Thông tin người dùng
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-2/4">
                <EditUsername/>
                <EditPassword/>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit} >
                <div className="grid gap-y-4">
                    <div className="grid grid-cols-1 gap-4">
                    <div>
                    <Input
                        size="lg"
                        label="Họ và tên"
                        name="fullName"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        disabled={onEdit}
                    />
                    </div>
                    <div>
                    <Input
                        size="lg"
                        label="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={onEdit}
                    />
                    </div>
                    <div>
                    <Input
                        size="lg"
                        label="Số điện thoại"
                        name="phone_number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        disabled={onEdit}
                    />
                    </div>
                    <div>
                    <Input
                        size="lg"
                        label="Địa chỉ"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        disabled={onEdit}
                    />
                    </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex justify-end">
                        <Button type="submit">
                            {onEdit ? `Lưu thông tin` : `Chỉnh sửa thông tin`}
                        </Button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Profile;
