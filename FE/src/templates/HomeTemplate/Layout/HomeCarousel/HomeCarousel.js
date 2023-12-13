import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachCarouselAction } from '../../../../redux/actions/QuanLyCarouselAction';
import './HomeCarousel.css';
// import axios from 'axios';
const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
};


export default function HomeCarousel(props) {
    const { arrProduct } = useSelector(state => state.CarouselReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachCarouselAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])

    // useEffect(() => {
    //     const asyncFn = async () => {
    //         try {
    //             const result = await axios({
    //                 // url: 'http://localhost/api/user.php',
    //                 url: 'http://localhost/Server/product/getall',

    //                 method: 'GET',
    //             });
    //             console.log('result1', (result.data.data[0]));
    //             console.log('result', typeof (result.data));
    //             // dispatch({
    //             //     type: 'SET_CAROUSEL',

    //             //     arrImg: result.data,

    //             // })
    //         } catch (error) {
    //             console.log("error", error);

    //         }
    //     };
    //     asyncFn();



    // }, []);
    const renderImg = () => {
        return arrProduct.map((item, index) => {
            // console.log("ketqua: ", item.ten);
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img src={item.hinhAnh} className=" opacity-0" alt={item.hinhAnh} />
                </div>
            </div>
        })
    }

    return (

        <Carousel effect="fade" style={{ width: '100%', padding: 0, margin: 0 }} >
            {renderImg()}

        </Carousel>
    )
}