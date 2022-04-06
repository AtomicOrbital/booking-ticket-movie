import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseServices";

export class QuanLyPhimService extends baseService{

    constructor(){
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`api/QuanlyPhim/LayDanhSachBanner`);

    }

    

    layDanhSachPhim = () => {
        return this.get(`api/QuanlyPhim/`)
    }
}


export const quanLyPhimService = new QuanLyPhimService();
