import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyAboutImgService extends baseService {





    layDanhSachAboutImg = () => {

        return this.get(`http://localhost/qlsvmvc/?c=aboutimg&a=list`)
    }

}



export const quanLyAboutImgService = new QuanLyAboutImgService();