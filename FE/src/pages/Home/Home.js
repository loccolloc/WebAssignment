import React, { useEffect, useState } from 'react';
import HomeMenu from './HomeMenu/HomeMenu';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-tailwind/react';
import Product from '../../components/Product/Product';
import { layDanhSachSanPhamAction } from '../../redux/actions/QuanLySanPhamAction';
import { SET_SAN_PHAM_IPHONE15, SET_SAN_PHAM_IPHONE14, SET_SAN_PHAM_ALL, SET_SAN_PHAM_IPHONE13, SET_SAN_PHAM_IPHONE12, SET_SAN_PHAM_IPHONE11, SET_SAN_PHAM_IPHONESE } from '../../redux/actions/types/QuanLySanPhamType'
import {Input} from '@material-tailwind/react';




const Home = (props) => {

    const [displayCount, setDisplayCount] = useState(6);

    const { arrProduct } = useSelector(state => state.QuanLySanPhamReducer);
    const loadMoreArticles = () => {
        setDisplayCount(prevCount => prevCount + 6); // Load 6 more phones
    };
    const renderFilms = () => {
        if (arrProduct.length ===0 ) return <p className='my-5 text-3xl'>Không có sản phẩm nào</p>
        else
        return arrProduct.slice(0, displayCount).map((product, index) => {
            return <Product key={index} product={product} />
        })
    }
    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachSanPhamAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])

    const [searchValue, setSearchValue] = useState();
    function handleChangeSearch(e) {
        console.log(e.target.value);
    } 

    return (
        <div className='bg-white/10 backdrop-blur-md shadow-lg rounded-lg border border-gray-200'>
             <section className="text-gray-600 body-font " >
                <div className="container md:px-5 md:py-24 md:pt-2 mx-auto flex flex-wrap justify-center" >
                    <div className=" mt-3 mb-10 md:ml-4  flex flex-nowrap overflow-x-auto  whitespace-nowrap overflow-y-hidden">  
                    <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-102 duration-300`} onClick={() => {
                        const action = { type: SET_SAN_PHAM_ALL }
                        dispatch(action);
                    }}>Tất cả</button>
                        <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-102 duration-300`} onClick={() => {
                            const action = { type: SET_SAN_PHAM_IPHONE15 }
                            dispatch(action);
                        }}>Iphone 15 series</button>
                        <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-102 duration-300`} onClick={() => {
                            const action = { type: SET_SAN_PHAM_IPHONE14 }
                            dispatch(action);
                        }}>Iphone 14 series</button>
                        <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-102 duration-300`} onClick={() => {
                            const action = { type: SET_SAN_PHAM_IPHONE13 }
                            dispatch(action);
                        }}>Iphone 13 series</button>
                        <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-102 duration-300`} onClick={() => {
                            const action = { type: SET_SAN_PHAM_IPHONE12 }
                            dispatch(action);
                        }}>Iphone 12 series</button>
                        <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-102 duration-300`} onClick={() => {
                            const action = { type: SET_SAN_PHAM_IPHONE11 }
                            dispatch(action);
                        }}>Iphone 11 series</button>
                        <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-102 duration-300`} onClick={() => {
                            const action = { type: SET_SAN_PHAM_IPHONESE }
                            dispatch(action);
                        }}>Iphone SE series</button>
                    </div>
                    <h1 style={{ fontSize: "30px", textAlign: "center" ,width:'100%'}}>Điện thoại</h1>
                    <Input className='w-2/4' value={searchValue} onChange={(e)=>handleChangeSearch(e)}/>
                    <div className="flex flex-wrap -m-4" style={{ justifyContent: 'center' }}>
                        {renderFilms()}
                    </div>
                    <div className="flex justify-center">
                        {displayCount < arrProduct.length && (
                        <Button onClick={loadMoreArticles} type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:dark:bg-gray-900 dark:dark:text-gray-400">Xem Thêm ...</Button>)}
                    </div>

                </div>
            </section>

            <div className="mx-0 md:mx-18 lg:mx-36 pb-5">
                <HomeMenu />
            </div>
        </div>
    )
}
export default Home;
