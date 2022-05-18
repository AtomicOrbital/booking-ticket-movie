import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung"
import { DANG_NHAP_ACTION } from "./types/QuanLyNguoiDungType";
import { history } from '../../App'
import { SET_THONG_TIN_NGUOI_DUNG } from './types/QuanLyNguoiDungType';
import  Swal from 'sweetalert2'

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

            if (result.data.statusCode == 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                });
                // Chuyển hướng đăng nhập về trang trước đó
                history.goBack();
            }

            console.log('result', result.data.content);
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const dangKyAction = (thongTinDangKy) => {
  return async () => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
      if (result.data.statusCode === 200) {
        Swal.fire({
          title: "Đăng ký thành công!",
          icon: "success",
          confirmButtonText: "Đăng nhập ngay",
        });
        history.goBack();
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response.data.content,
        icon: "error",
        confirmButtonText: "Try Again!",
      });
    }
  };
};

export const layThongTinNguoiDungAction = (thongTinDangNhap) => {



    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();

            if (result.data.statusCode == 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });

            }


            console.log('result', result.data.content);
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

