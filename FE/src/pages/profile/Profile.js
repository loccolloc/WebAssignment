import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import EditPassword from './EditPassword'
import EditUsername from './EditUsername'
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
// import { useEffect } from "react";

// import { useSelector, useDispatch } from "react-redux";
// import { layThongTinChiTietUser } from "../../redux/actions/QuanLyUserAction";
const Profile = (props) => {
    const values = props.values;
    // var role = localStorage.getItem('role');
    // var username = localStorage.getItem("username");
    // const dispatch = useDispatch();

    console.log("values", values);

    const [onEdit, setOnEdit] = useState(true);



    const formik = useFormik({
        initialValues: {


        },
        onSubmit: (values) => {

            const sendData = {

                username: values.username,

            };

            axios
                .put("http://localhost/qlsvmvc/?c=user&a=update", sendData)
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

    // const name = UserDetail[0]?.username;




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
                    <EditUsername />
                    <EditPassword />
                </div>
            </div>
            <form onSubmit={formik.handleSubmit} >
                <div className="grid gap-y-4">
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <Input
                                size="lg"
                                label="Họ và tên"
                                name="username"
                                value={formik.values.username}

                                disabled={onEdit}
                            />
                        </div>
                        <div>
                            <Input
                                size="lg"
                                label="Email"
                                name="email"

                                disabled={onEdit}
                            />
                        </div>
                        <div>
                            <Input
                                size="lg"
                                label="Số điện thoại"
                                name="phone_number"

                                disabled={onEdit}
                            />
                        </div>
                        <div>
                            <Input
                                size="lg"
                                label="Địa chỉ"
                                name="address"

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
