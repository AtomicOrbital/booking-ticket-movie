import React, {useEffect, useState} from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
//Kết nối redux 
import { useSelector, useDispatch } from 'react-redux'
import Film from '../../components/Film/Film'
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick'
import {layDanhSachPhimAction} from '../../redux/actions/QuanLyPhimAction'
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction'
import HomeCarousel from '../../teamplates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'

// import HomeCarousel from '../../teamplates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';

export default function Home(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();
    console.log("propsHome", arrFilm);
    // const renderFilms = () => {
    //     return arrFilm.map((phim, index) => {
    //         return <Film key={index} />


    //     })
    // }
    useEffect(()=>{
        const action =  layDanhSachPhimAction();
        dispatch(action); // dispatch function từ thunk

        dispatch(layDanhSachHeThongRapAction());
    },[]) 
    return (
        <div>
             <HomeCarousel />

            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto " >

                    <MultipleRowSlick arrFilm={arrFilm} />
                    {/* <div className="flex flex-wrap  " style={{ justifyContent: 'center' }}>
                        {renderFilms()}
                    </div> */}
                </div>
            </section>

            <div className="mx-36">
                <HomeMenu  heThongRapChieu={heThongRapChieu} />

            </div>
        </div>
    )
}
