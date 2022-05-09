import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function Register(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      hoTen: "",
    },
    onSubmit: (values) => {
      dispatch(dangKyAction(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-2 items-center z-10">
      <div className="p-14 bg-white max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden p-6 space-y-10">
        <h2 className="text-4xl font-bold text-center text-indigo-600">Đăng Ký</h2>
        <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
          <input name="taiKhoan" onChange={formik.handleChange} className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent" />
          <label htmlFor="email" className="absolute ml-5 top-0 text-lg text-gray-700 bg-white mt-2 -z-1 duration-300 origin-0">Họ và tên</label>
        </div>
        <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
          <input type="email" name="email" onChange={formik.handleChange} className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent" />
          <label htmlFor="text" className="absolute ml-5 top-0 text-lg text-gray-700 bg-white mt-2 -z-1 duration-300 origin-0">Email</label>
        </div>
        <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
          <input name="soDT" onChange={formik.handleChange} className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent" />
          <label htmlFor="soDT" className="absolute ml-5 top-0 text-lg text-gray-700 bg-white mt-2 -z-1 duration-300 origin-0">Số điện thoại</label>
        </div>
        <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
          <input type="text" name="taiKhoan" onChange={formik.handleChange} className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent" />
          <label htmlFor="password" className="absolute ml-5 top-0 text-lg text-gray-700 bg-white mt-2 -z-1 duration-300 origin-0">Tài khoản</label>
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
        <div className="flex items-center flex items-center  mt-4">
          
          <button className="px-10 py-4 ml-12 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-2xl shadow hover:bg-indigo-700 rounded-full text-white bg-indigo-600 ">
            Đăng ký
          </button>
        </div>
        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          Bạn đã có tài khoản ? <NavLink to='login' className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng nhập</NavLink>
        </div>

      </div>
    </form>
  );
}
