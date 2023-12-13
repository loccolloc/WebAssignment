import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../../../assets/apple_resized_aspect_fixed.png"
import { history } from '../../../../App';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'
const { Option } = Select;

export default function Header(props) {
    var role = localStorage.getItem('role');
    const { arrProduct } = useSelector(state => state.GioHangReducer);

    const renderSoLuong = () => {

        return arrProduct.reduce((tongSoLuong, spGH, index) => {
            return tongSoLuong += spGH.sl;

        }, 0)


    }
    const [auth, setAuth] = useState('');
    useEffect(() => {
        var username = localStorage.getItem('username');



        setAuth(username);


    }, [])

    const handleLogout = () => {

        localStorage.clear();
        window.location.reload();



    }
    function LogoutButton() {
        var role = localStorage.getItem('role');
        if (auth) {
            return (
                <div>
                    <span>{role}</span>
                    <button onClick={handleLogout} className="self-center px-8 py-3 font-semibold  text-coolGray-50"><i class="fa fa-sign-out" aria-hidden="true"></i>
                    </button></div>

            );
        }

    }



    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);

    const handleChange = (value) => {
        i18n.changeLanguage(value);
        setCurrentLanguage(value);
    }
    return (
        <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-40 bg-black text-white fixed w-full z-10" >
            <div className="container flex justify-between h-16 mx-auto">
                <btn href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src={logo} alt="phone_store" />
                </btn>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent  text-white" activeClassName="border-b-2 border-white">{t('home')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/about" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="border-b-2 border-white">{t('about')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="border-b-2 border-white">{t('contact')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="border-b-2 border-white">{t('news')}</NavLink>
                    </li>
                    {role === 'user' && (
                        <li className="flex">
                            <NavLink to="/userProfile" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="border-b-2 border-white">{t('profile')}</NavLink>
                        </li>
                    )}
                    {role === 'admin' && (
                        <li className="flex">
                            <NavLink to="/admin" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="border-b-2 border-white">{t('management')}</NavLink>
                        </li>
                    )}


                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {!role && (
                        <>
                            <button onClick={() => { history.push('/login'); }}
                                className="self-center px-8 py-3 rounded">
                                {t('signin')}
                            </button>
                            <button onClick={() => { history.push('/register'); }}
                                className="self-center px-8 py-3 rounded">
                                {t('signup')}
                            </button>
                        </>
                    )}

                    <Select defaultValue={currentLanguage} className='' style={{ width: 38 }} onChange={handleChange}>
                        <Option value="vi">Vi</Option>
                        <Option value="en">Eng</Option>
                        <Option value="chi">Chi</Option>


                    </Select>

                    <button
                        onClick={
                            () => {
                                if (role === "user") {
                                    history.push('/cart');
                                } else if (role === "admin") {
                                    toast.error('Bạn không có quyền vào đây!');

                                } else {
                                    toast.error('Vui lòng đăng nhập để mua hàng!');
                                }

                            }}
                        className="self-center px-8 py-3 font-semibold  text-coolGray-50">

                        <i className="fa fa-cart-plus"></i> ({renderSoLuong()})</button>

                    {LogoutButton()}

                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>



        </header>

    )
}