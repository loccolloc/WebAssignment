import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyContactPageService extends baseService {





    layDanhSachContactPage = () => {

        return this.get(`http://localhost/qlsvmvc/?c=contactPage&a=list`)
    }


}



export const quanLyContactPageService = new QuanLyContactPageService();