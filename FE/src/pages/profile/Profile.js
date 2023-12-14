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
    const [onEdit, setOnEdit] = useState(false);

    var role = localStorage.getItem('role');
    var username = localStorage.getItem("username");
    const dispatch = useDispatch();

    const UserDetail = useSelector(
        (state) => state.QuanLyUserReducer.productDetail
    );
    useEffect(() => {
        //Lấy thông tin param từ url


        dispatch(layThongTinChiTietUser(username));

    }, []);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullname: UserDetail[0]?.fullname,
            email: UserDetail[0]?.email,
            phonenumber: UserDetail[0]?.phonenumber,
            address: UserDetail[0]?.address,
        },
        onSubmit: (values) => {

            const sendData = {
                fullname: values.fullname,
                email: values.email,
                phonenumber: values.phonenumber,
                address: values.address
            };

            axios
                .put("http://localhost/qlsvmvc/?c=produc&a=update", sendData)
                .then((result) => {
                    if (result.data.Status === "Invalid") {
                    } else {

                        // window.location.reload();
                    }
                }).catch(error => {
                    console.log("error:", error);
                });;


        },
        validationSchema: Yup.object({
            username: Yup.string().required("Không được để trống!"),
        }),
    });
    function handleChangeOnEdit(e) {
        e.preventDefault();
        setOnEdit(!onEdit)
    }

    return (
        <div className="grid m-4 gap-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div

                    className="text-3xl md:text-5xl font-semibold"
                    sx={{ m: "0 0 5px 0" }}
                >
                    Thông tin người dùng
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-2/4">
                    <EditUsername />
                    <EditPassword />
                </div>
            </div>
            <form onSubmit={formik.handleSubmit} >
                <div className="grid gap-y-4">
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <Input
                                onChange={formik.handleChange}
                                value={formik.values.fullname}
                                size="lg"
                                label="Họ và tên"
                                name="fullname"
                                disabled={onEdit}
                            />
                        </div>
                        <div>
                            <Input
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                size="lg"
                                label="Email"
                                name="email"
                                disabled={onEdit}
                            />
                        </div>
                        <div>
                            <Input
                                onChange={formik.handleChange}
                                value={formik.values.phonenumber}
                                size="lg"
                                label="Số điện thoại"
                                name="phonenumber"
                                disabled={onEdit}
                            />
                        </div>
                        <div>
                            <Input
                                onChange={formik.handleChange}
                                value={formik.values.address}
                                size="lg"
                                label="Địa chỉ"
                                name="address"
                                disabled={onEdit}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex justify-end">
                            {!onEdit ?  (
                                <Button onClick={(e) => handleChangeOnEdit(e)}>Chỉnh sửa thông tin</Button>
                            ):
                            (
                                <Button type="submit" onClick={(e) => handleChangeOnEdit(e)}>Lưu thông tin</Button>
                            )
                            }
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Profile;