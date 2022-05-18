import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';

export default function Login(props) {

  const dispatch = useDispatch();

  const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer);

  console.log('userLogin', userLogin);

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      // email: '',
    },
    onSubmit: values => {

      const action = dangNhapAction(values);
      dispatch(action);

      console.log('values', values);
    },
  });


  return (
    <form onSubmit={formik.handleSubmit} className="mt-2 items-center z-10">
      <div className="p-14 bg-white max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden p-6 space-y-10">
        <h2 className="text-4xl font-bold text-center text-indigo-600">Đăng nhập</h2>
        <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
          <input name="taiKhoan" onChange={formik.handleChange} className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent" />
          <label htmlFor="email" className="absolute ml-5 top-0 text-lg text-gray-700 bg-white mt-2 -z-1 duration-300 origin-0">Tài khoản</label>
        </div>
        <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
          <input type="password" name="matKhau" onChange={formik.handleChange} className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent" />
          <label htmlFor="password" className="absolute ml-5 top-0 text-lg text-gray-700 bg-white mt-2 -z-1 duration-300 origin-0">Mật khẩu</label>
        </div>
        <div className="block mt-2">
          <label htmlFor className="flex items-center">
            <input type="checkbox" className="ml-2 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>
        <div className="flex items-center flex items-center justify-end mt-4">
          <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">
            Quên mật khẩu ?
          </a>
          <button className="px-6 py-2 ml-4 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-indigo-700 rounded-full text-white bg-indigo-600 ">
            Đăng nhập
          </button>
        </div>
        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          Bạn chưa có tài khoản ? <NavLink to='/register' className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng ký</NavLink>
        </div>

      </div>
    </form>
  )
}
