
import React from "react"

import './Article.css'
export default function Article() {
    return (
        <div className="main">
            {/* content */}
            <div className="flex items-center justify-center bg-slate-300 h-16">
                <h1 className="header text-4xl text-white">Article</h1>
             </div>
            <div className="main_content1 container mx-auto ">
                {/* ..... */}
                <div className="mx-auto flex relative">
                     <div className="sidebar-item flex flex-col pt-10 px-10 bg-white ">
                        <span className="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-400   text-xl transition duration-300 ease-in-out border-2 border-gray-300"><i class="fa-brands fa-facebook"></i></span>
                        <span className="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-400   text-xl transition duration-300 ease-in-out border-2 border-gray-300"><i class="fa-brands fa-square-instagram"></i></span>
                        <span className="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-400   text-xl transition duration-300 ease-in-out border-2 border-gray-300"><i class="fa-brands fa-twitter"></i></span>
                        <span className="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-400   text-xl transition duration-300 ease-in-out border-2 border-gray-300"><i class="fa-brands fa-linkedin"></i></span>
                        <span className="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-400   text-xl transition duration-300 ease-in-out border-2 border-gray-300"><i class="fa-solid fa-envelope-open-text"></i></span>
                        <span className="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-400   text-xl transition duration-300 ease-in-out border-2 border-gray-300"><i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                    <div className="content mx-10 w-4/5">
                            <div className="header_content flex justify-between pt-4">
                                <div className="article flex items-center justify-center ">
                                    <h3 className="text-3xl font-bold mr-2 ">Tin tức</h3> <span className="text-xl text-slate-400">   &gt; Điện thoại</span>
                                </div>
                                <div className="date  px-4 py-2">
                                    <p className="text-lg text-slate-400">Thứ 4, 1/12/2023, 10:30(GMT+7)</p>
                                </div>
                            </div>
                            <div className="">
                                <h1 className="title text-3xl pt-8 px-2 font-bold underline hover:cursor-pointer hover:text-slate-400">Realme C67 được tiết lộ thời điểm ra mắt, dự kiến khuấy đảo phân khúc giá rẻ....</h1>
                                <p className="text-base px-2 py-2 mb-10">Theo báo cáo của 91Mobiles, công ty đang lên kế hoạch cho ra mắt C67 5G tại Ấn Độ vào đầu tháng sau. Gần đây, thiết bị đã được phát hiện được chứng nhận trên nền tảng TDRA của UAE, điều này cho thấy rằng việc ra mắt sắp diễn ra.</p>
                                <span> <img  className="rounded-xl hover: cursor-pointer my-2" src="https://cdn.tgdd.vn/News/Thumb/1556234/3-1200x675.jpg"></img></span>
                            </div>
                            <div>
                                <p className="text-lg  px-2 py-2">Ngoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.</p>
                                <p className="text-lg  px-2 py-2">Ngoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.</p>
                                <p className="text-lg  px-2 py-2">Ngoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.</p>
                                <p className="text-lg  px-2 py-2">Ngoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.</p>
                                <p className="text-lg  px-2 py-2">Ngoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.</p>
                                <p className="text-lg  px-2 py-2">Ngoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.</p>
                                <p className="text-lg  px-2 py-2">Ngoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.</p>
                                <p className="text-lg  px-2 py-2">Ngoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.</p>
                                <p className="text-lg  px-2 py-2">Ngoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.</p>
                                <p className="text-lg  px-2 py-2">Ngoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.</p>
                                <p className="text-lg  px-2 py-2">Ngoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.</p>
                                
                            </div>
                    </div>
                    <div className="sidebar-qc w-2/5 ">
                        
                        <img className="w-full mt-20" src="https://cdn.tgdd.vn/2023/11/banner/380x215-380x215.png"></img>
                       <div className="header-sidebar ">
                       <p className="font-bold my-4 text-xl">Xem nhiều hơn tại đây!!!!....</p>
                       </div>
                        <div className="sidebar-img flex mb-6 py-4">
                            <img className="w-2/5 rounded-md mx-4" src="https://cdn.tgdd.vn/News/Thumb/0/galaxy-a24-1-1200x675.jpg"></img>
                            <span className="text-base hover:cursor-pointer">Dưới 26 triệu lựa dòng iPhone 14 nào? Xem qua giá 5 chiếc iPhone 14 series bên dưới</span>
                        </div>

                        <div className="sidebar-img flex mb-6 py-4">
                            <img className="w-2/5 rounded-md mx-4" src="https://cdn.tgdd.vn/News/Thumb/0/galaxy-a24-1-1200x675.jpg"></img>
                            <span className="text-base hover:cursor-pointer">Dưới 26 triệu lựa dòng iPhone 14 nào? Xem qua giá 5 chiếc iPhone 14 series bên dưới</span>
                        </div>
                        <div className="sidebar-img flex mb-6 py-4">
                            <img className="w-2/5 rounded-md mx-4" src="https://cdn.tgdd.vn/News/Thumb/0/galaxy-a24-1-1200x675.jpg"></img>
                            <span className="text-base hover:cursor-pointer">Dưới 26 triệu lựa dòng iPhone 14 nào? Xem qua giá 5 chiếc iPhone 14 series bên dưới</span>
                        </div>


                        <div className="header-sidebar ">
                       <p className="font-bold my-4 text-xl">Khuyến mãi Hotttt!!....</p>
                       </div>
                       <span className="rounded-lg"> <img className="w-full mt-12 my-2 rounded-lg" src="https://cdn.tgdd.vn/News/Thumb/1556075/set-1200x675.jpg"></img></span>             
                        <span className="font-bold text-lg">Giảm 1 triệu đồng dành cho người dùng khi mua Galaxy Tab S9 FE, mua nhanh hưởng ưu đãi lớn!</span>
                     
                       <div className="voucher flex flex-col mt-8">
                       <div className="flex ">
                            <div className="w-3/6 mr-4">
                                <img className="rounded-md" src="https://cdn.tgdd.vn/News/Thumb/0/redmi-note-12s-44111-1200x675.jpg"></img>
                                <h3 className="text-base mx-2 my-2 text-slate-600">Thoải mái lưu trữ với loạt điện thoại dung lượng giá chỉ từ 4.49 triệu đồng</h3>
                            </div>
                            <div className="w-3/6 mr-4 ">
                            <img className="rounded-md" src="https://cdn.tgdd.vn/News/Thumb/0/redmi-note-12s-44111-1200x675.jpg"></img>
                                <h3 className="text-base mx-2 my-2 text-slate-600">Thoải mái lưu trữ với loạt điện thoại dung lượng giá chỉ từ 4.49 triệu đồng</h3>
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="w-3/6 mr-4">
                                <img className="rounded-md" src="https://cdn.tgdd.vn/News/Thumb/0/redmi-note-12s-44111-1200x675.jpg"></img>
                                <h3 className="text-base mx-2 my-2 text-slate-600">Thoải mái lưu trữ với loạt điện thoại dung lượng giá chỉ từ 4.49 triệu đồng</h3>
                            </div>
                            <div className="w-3/6 mr-4 ">
                            <img className="rounded-md" src="https://cdn.tgdd.vn/News/Thumb/0/redmi-note-12s-44111-1200x675.jpg"></img>
                                <h3 className="text-base mx-2 my-2 text-slate-600">Thoải mái lưu trữ với loạt điện thoại dung lượng giá chỉ từ 4.49 triệu đồng</h3>
                            </div>
                        </div>
                       </div>
                  
                    </div>
                </div>
                {/* ...... */}


                <div className="end_content">

                    <div className="flex flex-row ml-40 mt-20  divide-y divide-slate-200">
                        <span className="w-2/5 h-64"> <img className="rounded-lg w-96  " src="https://cdn.tgdd.vn/News/Thumb/0/thmb-1200x675.jpg"></img></span>
                        <div className="w-3/5 px-10 py-2 flex flex-col">
                            <span className=" text-slate-400 text-3xl hover:cursor-pointer hover:text-blue-600"><a>Meizu 21 ra mắt: Snapdragon 8 Gen 3, camera 200MP mà giá chỉ từ 11 triệu! </a></span>
                            <span className="text-sm py-2 ">10 bài viết</span>
                            <span className="text-sm"> Lê Phan Quốc Vũ <span className="text-sm text-slate-400 mx-2">15 phút trước</span></span>
                        </div>
                    </div>  

                    <div className="flex flex-row ml-40  divide-y divide-slate-200">
                        <span className="w-2/5 h-64"> <img className="rounded-lg w-96" src="https://cdn.tgdd.vn/News/Thumb/1556140/Vivo-V29-15-1-1200x675.jpg"></img></span>
                        <div className="w-3/5 px-10 py-2 flex flex-col">
                            <span className="  text-3xl hover:cursor-pointer hover:text-blue-600"><a>Meizu 21 ra mắt: Snapdragon 8 Gen 3, camera 200MP mà giá chỉ từ 11 triệu! </a></span>
                            <span className="text-sm py-2 ">10 bài viết</span>
                            <span className=" text-sm"> Lê Phan Quốc Vũ <span className="text-sm text-slate-400 mx-2">15 phút trước</span></span>
                        </div>
                    </div>  

                    <div className="flex flex-row ml-40  divide-y divide-slate-200">
                        <span className="w-1/5 h-64"> <img className="rounded-lg  w-96 " src="https://cdn.tgdd.vn/News/Thumb/1556265/image--54--2-1200x675.jpg"></img></span>
                        <div className="w-3/5 px-10 py-2 flex flex-col">
                            <span className=" text-3xl hover:cursor-pointer hover:text-blue-600"><a>Meizu 21 ra mắt: Snapdragon 8 Gen 3, camera 200MP mà giá chỉ từ 11 triệu! </a></span>
                            <span className="text-sm py-2 ">10 bài viết</span>
                            <span className=" text-sm"> Lê Phan Quốc Vũ <span className="text-sm text-slate-400 mx-2">15 phút trước</span></span>
                        </div>
                    </div>  

                </div>
         
           
            </div>  
          
        </div>
    );
}