import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseServices";

export class QuanLyPhimService extends baseService{

    constructor(){
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`api/Quanlyphim/LayDanhSachBanner`);

    }
    layDanhSachPhim = () => {
        return this.get(`api/QuanLyPhim/`);
    }
    themPhimUploadHinh = (formData) => {
        return this.post(`api/QuanLyPhim/ThemPhim`,formData);
    } 
    // layThongTinPhim = (maPhim) => {
    //     return this.get(`api/QuanLyPhim`)
    // }
}


export const quanLyPhimService = new QuanLyPhimService();
