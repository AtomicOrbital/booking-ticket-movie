// import { render } from "@testing-library/react";
import { Fragment } from "react";
import { Route } from "react-router-dom";




export const UserTemplate = (props) => { // path,exact,component
    const { Component, ...restProps } = props;


    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match
        return <div>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
                <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1624916888581-48904076264b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)' }}>
                    <div className="absolute bg-black opacity-60 inset-0 z-0" />
                    <div className="mt-2 items-center z-10">
                        <form className="p-14 bg-white max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden p-6 space-y-10">
                            <h2 className="text-4xl font-bold text-center text-indigo-600">Login</h2>
                            <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
                                <input type="email" name="email" placeholder=" " className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent" />
                                <label htmlFor="email" className="absolute ml-5 top-0 text-lg text-gray-700 bg-white mt-2 -z-1 duration-300 origin-0">Email</label>
                            </div>
                            <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
                                <input type="password" name="password" placeholder=" " className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent" />
                                <label htmlFor="password" className="absolute ml-5 top-0 text-lg text-gray-700 bg-white mt-2 -z-1 duration-300 origin-0">Password</label>
                            </div>
                            <div className="block mt-2">
                                <label htmlFor className="flex items-center">
                                    <input type="checkbox" className="ml-2 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                </label>
                            </div>
                            <div className="flex items-center flex items-center justify-end mt-4">
                                <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                                    Forgot Password?
                                </a>
                                <button className="px-6 py-2 ml-4 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-indigo-700 rounded-full text-white bg-indigo-600 ">
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <style dangerouslySetInnerHTML={{ __html: "\n    .f-outline input:focus-within ~ label,\n    .f-outline input:not(:placeholder-shown) ~ label {\n        transform: translateY(-1.5rem) translatex(-1rem) scaleX(0.80) scaleY(0.80);\n    }\n" }} />
                {/*Spanish:
Me gusta mucho la programación y el diseño, 
acabe de iniciar en la universidad,
si me desas apoyar con una pequeña donación para mis estudios,
te lo agredeceria,
Espero que mi aporte te haya servido :)  

English: 
I really like programming and design,
I just started university,
If you want to support me with a small donation for my studies, 
I would really appreciate it.
I hope my contribution has served you :)  */}
                <div className=" flex items-end justify-end fixed bottom-2 right-6 mb-5 mr-4 z-20">
                    <a href="https://www.paypal.com/donate?business=SVND7YAGBPDGU&no_recurring=0&item_name=I+save+for+my+studies&currency_code=USD" target="_blank" className="inline-block font-semibold text-center text-2xl p-1 transition focus:outline-none shadow hover:shadow-lg hover:bg-blue-700 p-0 w-12 h-12 rounded-full border text-blue-700 bg-blue-100 hover:text-white border-blue-700 shadow hover:shadow-lg">
                        <i className="fab fa-paypal" />
                    </a>
                </div>
            </div>


        
    }} />

}