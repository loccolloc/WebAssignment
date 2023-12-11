import React from "react"
import CartItem from "./Cart"

export default function Cart() {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="lg: w-3/4  bg-white px-10 py-10">
                        <div className=" text-center align-center border-b pb-8">
                            <h1 className="font-semibold text-5xl text-center text-slate-600">Giỏ hàng của bạn</h1>
                        </div>  
                        <div className="flex mt-10 mb-5"> 
                            <h3 className="font-semibold text-gray-600 text-3xl uppercase w-4/5">Sản phẩm</h3>
                            <h3 className="font-semibold  text-gray-600 text-md uppercase w-2/5 text-center">Số lượng</h3>
                            <h3 className="font-semibold  text-gray-600 text-md uppercase w-2/5 text-center">GIá ưu đãi</h3>
                            <h3 className="font-semibold  text-gray-600 text-md uppercase w-1/5 text-center">Thực tế</h3>
                            <h3 className="font-semibold  text-gray-600 text-md uppercase w-1/5 text-center">Thao tác</h3>
                        </div>
                    
                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5  mt-10">
                            <div className="flex w-4/5"> {/* product */}
                                <div className="w-2/6">
                                    <a href="#" className="flex h-full w-full items-center hover:underline hover:text-blue-500 hover:cursor-pointer bg-gray-200">
                                        <div className="w-full object-contain h-full bg-cover bg-center " style={{ backgroundImage: 'url("https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z")' }}></div>
                                    </a>    
                                </div>

                                <div className="flex flex-col justify-between ml-4 flex-grow w-3/6">   
                                  <a className="font-semibold  text-gray-600 text-lg  hover:underline hover:text-blue-500 hover:cursor-pointer">Google Pixel 7a - Unlocked Android Cell Phone - Smartphone</a>
                                  <img className="h-full object-contain w-full rounded-md shadow-md" src="https://down-vn.img.susercontent.com/file/vn-50009109-7c3176b6b2d0d66d02941a1faf3de197" alt ="#" />                 
                                    <li className="leading-5 mt-3 font-sm">Nhập mã MMSALE100 giảm ngay 1% tối đa 100.000đ khi thanh toán qua <a className="font-bold hover:cursor-pointer hover:text-blue-500 ">MOMO</a> </li>                               
                                    <div className="detail flex flex-col">
                                        <div className="flex mt-2">
                                        <label className="font-bold  font-sm text-gray-600 w-3/6  " for="color">Màu:</label>
                                            <select className="hover:cursor-pointer rounded-sm text-gray-600  w-3/6" name="color" id="color" form="carform">
                                            <option value="white">Trắng</option>
                                            <option value="black">Đen</option>
                                            <option value="xam">Xám</option>
                                            <option className= "hover:cursor-pointer" value="invalid">Khác</option>
                                            </select>
                                        </div>
                                        <div className="flex mt-2" >
                                            <p className="font-bold  font-sm text-gray-600 w-3/6 ">Số lượng: </p>
                                            <span>1 sản phẩm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                <CartItem />
                        
                            <div className="flex justify-center w-2/5">
                            <span className="line-through text-center text-gray-500 font-semibold text-sm">₫100.000</span>
                            <span className="text-red-500">₫69.000</span>
                              </div>
              
                              <div className="flex justify-center w-1/5">
                            <span className="text-center text-gray-500 font-semibold text-lg text-red-500">₫69.000</span>
                              </div>
                              <div className="flex justify-center  w-1/5">
                              <button className="px-5 py-2  text-center rounded-md bg-orange-700 text-white text-lg  hover:bg-sky-700">Xóa</button>
                              </div>
                        </div>
                      
 
                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5  mt-10">
                            <div className="flex w-4/5"> {/* product */}
                                <div className="w-2/6">
                                    <a href="#" className="flex h-full w-full items-center hover:underline hover:text-blue-500 hover:cursor-pointer bg-gray-200">
                                        <div className="w-full object-contain h-full bg-cover bg-center " style={{ backgroundImage: 'url("https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z")' }}></div>
                                    </a>    
                                </div>

                                <div className="flex flex-col justify-between ml-4 flex-grow w-3/6">   
                                  <a className="font-semibold  text-gray-600 text-lg  hover:underline hover:text-blue-500 hover:cursor-pointer">Google Pixel 7a - Unlocked Android Cell Phone - Smartphone</a>
                                  <img className="h-full object-contain w-full rounded-md shadow-md" src="https://down-vn.img.susercontent.com/file/vn-50009109-7c3176b6b2d0d66d02941a1faf3de197" alt ="#" />                 
                                    <li className="leading-5 mt-3 font-sm">Nhập mã MMSALE100 giảm ngay 1% tối đa 100.000đ khi thanh toán qua <a className="font-bold hover:cursor-pointer hover:text-blue-500 ">MOMO</a> </li>                               
                                    <div className="detail flex flex-col">
                                        <div className="flex mt-2">
                                        <label className="font-bold  font-sm text-gray-600 w-3/6  " for="color">Màu:</label>
                                            <select className="hover:cursor-pointer rounded-sm text-gray-600  w-3/6" name="color" id="color" form="carform">
                                            <option value="white">Trắng</option>
                                            <option value="black">Đen</option>
                                            <option value="xam">Xám</option>
                                            <option className= "hover:cursor-pointer" value="invalid">Khác</option>
                                            </select>
                                        </div>
                                        <div className="flex mt-2" >
                                            <p className="font-bold  font-sm text-gray-600 w-3/6 ">Số lượng: </p>
                                            <span>1 sản phẩm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                <CartItem />
                        
                            <div className="flex justify-center w-2/5">
                            <span className="line-through text-center text-gray-500 font-semibold text-sm">₫100.000</span>
                            <span className="text-red-500">₫69.000</span>
                              </div>
              
                              <div className="flex justify-center w-1/5">
                            <span className="text-center text-gray-500 font-semibold text-lg text-red-500">₫69.000</span>
                              </div>
                              <div className="flex justify-center  w-1/5">
                              <button className="px-5 py-2  text-center rounded-md bg-orange-700 text-white text-lg  hover:bg-sky-700">Xóa</button>
                              </div>
                        </div>
                         
                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5  mt-10">
                            <div className="flex w-4/5"> {/* product */}
                                <div className="w-2/6">
                                    <a href="#" className="flex h-full w-full items-center hover:underline hover:text-blue-500 hover:cursor-pointer bg-gray-200">
                                        <div className="w-full object-contain h-full bg-cover bg-center " style={{ backgroundImage: 'url("https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z")' }}></div>
                                    </a>    
                                </div>

                                <div className="flex flex-col justify-between ml-4 flex-grow w-3/6">   
                                  <a className="font-semibold  text-gray-600 text-lg  hover:underline hover:text-blue-500 hover:cursor-pointer">Google Pixel 7a - Unlocked Android Cell Phone - Smartphone</a>
                                  <img className="h-full object-contain w-full rounded-md shadow-md" src="https://down-vn.img.susercontent.com/file/vn-50009109-7c3176b6b2d0d66d02941a1faf3de197" alt ="#" />                 
                                    <li className="leading-5 mt-3 font-sm">Nhập mã MMSALE100 giảm ngay 1% tối đa 100.000đ khi thanh toán qua <a className="font-bold hover:cursor-pointer hover:text-blue-500 ">MOMO</a> </li>                               
                                    <div className="detail flex flex-col">
                                        <div className="flex mt-2">
                                        <label className="font-bold  font-sm text-gray-600 w-3/6  " for="color">Màu:</label>
                                            <select className="hover:cursor-pointer rounded-sm text-gray-600  w-3/6" name="color" id="color" form="carform">
                                            <option value="white">Trắng</option>
                                            <option value="black">Đen</option>
                                            <option value="xam">Xám</option>
                                            <option className= "hover:cursor-pointer" value="invalid">Khác</option>
                                            </select>
                                        </div>
                                        <div className="flex mt-2" >
                                            <p className="font-bold  font-sm text-gray-600 w-3/6 ">Số lượng: </p>
                                            <span>1 sản phẩm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                <CartItem />
                        
                            <div className="flex justify-center w-2/5">
                            <span className="line-through text-center text-gray-500 font-semibold text-sm">₫100.000</span>
                            <span className="text-red-500">₫69.000</span>
                              </div>
              
                              <div className="flex justify-center w-1/5">
                            <span className="text-center text-gray-500 font-semibold text-lg text-red-500">₫69.000</span>
                              </div>
                              <div className="flex justify-center  w-1/5">
                              <button className="px-5 py-2  text-center rounded-md bg-orange-700 text-white text-lg  hover:bg-sky-700">Xóa</button>
                              </div>
                        </div>
                      

                      

                        <div className="flex justify-end items-center h-20">
                            <h3  className ="font-bold text-3xl  text-gray-500 ">Tạm tính </h3> <span className="text-gray-500 text-xl">(3 sản phẩm)</span>
                        </div>


                    </div>
                    <div id="summary" className="lg: w-1/4  px-8 py-10">
                        <h1 className="font-semibold text-3xl border-b pb-8 text-stone-600 ">Tổng đơn hàng</h1>
                    
                        <div className="flex justify-between mt-10 mb-5">
                            <div className="flex">
                                <span className="font-semibold text-md uppercase">Số lượng</span>
                                <span className="font-semibold">(3 sản phẩm)</span>
                            </div>
                        
                            <span className="font-semibold text-md">$590</span>
                        </div>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-md uppercase">Thuế(2%)</span>
                            <span className="font-semibold text-md">$2</span>
                        </div>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Tổng tiền</span>
                                <span>$600</span>
                            </div>

                            <div className="verify mt-2 mb-6">
                                <input type="checkbox" required></input>
                                <span> Tôi đồng ý mọi điều khoản của Shop</span>
                            </div>
                            <button className="rounded bg-black font-semibold py-3 text-sm text-white uppercase w-full transition hover:bg-black hover:bg-opacity-80">Xác nhận và thanh toán  </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

