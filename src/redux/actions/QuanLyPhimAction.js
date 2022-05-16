import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM, SET_DANH_SACH_ANH } from "./types/QuanLyPhimType";
import { history } from "../../App";



export const layDanhSachPhimAction = (tenPhim='') => {

    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo 
            const result = await quanLyPhimService.layDanhSachPhim();
               
           
            // Sau khi lấy dữ liệu từ API về => redux (reducer)
            dispatch({
                type:SET_DANH_SACH_PHIM ,
                arrFilm: result.data.content
            })
        }catch (errors) {
            console.log('errors', errors);
        }
    };  
}
export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await quanLyPhimService.themPhimUploadHinh(formData);
            alert('Thêm phim thành công!')
            console.log('result', result.data.content);           
        } catch (errors) {
            console.log(errors.response?.data)
        }
    }
}


export const layThongTinPhimAction =  (maPhim) => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layThongTinPhim(maPhim);

   

            dispatch({
                type:SET_THONG_TIN_PHIM,
                thongTinPhim: result.data.content

            })
            
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}
export const layDanhSachAnhAction =  () => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layDanhSachAnh();

   

            dispatch({
                type:SET_DANH_SACH_ANH,
                arrAnh: result.data.content

            })
            
        }catch (errors) {
            console.log('errors',errors);
        }
    };
}

