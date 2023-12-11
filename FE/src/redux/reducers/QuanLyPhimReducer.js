// import { SET_DANH_SACH_PHIM, SET_FILM_SAP_CHIEU, SET_FILM_DANG_CHIEU } from "../actions/types/QuanLyPhimType"
const stateDefault = {
    arrFilm: [
        {
            "maPhim": 1282,
            "tenPhim": "",
            "biDanh": "",
            "trailer": "https://www.youtube.com/embed/uqJ9u7GSaYM",
            "hinhAnh": "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
        {
            "maPhim": 1282,
            "tenPhim": "Ban tay diet quy",
            "biDanh": "ban-tay-diet-quy",
            "trailer": "https://www.youtube.com/embed/uqJ9u7GSaYM",
            "hinhAnh": "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-pink-2-600x600.jpg",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
        },

        {
            "maPhim": 1282,
            "tenPhim": "Ban tay diet quy",
            "biDanh": "ban-tay-diet-quy",
            "trailer": "https://www.youtube.com/embed/uqJ9u7GSaYM",
            "hinhAnh": "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-128gb-xanh-thumb-600x600.jpg",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
        {
            "maPhim": 1282,
            "tenPhim": "Ban tay diet quy",
            "biDanh": "ban-tay-diet-quy",
            "trailer": "https://www.youtube.com/embed/uqJ9u7GSaYM",
            "hinhAnh": "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-den-thumb-600x600.jpg",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
        {
            "maPhim": 1282,
            "tenPhim": "Ban tay diet quy",
            "biDanh": "ban-tay-diet-quy",
            "trailer": "https://www.youtube.com/embed/uqJ9u7GSaYM",
            "hinhAnh": "https://cdn.tgdd.vn/Products/Images/42/245545/iPhone-14-plus-thumb-xanh-1-600x600.jpg",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
        {
            "maPhim": 1282,
            "tenPhim": "Ban tay diet quy",
            "biDanh": "ban-tay-diet-quy",
            "trailer": "https://www.youtube.com/embed/uqJ9u7GSaYM",
            "hinhAnh": "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        }
    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: []

}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {

        // case SET_DANH_SACH_PHIM: {
        //     state.arrFilm = action.arrFilm;
        //     state.arrFilmDefault = state.arrFilm;
        //     return { ...state }
        // }
        // case SET_FILM_DANG_CHIEU: {
        //     state.dangChieu = !state.dangChieu;

        //     state.arrFilm = state.arrFilm.filter(film => film.dangChieu === state.dangChieu);
        //     return { ...state }
        // }
        // case SET_FILM_SAP_CHIEU: {
        //     state.sapChieu = !state.sapChieu;

        //     state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu);
        //     return { ...state }
        // }

        default: return { ...state }
    }
}