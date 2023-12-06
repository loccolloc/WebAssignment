import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../../../assets/apple_resized_aspect_fixed.png"
import { history } from '../../../../App';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import './Header.css';
const { Option } = Select;


export default function Header(props) {
    const [auth, setAuth] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        var username = localStorage.getItem('username');

        setAuth(username);

    }, [])

    const handleLogout = () => {

        localStorage.clear();
        window.location.reload();



    }
    function LogoutButton() {
        if (auth) {
            return (
                <button onClick={handleLogout} className="self-center px-8 py-3 font-semibold  text-coolGray-50"><i class="fa fa-sign-out" aria-hidden="true"></i>
                </button>
            );
        }

    }

    function handleToggle(e) {
      setShowMenu(!showMenu)
    }


    const { t, i18n } = useTranslation();


    const handleChange = (value) => {
        i18n.changeLanguage(value)
    }
    return (
        <header id="header-container"  className="md:p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-40 bg-black text-white fixed w-full z-50 h-fit flex items-center top-0" >
            <div  className="container flex justify-between h-16 mx-auto">
                <a item="menu-icon" className='flex items-center md:hidden' onClick={(e)=>handleToggle(e)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </a>
                <NavLink to='/home' className="flex">
                  <a href="#" aria-label="Back to homepage" className="flex items-center p-2">
                      <img src={logo} alt="cyberlearn.vn" />
                  </a>
                </NavLink>
                {showMenu &&
                (
                      <>
                        <ul id='nav-list' className=" bg-coolGray-100 text-coolGray-800 bg-opacity-40	items-stretch md:hidden m-0 ">                         
                            <li className="flex" onClick={handleToggle}>
                              <NavLink to="/home" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="md:border-b-2 md:border-white">{t('home')} </NavLink>
                            </li>
                            <li className="flex" onClick={handleToggle}>
                                <NavLink to="/about" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="md:border-b-2 md:border-white">{t('about')} </NavLink>
                            </li>
                            <li className="flex" onClick={handleToggle}>
                                <NavLink to="/contact" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="md:border-b-2 md:border-white">{t('contact')} </NavLink>
                            </li>
                            <li className="flex" onClick={handleToggle}>
                                <NavLink to="/news" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="md:border-b-2 md:border-white">{t('news')} </NavLink>
                            </li>
                            <li className="flex">
                            <Select defaultValue="vi" className='mx-4' style={{ width: 70 }} onChange={handleChange}>
                                <Option value="vi">Vi</Option>
                                <Option value="en">Eng</Option>
                                <Option value="chi">Chi</Option>
                            </Select>
                          </li>
                        </ul>
                      </>)
                }
                <ul className="items-stretch  m-0 hidden lg:flex">
                    <li className="flex">
                        <NavLink to="/home" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="md:border-b-2 md:border-white">{t('home')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/about" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="md:border-b-2 md:border-white">{t('about')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="md:border-b-2 md:border-white">{t('contact')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName="md:border-b-2 md:border-white">{t('news')}</NavLink>
                    </li>
                </ul>
                <div className="flex items-center flex-shrink-0 lg:flex">
                    <button onClick={
                        () => {
                            history.push('/login');
                        }} className="self-center px-8 py-3 rounded hidden md:block">{t('signin')}</button>
                    <button
                        onClick={
                            () => {
                                history.push('/register');
                            }}
                        className="self-center px-8 py-3 rounded  hidden md:block">{t('signup')}</button>
                    <div className='hidden md:block'>
                      <Select defaultValue="vi" className='' style={{ width: 70 }} onChange={handleChange}>
                          <Option value="vi">Vi</Option>
                          <Option value="en">Eng</Option>
                          <Option value="chi">Chi</Option>
                      </Select>
                    </div>

                    <button
                        onClick={
                            () => {
                                history.push('/cart');
                            }}
                        className="self-center p-0 md:ms-4 font-semibold  text-coolGray-50">

                        <i className="fa fa-cart-plus"></i> (1)</button>

                    {LogoutButton()}

                </div>
                <button className="p-4 hidden lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>



        </header>

    )
}