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
        <div>

            {/* <div className='mt-10'>
                <button className={`${styleSlick[activeClassDC]} ml-20  px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`} onClick={() => {
                    const action = { type: SET_FILM_DANG_CHIEU }
                    dispatch(action);
                }}>iPhone 15 series</button>
                <button className={`${styleSlick[activeClassSC]}px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`} onClick={() => {
                    const action = { type: SET_FILM_SAP_CHIEU }
                    dispatch(action);
                }}>iPhone 14 series </button>

            </div> */}

            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto " >
                    <h1 style={{ fontSize: "30px", textAlign: "center" }}>Điện thoại</h1>
                    <div className="flex flex-wrap -m-4 " style={{ justifyContent: 'center' }}>
                        {renderFilms()}
                    </div>


                </div>
            </section>

            <div className="mx-36">
                <HomeMenu />

            </div>
        </div>
    )
}
export default Home;
