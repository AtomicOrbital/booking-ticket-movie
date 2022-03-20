import React, { Component } from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutline } from '@ant-design/icons'
import styleSlick from './MultipleRowSlick.module.css';
import Film from '../Film/Film'
import { useDispatch, useSelector } from "react-redux";
import Film_Flip from "../Film/Film_Flip";

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


export default class MultipleRows extends Component {




    renderFilms = () => {

        return this.props.arrFilm.slice(0,12).map((item, index) => {
            return <div className="mt-2" key={index}  >
                <Film_Flip item={item} />
            </div>
        })
    }

    render() {
        const settings = {
            className: "center variable-width",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 2,
            speed: 500,
            rows: 2,
            slidesPerRow: 2,
            variableWidth: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div>
                <h2>Multiple Rows</h2>
                <Slider {...settings}>
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {/* <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                    <div>
                        <h3>10</h3>
                    </div>
                    <div>
                        <h3>11</h3>
                    </div>
                    <div>
                        <h3>12</h3>
                    </div>
                    <div>
                        <h3>13</h3>
                    </div>
                    <div>
                        <h3>14</h3>
                    </div>
                    <div>
                        <h3>15</h3>
                    </div>
                    <div>
                        <h3>16</h3>
                    </div> */}
                </Slider>
            </div>
        );
    }
}