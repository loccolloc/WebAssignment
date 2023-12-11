import {React, useState} from 'react'
import { NavLink } from 'react-router-dom'
import {Button} from '@material-tailwind/react'
import './Cart.css'
export default function Cart() {
    const [state, SetQuantity] = useState({ quantity: 1});
    const handleIncrement = () => {
        SetQuantity((prevState) => ({
        ...prevState,
        quantity: prevState.quantity + 1,
        }));
    };

    const handleChangeQuantity = (e) => {
        let newQuantity = parseInt(e.target.value);
        if (isNaN(newQuantity)) newQuantity = 0;
        SetQuantity({ quantity: newQuantity});
    };

    const handleDecrement = () => {
        if (state.quantity > 0) {
        SetQuantity((prevState) => ({
            ...prevState,
            quantity: prevState.quantity - 1,
        }));
        }
    };
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto mt-10">
                <div className="flex flex-wrap shadow-md my-10">
                    <div className="w-full md:w-3/4 bg-white px-10 py-10">
                        <NavLink to="/home" className="flex  fill-current font-semibold text-dark text-sm mt-10">
                            <svg className="text-dark fill-current mr-2  w-4" viewBox="0 0 448 512">
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296" fill="#000000" />
                            </svg>                            Tiếp tục mua hàng
                        </NavLink>
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Giỏ hàng</h1>
                            <h2 className="font-semibold text-2xl">3 Items</h2>
                        </div>
                        <div className="mt-10 mb-5 hidden md:flex">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Chi tiết sản phẩm</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Số lượng</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Giá</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Tổng</h3>
                        </div>
                        <div className="flex flex-wrap items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex md:w-2/5 w-2/4"> {/* product */}
                                <div className="w-20">
                                    <img className="h-24 object-contain" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt />
                                </div>
                                <div className="flex flex-wrap flex-col justify-between ml-4 flex-grow w-2/4 truncate-2-lines line-clamp-2">
                                    <span class="font-bold ">Iphone 6sssssssssssssssssss</span>                                    
                                    <span className="text-red-500 text-xs">Apple</span>
                                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                </div>
                            </div>
                            <div className="flex justify-center md:w-1/5 w-2/4">
                                <button onClick={(e)=>handleDecrement(e)}>
                                    <svg className="fill-current text-gray-600 w-3 -1" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                </button>
                                <input
                                    type="number"
                                    className="bg-gray-50 border border-gray-300 w-16 text-center text-gray-700 font-semibold outline-none focus:border-indigo-500 h-100 p-1.5"
                                    value={state.quantity}
                                    onChange={(e) => handleChangeQuantity(e)}
                                />
                                <button onClick={(e)=>handleIncrement(e)}>
                                    <svg className="fill-current text-gray-600 w-3 -1" viewBox="0 0 448 512">
                                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                </button>
                            </div>
                            
                            <label className='inline-block m-0 md:hidden'>Đơn giá</label>
                            <span className="text-center w-4/5 md:w-1/5 font-semibold text-sm">$400.00</span>
                            <label className='inline-block m-0 md:hidden'>Tổng</label>
                            <span className="text-center w-4/5 md:w-1/5 font-semibold text-sm">$400.00</span>
                        </div>
                    </div>
                    <div id="summary" className="w-full md:w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Tổng đơn hàng</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items 3</span>
                            <span className="font-semibold text-sm">590$</span>
                        </div>
                        
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Tổng tiền</span>
                                <span>$600</span>
                            </div>
                            <Button className="rounded bg-black font-semibold py-3 text-sm text-white uppercase w-full transition hover:bg-black hover:bg-opacity-80">Thanh toán</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
