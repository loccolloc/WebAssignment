import React from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { useSelector } from 'react-redux'
import Product from '../../components/Product/Product';
// import styleSlick from '../Home/HomeMenu/Home.module.css'
// import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from '../../redux/actions/types/QuanLyPhimType'




const Home = (props) => {
    // const dispatch = useDispatch();
    // const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer);
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);

    const renderFilms = () => {

        return arrFilm.map((phim, index) => {

            return <Product key={index} phim={phim} />




        })
    }

    return (
        <div className='bg-white/10 backdrop-blur-md shadow-lg rounded-lg border border-gray-200'>
            <section className="text-gray-600 body-font " >
                <div className="container md:px-5 md:py-24 md:pt-2 mx-auto flex flex-wrap justify-center" >
                    <div className=" mt-3 mb-10 md:ml-4  flex flex-nowrap overflow-x-auto  whitespace-nowrap">  
                        <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`} onClick={() => {
                            // const action = { type: SET_SAN_PHAM_ALL }
                            // dispatch(action);
                        }}>Tất cả</button>
                        <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`} onClick={() => {
                            // const action = { type: SET_SAN_PHAM_IPHONE15 }
                            // dispatch(action);
                        }}>Iphone 15 series</button>
                        <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`} onClick={() => {
                            // const action = { type: SET_SAN_PHAM_IPHONE14 }
                            // dispatch(action);
                        }}>Iphone 14 series</button>
                        <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`} onClick={() => {
                            // const action = { type: SET_SAN_PHAM_IPHONE13 }
                            // dispatch(action);
                        }}>Iphone 13 series</button>
                        <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`} onClick={() => {
                            // const action = { type: SET_SAN_PHAM_IPHONE13 }
                            // dispatch(action);
                        }}>Iphone 12 series</button>
                        <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`} onClick={() => {
                            // const action = { type: SET_SAN_PHAM_IPHONE13 }
                            // dispatch(action);
                        }}>Iphone 11 series</button>
                        <button className={`px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`} onClick={() => {
                            // const action = { type: SET_SAN_PHAM_IPHONE13 }
                            // dispatch(action);
                        }}>Iphone SE series</button>
                    </div>
                    <h1 style={{ fontSize: "30px", textAlign: "center" ,width:'100%'}}>Điện thoại</h1>
                    <div className="flex flex-wrap -m-4 " style={{ justifyContent: 'center' }}>
                        {renderFilms()}
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
