import { quanLyTestimonialService } from "../../services/QuanLyTestimonialService";
import { SET_DANH_SACH_TESTIMONIAL } from "./types/QuanLyTestimonialType";




export const layDanhSachTestimonialAction = () => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyTestimonialService.layDanhSachTestimonial();

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_TESTIMONIAL,
                arrTestimonial: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

