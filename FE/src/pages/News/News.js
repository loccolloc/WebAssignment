import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachNewsAction } from '../../redux/actions/QuanLyNewsAction';
export default function News() {
    const [displayCount, setDisplayCount] = useState(6);
    const { arrProduct } = useSelector(state => state.QuanLyNewsReducer);
    const loadMoreArticles = () => {
        setDisplayCount(prevCount => prevCount + 6); // Load 6 more articles
    };
    const renderNews = () => {
        // return arrFilm.slice(0, 12).map((phim, index) => {
        return arrProduct.slice(0, displayCount).map((product, index) => {

            return (
                <NavLink key={index} to={`/article/${product.id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900">
                    <img role="presentation" className="object-cover w-full rounded h-44 dark:dark:bg-gray-500" src={product.img} alt={product.title} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{product.title}

                        </h3>
                        <span className="text-xs dark:dark:text-gray-400 text-dark">{product.date}

                        </span>
                        <p className="text-dark">Trong bản cập nhật iOS mới nhất, Apple đã giới thiệu các tính năng bảo mật và quyền riêng tư mạnh mẽ hơn. Bản cập nhật này đánh dấu một bước tiến quan trọng trong việc bảo vệ thông tin cá nhân của người dùng iPhone. Phone Store sẽ hướng dẫn bạn cách tận dụng những cải tiến này để đảm bảo an toàn cho dữ liệu của bạn.</p>
                    </div>
                </NavLink>

            )




        })
    }
    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachNewsAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])
    return (
        <div>
            <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">

                <div className="space-y-2 text-center">
                    <h2 style={{ fontSize: '50px', marginTop: '50px' }} className="text-3xl font-bold ">Tin tức</h2>
                    <p className="font-serif text-sm dark:text-gray-400"></p>
                </div>

                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <NavLink to="/article/1" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:dark:bg-gray-900">
                        <img src="https://images.indianexpress.com/2023/12/ios-17-point-2.jpg?w=640" alt="first" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Khám Phá iPhone 14: Đột Phá Công Nghệ và Thiết Kế Mới</h3>
                            <span className="text-xs dark:dark:text-gray-400 text-dark"> 1 Tháng 10, 2023</span>
                            <p className="text-dark">Chào mừng bạn đến với bản tin mới nhất của Phone Store, nơi chúng tôi chia sẻ thông tin độc quyền về những đột phá công nghệ từ Apple. Hãy cùng chúng tôi khám phá iPhone 14 - thiết bị mà Apple tuyên bố là bước tiến lớn nhất trong lịch sử iPhone. Từ hệ thống camera tiên tiến cho đến vi xử lý mạnh mẽ, iPhone 14 không chỉ là một chiếc điện thoại thông minh, nó là một trung tâm giải trí di động.</p>
                        </div>
                    </NavLink>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {renderNews()}
                    </div>
                    <div className="flex justify-center">
                        {displayCount < arrProduct.length && (
                            <button onClick={loadMoreArticles} type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:dark:bg-gray-900 dark:dark:text-gray-400">Thêm ...</button>)}
                    </div>
                </div>
            </section>


        </div>
    )
}
