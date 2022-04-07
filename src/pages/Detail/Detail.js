import React, { useEffect } from 'react'
import { Button, CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import '../../assets/styles/circle.css'
import { Tabs, Radio, Space } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { SET_CHI_TIET_PHIM } from '../../redux/actions/types/QuanLyRapType';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapAction';
import moment from 'moment';
const { TabPane } = Tabs;
export default function Detail(props) {

    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail);

    console.log({ filmDetail })

    const dispatch = useDispatch();

    useEffect(() => {
        // lấy thông tin param từ url
        let { id } = props.match.params;

        dispatch(layThongTinChiTietPhim(id))

    }, [])

    return (
        <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundSize: '100%', backgroundPosition: 'center', minHeight: '100vh' }}>
            <CustomCard
                style={{ paddingTop: 150, minHeight: '100vh' }}
                effectColor="#fff" // required
                color="#fff" // default color is white
                blur={10} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <div className='grid grid-cols-12'>
                    <div className='col-span-5 col-start-3'>
                        <div className='grid grid-cols-3'>
                            <img className='col-span-1' src={filmDetail.hinhAnh} style={{ width: '100%', height: 300 }} alt='123' />
                            <div className="col-span-2 ml-5" style={{ marginTop: '25%' }}>
                                <p className="text-sm">Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')} </p>
                                <p className="text-3xl leading-3"> {filmDetail.tenPhim} </p>
                                <p>{filmDetail.moTa}</p>
                            </div>
                        </div>  
                    </div>
                    <div className='col-span-4'>
                        <h1 style={{ marginLeft: '13%' }} className="text-green-400 text-2xl " ><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /></h1>
                        <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                            <span className='text-white'>
                                {filmDetail.danhGia * 10}%
                            </span>
                            <div className="slice">
                                <div className="bar" />
                                <div className="fill" />
                            </div>
                        </div>
        
                    </div>
                </div>

                <div className='mt-20 container' >
                    <Tabs tabPosition={'left'}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab 3
                        </TabPane>
                    </Tabs>
                </div>

            </CustomCard>

        </div>
    )
}
