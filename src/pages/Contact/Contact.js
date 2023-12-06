import React from 'react'
import {Button} from '@material-tailwind/react'
export default function Contact() {
    return (
        <div className=" bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-6 border border-gray-200" style={{
            backgroundImage: `url("")`
        }}>


            <section className="m-4 md:m-8 dark:dark:bg-gray-800 dark:dark:text-gray-100">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold dark:dark:text-gray-400">Liên hệ</h2>
                    <p className="dark:dark:text-gray-400">Chúng tôi tại Phone Store luôn sẵn lòng lắng nghe và phản hồi mọi yêu cầu của bạn. Dù bạn cần hỗ trợ kỹ thuật, muốn tìm hiểu thêm về sản phẩm, hay có bất kỳ thắc mắc nào về dịch vụ của chúng tôi, đội ngũ chuyên nghiệp của chúng tôi sẽ giúp bạn giải quyết mọi vấn đề.</p>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        <h3 className="my-3 text-2xl font-semibold dark:dark:text-gray-400 text-center ">Trải Nghiệm Cửa Hàng</h3>
                        <div className="space-y-1 leadi">
                            <p>Đến thăm cửa hàng của chúng tôi để trải nghiệm sự thú vị của việc mua sắm trực tiếp. Bạn sẽ được trải nghiệm sản phẩm, nhận sự tư vấn chuyên nghiệp và tham gia vào các sự kiện độc quyền chỉ có tại Phone Store.</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        <h3 className="my-3 text-2xl font-semibold dark:dark:text-gray-400 text-center ">Kết Nối Với Chúng Tôi Trên Mạng Xã Hội</h3>
                        <div className="space-y-1 leadi">
                            <p>Hãy theo dõi chúng tôi trên các nền tảng mạng xã hội để cập nhật thông tin mới nhất, các sự kiện đặc biệt và ưu đãi hấp dẫn.</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold dark:dark:text-gray-400 text-center">Giờ Làm Việc</h3>
                        <div className="space-y-1 leadi">
                            <p>Thứ Hai - Thứ Sáu: 9:00 - 18:00</p>
                            <p>Thứ Bảy: 10:00 - 17:00</p>
                            <p>Chủ Nhật: Đóng cửa</p>
                            <p>Đối với bất kỳ yêu cầu hỗ trợ nào sau giờ làm việc, xin vui lòng sử dụng form liên hệ trên trang web của chúng tôi hoặc gửi email, và chúng tôi sẽ liên hệ lại với bạn trong 24 giờ làm việc tiếp theo.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        <h3 className="my-3 text-2xl font-semibold dark:dark:text-gray-400 text-center ">Theo Dõi Đơn Hàng của Bạn</h3>
                        <div className="space-y-1 leadi">
                            <p>Đã đặt hàng? Theo dõi đơn hàng của bạn trực tiếp trên trang web của chúng tôi để biết trạng thái cập nhật và dự kiến giao hàng.</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        <h3 className="my-3 text-2xl font-semibold dark:dark:text-gray-400 text-center ">Phản Hồi và Góp Ý</h3>
                        <div className="space-y-1 leadi">
                            <p>Chúng tôi trân trọng mọi phản hồi và sẵn lòng lắng nghe góp ý từ bạn. Mọi ý kiến đóng góp sẽ giúp chúng tôi cải thiện và phục vụ bạn tốt hơn.</p>
                            <p>Chúng tôi ở đây để hỗ trợ bạn - hãy liên hệ với chúng tôi bằng cách nào tiện lợi nhất cho bạn!</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        <h3 className="my-3 text-2xl font-semibold dark:dark:text-gray-400 text-center ">Dịch Vụ Hỗ Trợ Kỹ Thuật</h3>
                        <div className="space-y-1 leadi">
                            <p>Gặp vấn đề với iPhone của bạn? Đội ngũ kỹ thuật viên của chúng tôi sẽ giúp bạn xác định và giải quyết sự cố một cách nhanh chóng. Liên hệ với chúng tôi qua hotline hoặc gửi yêu cầu hỗ trợ kỹ thuật trực tiếp trên website.</p>

                        </div>
                    </div>
                </div>
            </section>
            <hr className="hr" />

            <section className="py-6 dark:dark:bg-gray-800 dark:dark:text-gray-50 ">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold dark:dark:text-gray-400">Liên hệ chúng</h1>
                        <p className="pt-2 pb-4">Điền vào mẫu đơn để bắt đầu cuộc trò chuyện</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>Fake address, 9999 City</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>contact@business.com</span>
                            </p>
                        </div>
                    </div>
                    <form noValidate className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <span className="mb-1">Họ và tên</span>
                            <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:dark:bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Địa chỉ email</span>
                            <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:dark:bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Lời nhắn</span>
                            <textarea rows={3} className="block w-full rounded-md focus:ring focus:ri focus:ri dark:dark:bg-gray-800" defaultValue={""} />
                        </label>
                        <Button type="button" className=" px-8 py-3 font-semibold rounded text-white mr-2">Gửi</Button>
                    </form>
                </div>
            </section>




        </div>
    )
}
