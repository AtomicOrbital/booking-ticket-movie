import { layDanhSachPhimAction } from "../redux/actions/QuanLyPhimAction";
import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseServices";

export class QuanLyPhimService extends baseService{

    constructor(){
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`api/Quanlyphim/LayDanhSachBanner`);

    }
    layDanhSachPhim = (tenPhim='') => {
        if(tenPhim != ''){
            
        }
        return this.get(`api/QuanLyPhim/`);
    }
    themPhimUploadHinh = (formik) => {
        return this.post(`api/QuanLyPhim/ThemPhim`,formik);
    } 
    // layThongTinPhim = (maPhim) => {
    //     return this.get(`api/QuanLyPhim`)
    // }

    xoaPhim = (maPhim) => {
        return this.delete(`api/QuanlyPhim/delete?maPhim=${maPhim}`);
    }
    layDanhSachAnh = () => {
        return this.get(`api/QuanlyPhim/LayDsAnh`);
    }
}


export const quanLyPhimService = new QuanLyPhimService();

export const xoaPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.xoaPhim(maPhim);
            console.log('result',result.data.content);
            alert("Xóa phim thành công !");
            // Sau khi load lại danh sách phim mới
            // Sau khi xóa đi load lại danh sách phim mới
            dispatch(layDanhSachPhimAction())  
            
        } catch (error) {
            console.log('errors',error.response?.data)
        }
    }
}