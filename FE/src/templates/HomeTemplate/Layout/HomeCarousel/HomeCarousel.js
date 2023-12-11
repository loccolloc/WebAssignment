import React from 'react'
import { Carousel } from 'antd';
import { useSelector } from 'react-redux'
import './HomeCarousel.css';
// import axios from 'axios';
// const contentStyle = {
//     height: '600px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     backgroundPosition: 'center',
//     backgroundSize: '100%',
//     backgroundRepeat: 'no-repeat'
// };


export default function HomeCarousel(props) {
    const { arrImg } = useSelector(state => state.CarouselReducer)

    // const dispatch = useDispatch();
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

//     <div style={{backgroundImage: `url(${item.hinhAnh})` }}>
//     {/* <img src={item.hinhAnh} className=" opacity-0" alt={item.hinhAnh} /> */}
// </div>
    const renderImg = () => {
        return arrImg.map((item, index) => {
            var coursel_img = {
                backgroundImage:`url(${item.hinhAnh})`,       
                color: '#fff',
                lineHeight: '160px',
                textAlign: 'center',
                backgroundPosition: 'center',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundAtachment: 'fixed'
            }
            
            return <div key={index}>
                        <div className='content_carousel' style={coursel_img}>
                                {/* <img src={item.hinhAnh} className=" opacity-0" alt={item.hinhAnh} /> */}
                        </div>
                    </div>
                   })
    }

    return (

        <Carousel effect="fade" style={{ width: '100%', padding: 0, margin: 0 }} 
         autoplay={true} autoplaySpeed={3000} infinite easing
        >
            {renderImg()}
        </Carousel>
    )
}