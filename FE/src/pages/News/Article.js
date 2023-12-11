
import React from "react"

export default function Article() {
    return(
     
       <div className ="main" >
            <div className="container mx-auto mt-12">
                {/* header */}
                <div className="header">
            
                </div>
                {/* content */}
                <div className="header_content text-center">
                         <h1 className="text-center font-bold text-3xl text-gray-600 py-3">Là Thương Hiệu Hàng Đầu 20 Năm Tuổi Tại Việt Nam</h1>
                         <p>Để đạt được mục tiêu này, Chúng tôi đã thực các chương trình hành động cân bằng, toàn diện ở cả ba khía cạnh</p>
                </div>

                <div className="header-icone flex justify-center mt-10 mx-auto">
                <span className="text-center mx-4 ">
                    <img className="text-center mx-auto" src="https://fpt.com/-/media/project/fpt-corporation/fpt/about-us/strategic-vision/future-quote/kinh-doanh-icon.svg?la=vi-vn&hash=31815F25997F408C1EB8271D08977C76"></img>
                    <h3 className="font-bold text-3xl mt-10">Kinh doanh</h3>
                </span>
                <span className="text-center mx-4 ">
                    <img className="text-center mx-auto" src="https://fpt.com/-/media/project/fpt-corporation/fpt/about-us/strategic-vision/future-quote/con-nguoi-icon.svg?la=vi-vn&hash=325638E8CB2BA73EC6DE82241BF16978"></img>
                    <h3 className="font-bold text-3xl mt-10">Con người</h3>
                </span>
                <span className="text-center mx-4 ">
                    <img className="text-center mx-auto" src="https://fpt.com/-/media/project/fpt-corporation/fpt/about-us/strategic-vision/future-quote/cong-nghe-icon.svg?la=vi-vn&hash=1302558D11D6B410350BA8997CFC24EC"></img>
                    <h3 className="font-bold text-3xl mt-10">Công nghệ</h3>
                </span>
                
                </div>

                <div className="main_content mt-20 " >

                    <div className="bussiness flex  flex-col sm:flex-row  bg-gray-200 py-10 mx-5">

                        <div className="img_bussiness w-full sm:w-3/6 m-10 ">
                            <img src="https://fpt.com/-/media/project/fpt-corporation/fpt/about-us/strategic-vision/kinh-doanh/12-dinh-huong-kinh-doanh.png"></img>
                        </div>

                        <div className="desc m-10 w-full sm:w-3/6 ">
                            <div className="desc_header flex">
                                <h1 className="font-bold text-3xl py-5">Kinh doanh</h1>
                            </div>

                            <div className="desc_1 flex mb-10 ">
                                <span>
                                <i className="fa-solid fa-check p-3 bg-slate-600 text-white rounded-full mr-5"></i>
                                </span>
                                <p className="pr-20 text-justify text-lg text-lg leading-normal"> 
                                Với khách hàng là các doanh nghiệp lớn, Tập đoàn tập trung mở rộng/thúc đẩy cung cấp dịch vụ, giải pháp chuyển đổi số toàn diện từ khâu tư vấn đến triển khai. Trong đó, tập trung vào cung cấp các nền tảng, giải pháp công nghệ mới như RPA, Lowcode, AI, Blockchain… và các dịch vụ chuyển đổi, quản trị vận hành hạ tầng CNTT điện toán đám mây.
                                </p>
                            </div>

                            <div className="desc_2 flex mb-10">
                                <span>
                                <i className="fa-solid fa-check p-3 bg-slate-600 text-white rounded-full mr-5"></i>
                                </span>
                                <p className="pr-20 text-justify text-lg text-lg leading-normal"> 
                                Với khách hàng là các doanh nghiệp lớn, Tập đoàn tập trung mở rộng/thúc đẩy cung cấp dịch vụ, giải pháp chuyển đổi số toàn diện từ khâu tư vấn đến triển khai. Trong đó, tập trung vào cung cấp các nền tảng, giải pháp công nghệ mới như RPA, Lowcode, AI, Blockchain… và các dịch vụ chuyển đổi, quản trị vận hành hạ tầng CNTT điện toán đám mây.
                                </p>

                            </div>
                            
                            <div className="desc_3 md:block hidden flex ">
                                <span>
                                <i className="fa-solid fa-check p-3 bg-slate-600 text-white rounded-full mr-5"></i>
                                </span>
                                <p className="pr-20 text-justify text-lg text-lg leading-normal">
                                Với khách hàng cá nhân, FPT mong muốn đem đến những trải nghiệm dịch vụ tốt nhất dựa trên các giải pháp và nền tảng quản trị mới.
                                </p>
                            </div>       
                        </div>
                    
                    </div>


                    <div className="teachnology flex flex-col md:flex-row py-10 ">

                    <div className="desc m-10 w-full sm:w-3/6 md ">
                        <div className="desc_header flex">
                            <h1 className="font-bold text-3xl py-5">Công nghệ</h1>
                        </div>
                        <div className="desc_1 flex mb-10 ">
                            <span>
                            <i class="fa-solid fa-microchip p-3 bg-slate-600 text-white rounded-full mr-5"></i>
                            </span>
                            <p className="pr-20 text-justify text-lg text-lg leading-normal"> 
                            FPT sẽ tập trung phát triển công nghệ theo hai hướng là phát triển các nền tảng, công nghệ lõi và gia tăng trải nghiệm khách hàng, hiệu quả vận hành dựa trên công nghệ.
                            </p>
                        </div>
                        
                        <div className="desc_2 flex ">
                            <span>
                            <i class="fa-solid fa-microchip p-3 bg-slate-600 text-white rounded-full mr-5"></i>
                            </span>
                            <p className="pr-20 text-justify text-lg text-lg leading-normal">
                            Trong đó, Tập đoàn sẽ tiếp tục đẩy mạnh nghiên cứu, phát triển chuyên sâu các giải pháp dựa trên công nghệ Blockchain,  Lowcode, AI, Cloud cùng với các Nền tảng dữ liệu (Người dùng/Khách hàng/Dữ liệu nội bộ) đem lại các giải pháp kinh doanh  hiệu quả, đáng tin cậy cho các tổ chức/tập đoàn lớn, doanh nghiệp vừa và nhỏ và những trải nghiệm đột phá cho khách hàng cá nhân.
                            </p>
                        </div>       
                    </div>
                    <div className="img_bussiness m-10 w-full sm:w-3/6 ">
                        <img src="https://fpt.com/-/media/project/fpt-corporation/fpt/common/images/image-1_dinh-huong-phat-trien-cong-nghe.png"></img>
                    </div>

                    </div>


                    <div className="human flex bg-gray-200 flex flex-col md:flex-row py-10 mb-10">  

                    <div className="img_bussiness m-10 flex w-full sm:w-3/6">
                        <img src="https://fpt.com/-/media/project/fpt-corporation/fpt/about-us/strategic-vision/con-nguoi/image-6_dinh-huong-phat-trien-con-nguoi.png"></img>
                    </div>
                    
                    <div className="desc m-10 flex flex-col w-full sm:w-3/6">
                        <div className="desc_header flex">
                            <h1 className="font-bold text-3xl py-5 mt-10">Con người</h1>
                        </div>
                        <div className="desc_1 flex mb-10 ">
                            <span>
                            <i class="fa-solid fa-fingerprint  p-3 bg-slate-600 text-white rounded-full mr-5"></i>
                    
                            </span>
                            <p className="pr-20 text-justify text-lg text-lg leading-normal"> 
                            Với khách hàng là các doanh nghiệp lớn, Tập đoàn tập trung mở rộng/thúc đẩy cung cấp dịch vụ, giải pháp chuyển đổi số toàn diện từ khâu tư vấn đến triển khai. Trong đó, tập trung vào cung cấp các nền tảng, giải pháp công nghệ mới như RPA, Lowcode, AI, Blockchain… và các dịch vụ chuyển đổi, quản trị vận hành hạ tầng CNTT điện toán đám mây.
                            </p>
                        </div>
                        <div className="desc_2 flex mb-10">
                            <span>
                            <i class="fa-solid fa-fingerprint  p-3 bg-slate-600 text-white rounded-full mr-5"></i>
                    
                            </span>
                            <p className="pr-20 text-justify text-lg text-lg leading-normal"> 
                            Với khách hàng là các doanh nghiệp lớn, Tập đoàn tập trung mở rộng/thúc đẩy cung cấp dịch vụ, giải pháp chuyển đổi số toàn diện từ khâu tư vấn đến triển khai. Trong đó, tập trung vào cung cấp các nền tảng, giải pháp công nghệ mới như RPA, Lowcode, AI, Blockchain… và các dịch vụ chuyển đổi, quản trị vận hành hạ tầng CNTT điện toán đám mây.
                            </p>

                        </div>
                        <div className="desc_3 flex ">
                            <span>
                            <i class="fa-solid fa-fingerprint  p-3 bg-slate-600 text-white rounded-full mr-5"></i>
                    
                            </span>
                            <p className="pr-20 text-justify text-lg text-lg leading-normal">
                            Với khách hàng cá nhân, FPT mong muốn đem đến những trải nghiệm dịch vụ tốt nhất dựa trên các giải pháp và nền tảng quản trị mới.
                            </p>
                        </div>       
                    </div>
                    
                    </div>
                </div>

                {/* footer */}
                <div></div>
            </div>
       </div>
    );
}