import Film from "../../components/Film/Film";
import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../actions/types/QuanLyPhimType"



const stateDefault = {
    arrFilm: [
        {
            "maPhim": 9590,
            "tenPhim": "Guardians of the Galaxy 1 (2016) ",
            "biDanh": "guardians-of-the-galaxy-1-2016-",
            "trailer": "https://www.youtube.com/embed/2LIQ2-PZBC8",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/guardians-of-the-galaxy-1-2014-_gp00.jpg",
            "moTa": "Năm 1988, sau khi mẹ qua đời, Peter Quill bị bắt khỏi Trái đất bởi Tộc Yondu Ravager, từ đó anh trở thành đạo chích với biệt danh Star-Lord. Quill tìm được một quả cầu, bên trong là Viên đá Sức mạnh, nhưng rồi anh lại bị bắt ở hành tinh Xandar của Nova Corps. Tại đó Quill gặp Gamora, Rocket Racoon, Groot, Drax và cùng thoát ra. Họ cùng nhau ngăn cản âm mưu của tên chiến binh Kree là Ronan, kẻ muốn dùng quả cầu để hủy diệt Xandar.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2022-03-11T23:49:57.283",
            "danhGia": 8,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
        },
        {
            "maPhim": 9592,
            "tenPhim": "Avengers: Age of Ultron (2015)",
            "biDanh": "avengers-age-of-ultron-2015-",
            "trailer": "https://www.youtube.com/embed/tmeOjFno6Do",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/avengers-age-of-ultron-2015-_gp00.jpg",
            "moTa": "Sau sự kiện ở Captain America: The Winter Soldier các Avengers tập hợp cùng nhau để tiêu diệt tàn dư Hydra. Nhóm thu giữ được cây trượng của Loki với Viên đá Tâm trí, Tony tính dùng sức mạnh của viên đá để bảo vệ nền hòa bình Trái đất nhưng vô tình tạo ra Ultron, một thực thể tàn ác với ý định hủy diệt thế giới. Nhóm Avenger lại cùng nhau hợp sức bảo vệ thế giới và đánh bại kẻ thù mới này.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2021-11-17T00:00:00",
            "danhGia": 8,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
        },
    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: []
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case SET_DANH_SACH_PHIM : {
            state.arrFilm = action.arrFilm;
            state.arrFilmDefault = state.arrFilm;
            return{...state}
        }
        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu);
            return {...state}
        }

        case SET_FILM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu);
            return {...state}
        }

        default: return { ...state }
    }
}