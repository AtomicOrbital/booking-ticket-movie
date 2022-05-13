import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import { useFormik } from 'formik'
import moment from 'moment';

import { themPhimUploadHinhAction } from '../../../../redux/actions/QuanLyPhimAction';
import { useDispatch } from 'react-redux';
import { GROUPID } from '../../../../util/settings/config';

const Addnew = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [imgSrc, setImgSrc] = useState('');
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      tenPhim: '',
      trailer: '',
      ngayKhoiChieu: '',
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      console.log('values', values);
      values.maNhom = GROUPID;
      //Tạo đối tượng formData =>  Đưa giá trị values từ formik vào formData
      let formData = new FormData();
      for (let key in values) {
        if (key !== 'hinhAnh') {
          formData.append(key, values[key]);
        }
        else {
          formData.append('File', values.hinhAnh, values.hinhAnh.name);
        }
      }
      //Gọi api gửi các giá trị formData về backend xử lý
      dispatch(themPhimUploadHinhAction(formData));

      // console.log('formik', formData.get('File'));
    }

  });

  const handleChangeDatePicker = (value) => {
    // console.log('datapickerchange',moment(value).format('DD/MM/YYYY'));
    let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
    formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value)
    };
  };
  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleChangeFile = (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];
    if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
      //Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result);//Hình base 64

      }
      //Đem dữ liệu file lưu vào formik
      formik.setFieldValue('hinhAnh', file);
    };
  };
  return (

    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <h3>Thêm phim mới</h3>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tên phim">
        <Input name="tenPhim" name="tenPhim" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Trailer" >
        <Input name="trailer" name="trailer" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input name="moTa" name="moTa" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
      </Form.Item>
      <Form.Item label="Đang chiếu" valuePropName="checked">
        <Switch onChange={handleChangeSwitch('dangChieu')} />
      </Form.Item>
      <Form.Item label="Sắp chiếu" valuePropName="checked">
        <Switch onChange={handleChangeSwitch('sapChieu')} />
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked">
        <Switch onChange={handleChangeSwitch('hot')} />
      </Form.Item>


      <Form.Item label="Số sao">
        <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <input type='file' onChange={handleChangeFile}
          accept="
            image/apng
            ,image/jpg
            ,image/bmp
            ,image/gif
            ,image/jpeg
            ,image/pjpeg
            ,image/png
            ,image/svg+xml
            ,image/tiff
            ,image/webp
            ,image/x-icon "  />
        <br />
        <img
          style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />

      </Form.Item>

      <Form.Item label="Tác vụ">
        <button type='submit' className='bg-blue-600 text-white p-2'>Thêm phim</button>
      </Form.Item>
    </Form>
  );
};

export default Addnew;
