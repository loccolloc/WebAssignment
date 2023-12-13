import { quanLyStatisticService } from "../../services/QuanLyStatisticService";
import { SET_DANH_SACH_STATISTIC } from "./types/QuanLyStatisticType";




export const layDanhSachStatisticAction = () => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyStatisticService.layDanhSachStatistic();

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_STATISTIC,
                arrStatistic: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

