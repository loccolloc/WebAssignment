import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinChiTietSanPham } from "../../redux/actions/QuanLySanPhamAction";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

import { toast } from 'react-toastify'
import { layDanhSachCommentAction, xoaCommentAction } from "../../redux/actions/QuanLyCommentAction";
import { themDanhSachGioHangAction } from "../../redux/actions/QuanLyGioHangAction";
export default function Detail(props) {
    const { id } = useParams();
    var role = localStorage.getItem('role');
    var username = localStorage.getItem("username");


    const formik = useFormik({
        initialValues: {
            comment: "",
        },
        onSubmit: (values) => {
            if (role === "admin") {
                toast.error("Admin không thể bình luận!");
            }
            else if (role !== "user") {
                toast.error("Vui lòng đăng nhập để bình luận!");
            } else {
                const sendData = {
                    comment: values.comment,
                    productid: id,
                    username: username,
                };

                axios
                    .post("http://localhost/qlsvmvc/?c=comment&a=save", sendData)
                    .then((result) => {
                        if (result.data.Status === "Invalid") {
                        } else {
                            window.location.reload();
                        }
                    });
            }

        },
        validationSchema: Yup.object({
            comment: Yup.string().required("Không được để trống!"),
        }),
    });
    const productDetail = useSelector(
        (state) => state.QuanLyChiTietReducer.productDetail
    );

    const { arrComment } = useSelector((state) => state.QuanLyCommentReducer);

    // const productDetail = useSelector(
    //     (state) => state.QuanLySanPhamReducer.productDetail
    // );
    const [isProcessing, setIsProcessing] = useState(false);

    const handleAddToCart = () => {

        if (!isProcessing) {
            setIsProcessing(true);

            const action = themDanhSachGioHangAction(JSON.stringify(sanPhama));
            dispatch(action)
                .then(() => {
                    setIsProcessing(false);
                })
                .catch(() => {
                    setIsProcessing(false); // handle error scenario
                });
        }


    };

    let sanPhama = {
        ptitle: productDetail[0]?.ptitle,
        pprice: productDetail[0]?.pprice,
        pkind: productDetail[0]?.pkind,
        pimg: productDetail[0]?.pimg,
        sl: 1,
        username: username,
        p_id: productDetail[0]?.id,
    };



    const dispatch = useDispatch();
    let formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });

    useEffect(() => {
        //Lấy thông tin param từ url
        let { id } = props.match.params;

        dispatch(layThongTinChiTietSanPham(id));
        const action = layDanhSachCommentAction(id);
        dispatch(action); //dispatch function từ thunk
    }, []);

    const renderComment = () => {
        // return arrFilm.slice(0, 12).map((phim, index) => {
        return arrComment.map((comment, index) => {
            return (
                <div className="border rounded-md p-3 ml-3 my-3">
                    <div className="flex gap-3 items-center">

                        <img
                            src="https://avatars.githubusercontent.com/u/22263436?v=4"
                            className="object-cover w-8 h-8 rounded-full 
    border-2 border-emerald-400  shadow-emerald-400
    "
                            alt="1"
                        />
                        <h3 className="font-bold">{comment.username}</h3>

                    </div>
                    <div class="text-gray-700 text-sm mb-4 mt-2">Đăng vào {comment.time}</div>
                    <p className="text-gray-600 mt-2">{comment.comment}</p>
                    {(role === "admin" || comment.username === username) && (
                        <btn
                            onClick={() => {
                                const action = xoaCommentAction(comment.id);
                                dispatch(action); //dispatch function từ thunk
                                window.location.reload();
                            }}
                            className="text-gray-500 hover:text-gray-700">
                            <i class="fa fa-trash-alt"></i> Xóa
                        </btn>
                    )}
                </div>
            );
        });
    };

    return (
        <div>
            <section className="py-10 font-poppins dark:bg-gray-800">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="flex flex-wrap mb-24 -mx-4">
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <NavLink
                                to="/home"
                                className="flex  fill-current font-semibold text-dark text-sm mt-10"
                            >
                                <svg
                                    className="mb-5 text-dark fill-current mr-2  w-4"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296"
                                        fill="#000000"
                                    />
                                </svg>{" "}
                                Tiếp tục mua hàng
                            </NavLink>
                            <div className="sticky top-0 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10 lg:h-96">
                                    <btn
                                        className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"

                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                            ></path>
                                        </svg>
                                    </btn>
                                    <img
                                        className="object-contain w-full lg:h-full"
                                        src={productDetail[0]?.pimg}
                                        alt="1"
                                    />
                                    <btn
                                        className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"

                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                            ></path>
                                        </svg>
                                    </btn>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6 ">
                                    <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                                        Mới
                                    </span>
                                    <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                        {productDetail[0]?.ptitle}
                                    </h2>
                                    <div className="flex flex-wrap items-center mb-6">
                                        <ul className="flex mb-4 mr-2 lg:mb-0">
                                            <li>
                                                <btn >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                    </svg>
                                                </btn>
                                            </li>
                                            <li>
                                                <btn >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                    </svg>
                                                </btn>
                                            </li>
                                            <li>
                                                <btn>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                    </svg>
                                                </btn>
                                            </li>
                                            <li>
                                                <btn >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                    </svg>
                                                </btn>
                                            </li>
                                        </ul>
                                        <btn
                                            className="mb-4 text-xs underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"

                                        >
                                            Đánh giá
                                        </btn>
                                    </div>
                                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                        <span>{formatter.format(productDetail[0]?.pprice)}</span>
                                        <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400"></span>
                                    </p>
                                </div>

                                <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                                    <span className="text-base text-gray-600 dark:text-gray-400">
                                        <i class="fa fa-gift"></i> Ưu đãi
                                    </span>
                                    <p className="mt-2 text-sm text-blue-500 text-danger">
                                        I. Ưu đãi thanh toán
                                    </p>
                                    <p>
                                        <i class="fa fa-check-circle text-success"></i> Giảm tới
                                        600.000đ qua cổng thanh toán
                                    </p>
                                    <p>
                                        <i class="fa fa-check-circle text-success"></i> Giảm tới
                                        2.000.000đ khi thanh toán qua thẻ tín dụng
                                    </p>

                                    <p>
                                        <i class="fa fa-check-circle text-success"></i> Gọi đặt mua{" "}
                                        <a href="tel:+1234567890"> (234) 567-890</a> (8:00 - 22:00)
                                    </p>
                                </div>
                                <div className="mb-6 " />
                                <div className="flex flex-wrap items-center mb-6">
                                    <div className="mb-4 mr-4 lg:mb-0">
                                        <div className="w-28">
                                            <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                                <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                                    <span className="m-auto text-2xl font-thin">-</span>
                                                </button>
                                                <input
                                                    type="number"
                                                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                                    placeholder={1}
                                                />
                                                <button onClick={handleAddToCart} className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                                    <span className="m-auto text-2xl font-thin">+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4 lg:mb-0">
                                        <button className="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className=" bi bi-heart"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <btn
                                        onClick={() => {
                                            if (role === "user") {
                                                handleAddToCart();

                                            } else if (role === "admin") {
                                                toast.error('Bạn là admin không thể thực hiện điều này!');
                                            } else {
                                                toast.error('Vui lòng đăng nhập để mua hàng!');
                                            }

                                        }}
                                        disabled={isProcessing}
                                        className="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl"
                                    >
                                        {isProcessing ? "Processing..." : "Thêm vào giỏ hàng"}
                                    </btn>
                                </div>
                                <div className="flex gap-4 mb-6">
                                    <btn

                                        className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
                                    >
                                        Mua ngay
                                    </btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex flex-wrap mb-24 -mx-4">
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <NavLink
                                to="/home"
                                className="flex  fill-current font-semibold text-dark text-sm mt-10"
                            >
                                <svg
                                    className="mb-5 text-dark fill-current mr-2  w-4"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296"
                                        fill="#000000"
                                    />
                                </svg>{" "}
                                Tiếp tục mua hàng
                            </NavLink>
                            <div className="sticky top-0 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10 lg:h-96">
                                    <btn
                                        className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                            ></path>
                                        </svg>
                                    </btn>
                                    <img
                                        className="object-contain w-full lg:h-full"
                                        src={productDetail[0]?.pimg}
                                        alt="1"
                                    />
                                    <btn
                                        className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                            ></path>
                                        </svg>
                                    </btn>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6 ">
                                    <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                                        Mới
                                    </span>
                                    <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                        {productDetail[0]?.ptitle}
                                    </h2>
                                    <div className="flex flex-wrap items-center mb-6">
                                        <ul className="flex mb-4 mr-2 lg:mb-0">
                                            <li>
                                                <btn href="#">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                    </svg>
                                                </btn>
                                            </li>
                                            <li>
                                                <btn href="#">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                    </svg>
                                                </btn>
                                            </li>
                                            <li>
                                                <btn href="#">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                    </svg>
                                                </btn>
                                            </li>
                                            <li>
                                                <btn href="#">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                    </svg>
                                                </btn>
                                            </li>
                                        </ul>
                                        <btn
                                            className="mb-4 text-xs underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                                            href="#"
                                        >
                                            Đánh giá
                                        </btn>
                                    </div>
                                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                        <span>{formatter.format(productDetail[0]?.pprice)}</span>
                                        <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400"></span>
                                    </p>
                                </div>

                                <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                                    <span className="text-base text-gray-600 dark:text-gray-400">
                                        <i class="fa fa-gift"></i> Ưu đãi
                                    </span>
                                    <p className="mt-2 text-sm text-blue-500 text-danger">
                                        I. Ưu đãi thanh toán
                                    </p>
                                    <p>
                                        <i class="fa fa-check-circle text-success"></i> Giảm tới
                                        600.000đ qua cổng thanh toán
                                    </p>
                                    <p>
                                        <i class="fa fa-check-circle text-success"></i> Giảm tới
                                        2.000.000đ khi thanh toán qua thẻ tín dụng
                                    </p>

                                    <p>
                                        <i class="fa fa-check-circle text-success"></i> Gọi đặt mua{" "}
                                        <a href="tel:+1234567890"> (234) 567-890</a> (8:00 - 22:00)
                                    </p>
                                </div>
                                <div className="mb-6 " />
                                <div className="flex flex-wrap items-center mb-6">
                                    <div className="mb-4 mr-4 lg:mb-0">
                                        <div className="w-28">
                                            <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                                <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                                    <span className="m-auto text-2xl font-thin">-</span>
                                                </button>
                                                <input
                                                    type="number"
                                                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                                    placeholder={1}
                                                />
                                                <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                                    <span className="m-auto text-2xl font-thin">+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4 lg:mb-0">
                                        <button className="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className=" bi bi-heart"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <btn
                                        onClick={() => {
                                            let sanPham = {
                                                id: productDetail[0].id,
                                                ptitle: productDetail[0].ptitle,
                                                pprice: productDetail[0].pprice,
                                                pkind: productDetail[0].pkind,
                                                pimg: productDetail[0].pimg,
                                                sl: 1,
                                            };
                                            const action = {

                                                type: SET_THEM_SAN_PHAM,
                                                arrProduct: sanPham,

                                            }
                                            dispatch(action);
                                        }}
                                        href="#"
                                        className="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl"
                                    >
                                        Thêm vào giỏ hàng
                                    </btn>
                                </div>
                                <div className="flex gap-4 mb-6">
                                    <btn
                                        href="#"
                                        className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
                                    >
                                        Mua ngay
                                    </btn>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* Commment */}
                    <div className="w-full bg-white rounded-lg border p-2 my-4 mx-6">
                        <h3 className="font-bold">Bình luận</h3>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex flex-col">{renderComment()}</div>
                            <div className="w-full px-3 my-2">
                                <div className="flex gap-3 items-center mb-2 ml-3">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/22263436?v=4"
                                        className="object-cover w-8 h-8 rounded-full 
    border-2 border-emerald-400  shadow-emerald-400
    "
                                        alt="1"
                                    />
                                    <h3 className="font-bold">{username}</h3>
                                </div>
                                <textarea
                                    className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                                    name="comment"
                                    placeholder="Để lại bình luận của bạn"

                                    onChange={formik.handleChange}
                                    value={formik.values.comment}
                                />
                                {formik.errors.comment && formik.touched.comment && (
                                    <p className="text-danger">{formik.errors.comment}</p>
                                )}
                            </div>
                            <div className="w-full flex justify-end px-3">
                                <input
                                    type="submit"
                                    className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                                    defaultValue="Post Comment"
                                    value="Đăng"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
