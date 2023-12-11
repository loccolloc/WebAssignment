
const stateDefault = {
    arrImg: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "https://www.xtmobile.vn/vnt_upload/news/08_2019/19/iphone-12-pro-xtmobile_-banner.jpg"
        },
        {
            "maBanner": 2,
            "maPhim": 1283,
            "hinhAnh": "https://www.bihouse.vn/img_data/images/842944434604-Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
        },
        {
            "maBanner": 2,
            "maPhim": 1283,
            "hinhAnh": "https://storage.googleapis.com/tradeinn-images/images/landing-pages/appleNovetats-1.jpg"
        }
    ],

}


export const CarouselReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case 'SET_CAROUSEL': {

            state.arrImg = action.arrImg;
            // console.log("ket qua ", state.arrImg[1]);
            // console.log("ket qua: ", state);
            return { ...state };
        }


        default: return { ...state }
    }

}