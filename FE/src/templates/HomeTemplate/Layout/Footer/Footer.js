import { AppleOutlined, FacebookOutlined } from '@ant-design/icons'
import { layThongTinChiTietDiaChi } from "../../../../redux/actions/QuanLyDiaChiAction";
import React, { useEffect } from 'react'
import logo from '../../../../assets/apple_resized_aspect_fixed.png'
import { useSelector, useDispatch } from "react-redux";
export default function Footer(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        //Lấy thông tin param từ url


        dispatch(layThongTinChiTietDiaChi(1));

    }, []);


    const productDetail = useSelector(
        (state) => state.QuanLyDiaChiReducer.productDetail
    );



    return (
        <footer className="py-6 bg-coolGray-100 text-coolGray-900 bg-gray-800">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <btn href="#" className="flex justify-center space-x-3 md:justify-start text-black">
                            <img src={logo} alt="cyberlearn.vn" />
                        </btn>
                    </div>

                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium text-white">Thông tin liên hệ</p>
                        <p className='text-white'>
                            Địa chỉ: {productDetail[0]?.address}</p>
                        <p className='text-white'>Gọi số: <a href={`tel:${productDetail[0]?.phone}`}>{productDetail[0]?.phone}</a></p>
                        <div className="grid grid-cols-3" style={{ color: '#fff' }}>
                            <div >
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3 text-white">
                        <p className="pb-1 text-lg font-medium">Kết nối với chúng tôi</p>
                        <div className="flex text-white">
                            <div className="mr-5">
                                <AppleOutlined className="text-2xl" />
                            </div>
                            <div>
                                <FacebookOutlined className="text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-6 lg:justify-between text-white" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div>©2023 All rights reserved</div>
                </div>
            </div>
        </footer>

    )
}