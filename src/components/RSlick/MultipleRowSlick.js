import React, { Component, useState } from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutline } from '@ant-design/icons'
import styleSlick from './MultipleRowSlick.module.css';
import Film from '../Film/Film'
import { useDispatch, useSelector } from "react-redux";
import Film_Flip from "../Film/Film_Flip";
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../redux/actions/types/QuanLyPhimType";
import { CSSTransition } from "react-transition-group";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block", color: "black" }}
            onClick={onClick}
        />
    );
}



function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}


const MultipleRowSlick = (props) => {
    const [show, setShow] = useState(false);
    const [trailer, setTrailer] = useState("");
    const dispatch = useDispatch();
    const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer);



    const renderFilms = () => {

        return props.arrFilm.slice(0, 12).map((item, index) => {
            return (<div className={`${styleSlick['width-item']}`} key={index} onClick={() => {
                setTrailer(item.trailer);
            }} >
                <Film_Flip item={item} />
                <button onClick={() => setShow(true)} className="play-btn">
                    <img src="./img/play-video.png" alt="playvideo" />
                </button>
            </div>
            );
        });
    };

    let activeClassDangChieu = dangChieu === true ? 'active_Film' : 'none_active_Film';
    let activeClassSapChieu = sapChieu === true ? 'active_Film' : 'none_active_Film';

    console.log('activeClassSapChieu', activeClassSapChieu);

    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "180px",
        slidesToShow: 2,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };



    return (
        <div className="container relative">
      <div className="text-center mb-4">
        <button
          className={`${styleSlick[activeClassDangChieu]} px-8 py-3 font-semibold rounded-full bg-white text-gray-800 border-gray-800 border mr-3`}
          onClick={() => {
            const action = { type: SET_FILM_DANG_CHIEU };
            dispatch(action);
          }}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button
          className={`${styleSlick[activeClassSapChieu]} px-8 py-3 font-semibold rounded-full bg-white text-gray-800 border-gray-800 border`}
          onClick={() => {
            const action = { type: SET_FILM_SAP_CHIEU };
            dispatch(action);
          }}
        >
          PHIM SẮP CHIẾU
        </button>
      </div>

      <div className="w-11/12 mx-auto relative mb-4">
        <Slider {...settings}>{renderFilms()}</Slider>
        <CSSTransition
          in={show}
          unmountOnExit
          timeout={{ enter: 0, exit: 300 }}
        >
          <div className="modal" onClick={() => setShow(false)}>
    
            <iframe
              style={{ position: "relative" }}
              title="title4"
              allowfullscreen="true"
              width="1000px"
              height="500px"
              src={trailer}
              frameborder="0"
            ></iframe>
          </div>
        </CSSTransition>
      </div>
    </div>
    );
}



export default MultipleRowSlick;