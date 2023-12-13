import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyTestimonialService extends baseService {




    layDanhSachTestimonial = () => {
        return this.get(`http://localhost/qlsvmvc/?c=testimonial&a=list`);
    }



}



export const quanLyTestimonialService = new QuanLyTestimonialService();