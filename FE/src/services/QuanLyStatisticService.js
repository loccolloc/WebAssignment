import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyStatisticService extends baseService {




    layDanhSachStatistic = () => {
        return this.get(`http://localhost/qlsvmvc/?c=statistic&a=list`);
    }



}



export const quanLyStatisticService = new QuanLyStatisticService();