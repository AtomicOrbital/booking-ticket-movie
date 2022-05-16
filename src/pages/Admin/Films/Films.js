import React, { Fragment, useEffect } from 'react'
import { Button, Table } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined, SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimAction } from '../../../redux/actions/QuanLyPhimAction';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { history } from '../../../App';
import { xoaPhimAction } from '../../../services/QuanLyPhimService';
const { Search } = Input;
export default function Films() {

    const { arrFilmDefault } = useSelector(state => state.QuanLyPhimReducer);

    const dispatch = useDispatch();

    console.log('arrFilmDefault', arrFilmDefault);
    useEffect(() => {
        dispatch(layDanhSachPhimAction());
        
    }, [])

    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',

            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend', 'ascend'],
            width: 250
            // sortOrder:'descend'
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: (text, film, index) => {
                return <Fragment>
                    <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/50/50`; }} />
                </Fragment>
            },
            width: 200
            // sorter: (a, b) => a.age - b.age,

        },

        {
            title: 'Tên Phim',
            dataIndex: 'tenPhim',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '25%'
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            // sorter: (a, b) => {
            //     let moTaA = a.moTa.toLowerCase().trim();
            //     let moTaB = b.moTa.toLowerCase().trim();
            //     if(moTaA > moTaB) {
            //         return 1;
            //     }
            //     return -1;
            // },
            render: (text, film) => {
                return <Fragment>
                    {film.moTa.length > 50 ? film.moTa.substr(0, 50) + ' ...' : film.moTa}
                </Fragment>
            },
            sortDirections: ['descend', 'ascend'],
            width: '25%'
        },
        {
            title: 'Hành động',
            dataIndex: 'maPhim',
            // sorter: (a, b) => {
            //     let moTaA = a.moTa.toLowerCase().trim();
            //     let moTaB = b.moTa.toLowerCase().trim();
            //     if(moTaA > moTaB) {
            //         return 1;
            //     }
            //     return -1;
            // },
            render: (text, film) => {
                return <Fragment>
                    {/* <NavLink key={1} className='mr-2 text-2xl' to={`/admin/films/edit/${film.maPhim}`}><EditOutlined style={{color:'blue'}} /></NavLink> */}
                    <span style={{cursor:'pointer'}} key={2} className='text-2xl' onClick={()=>{
                        // Gọi action xóa
                        if(window.confirm('Bạn có muốn xóa phim' + film.tenPhim)){
                            // Gọi action
                            dispatch(xoaPhimAction(film.maPhim));
                        }
                    }} ><DeleteOutlined style={{color:'red'}}  /></span>
                </Fragment>
            },
            sortDirections: ['descend', 'ascend'],
            width: '25%'
        },
    ];
    const data = arrFilmDefault;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch = value => {
        console.log(value);
        //Gọi API layDanhSachPhim
    };
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    return (
        <div >
            <h3 className='text-4xl'>Quản lý Phim</h3>
            <Button className='mb-5' onClick={()=> {
                history.push('/admin/films/edit');
            }}>Thêm phim</Button>
            <Search
                className='mb-5'
                placeholder="input search text"
                allowClear
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maPhim"} />
        </div>
    )
}
