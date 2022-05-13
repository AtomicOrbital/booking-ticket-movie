import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseServices";

export class QuanLyPhimService extends baseService{

    constructor(){
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`/api/Quanlyphim/LayDanhSachBanner`);

    }
    layDanhSachPhim = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
    }
    themPhimUpLoadHinh = (formData) => {
        return this.post('/api/QuanLyPhim/ThemPhimUploadHinh',formData);
    }
}


export const quanLyPhimService = new QuanLyPhimService();
