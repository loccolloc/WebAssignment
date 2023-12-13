import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyTeamService extends baseService {




    layDanhSachTeam = () => {
        return this.get(`http://localhost/qlsvmvc/?c=team&a=list`);
    }



}



export const quanLyTeamService = new QuanLyTeamService();