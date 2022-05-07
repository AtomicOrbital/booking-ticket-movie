import { baseService } from "./baseServices";
import { GROUPID} from '../util/settings/config'
import { ThongTinDatVe } from '../assets/styles/_core/ThongTinDatVe';
export class QuanLyDatVeService  extends baseService{

    constructor() {
        super();
    }

    layChiTietPhongVe = (maLichChieu) => { // mã lịch chiếu lấy từ url
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }
    
    // {
    //     "maLichChieu": 0,
    //     "danhSachVe": [
    //       {
    //         "maGhe": 0,
    //         "giaVe": 0
    //       }
    //     ]
    //   }
    datVe = (thongTinDatVe = new ThongTinDatVe()) => { //thông tin đặt vé
        return this.post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe);
    }
  
}



export const quanLyDatVeService = new QuanLyDatVeService();