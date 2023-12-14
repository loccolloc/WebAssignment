import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import Header from "../../templates/HomeTemplate/Layout/Header/Header";
import EditPassword from './EditPassword'
// import EditUsername from './EditUsername'
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import { layThongTinChiTietUser } from "../../redux/actions/QuanLyUserAction";
const Profile = () => {
   


    var role = localStorage.getItem('role');
    var username = localStorage.getItem("username");
    const dispatch = useDispatch();


    const UserDetail = useSelector(
        (state) => state.QuanLyUserReducer.productDetail
    );
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [onEdit, setOnEdit] = useState(true);
    useEffect(() => {
      axios.post("http://localhost/qlsvmvc/?c=User&a=getUser", {
        username: username,
      }).then((res) => {
        setFullname(res.data[0]["fullname"]);
        setEmail(res.data[0]["email"]);
        setPhoneNumber(res.data[0]["phonenumber"]);
        setAddress(res.data[0]["address"]);
      });
    }, []);




    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");


        console.log("Fullname:", fullname);
        console.log("Email:", email);
        console.log("Phone Number:", phoneNumber);
        console.log("Address:", address);
      };
      const handleEditInfo = async (e) => {
        e.preventDefault();
        setOnEdit(!onEdit);
   
        await axios
          .post("http://localhost/qlsvmvc/?c=User&a=updateInfo", {
            username:username,
            fullname: fullname,
            email: email,
            phonenumber: phoneNumber,
            address: address,
          })
          .then((res) => {
            if (res.data) {
              toast.success("Update Info successfully!!!", {
                position: toast.POSITION.TOP_CENTER,
              });
            } else {
              toast.warning("Update failed!!!", {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          });
      };
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
                    <EditPassword />
                </div>
            </div>
          <form onSubmit={(e) => handleEditInfo(e)}>
            <div className="grid gap-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Input
                    size="lg"
                    label="Email"
                    name="email"
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
                    {!onEdit ? `Lưu thông tin` : `Chỉnh sửa thông tin`}
                  </Button>
                </div>
              </div>
            </div>
          </form>
          {/* <ToastContainer/>; */}
        </div>
    );
};


export default Profile;



