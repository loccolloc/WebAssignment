import React from 'react'
import { NavLink } from 'react-router-dom'

export default function News() {
    return (
        <div className='bg-white/10 backdrop-blur-md shadow-lg rounded-lg border border-gray-200'>
            <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100 pt-1">

                <div className="space-y-2 text-center">
                    <h2 style={{ fontSize: '50px', marginTop: '50px' }} className="text-3xl font-bold dark:dark:text-gray-400">Tin tức</h2>
                    <p className="font-serif text-sm dark:text-gray-400"></p>
                </div>

                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <NavLink to='/article'>
                        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:dark:bg-gray-900">
                            <img src="https://source.unsplash.com/random/480x360" alt className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:dark:bg-gray-500" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline dark:dark:text-gray-400">Khám Phá iPhone 14: Đột Phá Công Nghệ và Thiết Kế Mới</h3>
                                <span className="text-xs dark:dark:text-gray-600"> 1 Tháng 10, 2023</span>
                                <p className="dark:dark:text-gray-400">Chào mừng bạn đến với bản tin mới nhất của Phone Store, nơi chúng tôi chia sẻ thông tin độc quyền về những đột phá công nghệ từ Apple. Hãy cùng chúng tôi khám phá iPhone 14 - thiết bị mà Apple tuyên bố là bước tiến lớn nhất trong lịch sử iPhone. Từ hệ thống camera tiên tiến cho đến vi xử lý mạnh mẽ, iPhone 14 không chỉ là một chiếc điện thoại thông minh, nó là một trung tâm giải trí di động.</p>
                            </div>
                        </a>
                    </NavLink>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <NavLink to='/article'>
                            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900 hidden sm:block">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline dark:dark:text-gray-400">Apple Tăng Cường Bảo Mật: Cập Nhật iOS Mới Nhất

                                    </h3>
                                    <span className="text-xs dark:dark:text-gray-600">15 Tháng 10, 2023

                                    </span>
                                    <p className="dark:dark:text-gray-400">Trong bản cập nhật iOS mới nhất, Apple đã giới thiệu các tính năng bảo mật và quyền riêng tư mạnh mẽ hơn. Bản cập nhật này đánh dấu một bước tiến quan trọng trong việc bảo vệ thông tin cá nhân của người dùng iPhone. Phone Store sẽ hướng dẫn bạn cách tận dụng những cải tiến này để đảm bảo an toàn cho dữ liệu của bạn.</p>
                                </div>
                            </a>
                        </NavLink>
                        <NavLink to='/article'>  
                            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900 hidden sm:block">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline dark:dark:text-gray-400">Sự Kiện Ra Mắt: Hãy Chờ Đón Những Mẫu iPhone Mới Nhất!</h3>
                                    <span className="text-xs dark:dark:text-gray-600">22 Tháng 10, 2023</span>
                                    <p className="dark:dark:text-gray-400">Phone Store mời bạn tham dự sự kiện ra mắt trực tuyến của chúng tôi, nơi chúng tôi sẽ giới thiệu các mẫu iPhone mới nhất từ Apple. Đăng ký ngay hôm nay để có cơ hội nhận được các ưu đãi đặc biệt và quà tặng khi bạn đặt hàng trước.</p>
                                </div>
                            </a>
                        </NavLink>
                        <NavLink to='/article'>  
                            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900 hidden sm:block">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline  dark:dark:text-gray-400">Đánh Giá và So Sánh: iPhone 14 Pro Max vs. iPhone 13 Pro Max</h3>
                                    <span className="text-xs dark:dark:text-gray-600">29 Tháng 10, 2023</span>
                                    <p className="dark:dark:text-gray-400">Bạn đang phân vân giữa việc nâng cấp lên iPhone 14 Pro Max hay giữ lại iPhone 13 Pro Max? Đừng lo, Phone Store đã so sánh chi tiết giữa hai mẫu điện thoại này để bạn có thể quyết định dễ dàng hơn. Tìm hiểu về sự khác biệt trong hiệu suất, camera, và nhiều hơn nữa.</p>
                                </div>
                            </a>
                        </NavLink>
                        <NavLink to='/article'>  
                            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900 hidden sm:block">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?4" />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline dark:dark:text-gray-400">Giải Đáp Thắc Mắc: Những Câu Hỏi Thường Gặp Khi Sử Dụng iPhone</h3>
                                    <span className="text-xs dark:dark:text-gray-600">5 Tháng 11, 2023</span>
                                    <p className="dark:dark:text-gray-400">Phone Store tổ chức một buổi Q&A đặc biệt, giải đáp mọi thắc mắc của bạn về iPhone. Từ các mẹo sử dụng hàng ngày đến cách giải quyết các vấn đề kỹ thuật, chúng tôi đều có câu trả lời. Gửi câu hỏi của bạn và hãy chú ý đến mục Tin Tức của chúng tôi để nhận được câu trả lời!</p>
                                </div>
                            </a>
                        </NavLink>
                        <NavLink to='/article'>  
                            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900 hidden sm:block">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?5" />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline dark:dark:text-gray-400">Cập Nhật Sản Phẩm: Phiên Bản Màu Sắc Mới Của iPhone 14 Đã Sẵn Sàng</h3>
                                    <span className="text-xs dark:dark:text-gray-600">12 Tháng 11, 2023</span>
                                    <p className="dark:dark:text-gray-400">Mùa này, Apple đem đến một làn sóng mới với phiên bản màu sắc mới của iPhone 14, bổ sung thêm sự tinh tế vào dòng sản phẩm đã rất thành công này. Phone Store giới thiệu độc quyền các mẫu màu mới này, từ màu xanh dương sâu thẳm đến màu hồng pastel nhẹ nhàng. Khám phá và chọn lựa màu sắc phản ánh phong cách của bạn.</p>
                                </div>
                            </a>
                        </NavLink>
                        <NavLink to='/article'>  
                            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900 hidden sm:block">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?6" />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline dark:dark:text-gray-400">Tư Vấn Mua Sắm: Làm Thế Nào Để Chọn iPhone Phù Hợp Với Nhu Cầu Của Bạn</h3>
                                    <span className="text-xs dark:dark:text-gray-600">19 Tháng 11, 2023</span>
                                    <p className="dark:dark:text-gray-400">Với vô số lựa chọn từ dòng sản phẩm iPhone, việc tìm ra chiếc điện thoại hoàn hảo cho bạn có thể trở nên khó khăn. Đừng lo, đội ngũ chuyên gia của Phone Store đã soạn ra một hướng dẫn chi tiết để giúp bạn quyết định. Từ hiệu năng đến ngân sách, hãy tìm hiểu những yếu tố nên cân nhắc khi chọn mua iPhone.</p>
                                </div>
                            </a>
                        </NavLink>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:dark:bg-gray-900 dark:dark:text-gray-400">Xem thêm ...</button>
                    </div>
                </div>
            </section>


        </div>
    )
}
