import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseServices";

export class QuanLyRapService extends baseService{

    constructor(){
        super();
    }

    layDanhSachHeThongRap = () => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuTheoHeThongRap`);

    }

    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
    }
    layThongTinHeThongRap = () => {
        return this.get(`api/QuanLyRap/LayThongTinHeThongRap`);
    }
    layTlhongTinCumRap = (maHeThongRap) => {
        return this.get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`);
    }
 
}


export const quanLyRapService = new QuanLyRapService();