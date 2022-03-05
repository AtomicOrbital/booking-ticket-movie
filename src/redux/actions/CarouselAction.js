import axios from 'axios'
import { DOMAIN } from '../../util/settings/config';
import {SET_CAROUSEL} from './types/CarouselType'

export const getCarouselAction = () => {

    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo 
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
                method: 'GET'
            });

            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content
            })
        }catch (errors) {
            console.log('errors', errors);
        }
    };  
}