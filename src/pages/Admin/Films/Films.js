import React, { useEffect } from 'react'
import { Button, Table } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimAction } from '../../../redux/actions/QuanLyPhimAction';
const { Search } = Input;
export default function Films() {

    const {arrFilmDefault} = useSelector(state => state.QuanLyPhimReducer);

    const dispatch = useDispatch();

    console.log('arrFilmDefault',arrFilmDefault);
    useEffect(()=>{
        dispatch(layDanhSachPhimAction);

    },[])

    const columns = [
        {
            title: 'maPhim',
            dataIndex: 'maPhim',
            value: (text,object) => { return <span>{text}</span>},
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend','ascend'],
            // sortOrder:'descend'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
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

    const onSearch = value => console.log(value);
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    return (
        <div >
            <h3 className='text-4xl'>Quản lý Phim</h3>
            <Button className='mb-5'>Thêm phim</Button>
            <Search
                className='mb-5'
                placeholder="input search text"
                allowClear
                enterButton= {<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}
