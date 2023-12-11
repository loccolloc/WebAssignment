import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLySanPhamService extends baseService {

    constructor() {
        super();
    }



    layDanhSachSanPham = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=`);
    }
}



export const quanLySanPhamService = new QuanLySanPhamService();