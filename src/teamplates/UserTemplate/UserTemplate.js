// import { render } from "@testing-library/react";
import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";




export const UserTemplate = (props) => { // path,exact,component
    useEffect(() => {
        window.scrollTo(0, 0);
      });
    const { Component, ...restProps } = props;


    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match
        return <Fragment>
            <div>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
                <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: 'url(https://phimapi.herokuapp.com/uploads/8CD863E0-2308-4516-8B48-C6CC00148788.jpeg)' }}>
                    <div className="absolute bg-black opacity-60 inset-0 z-0" />
                    <Component {...propsRoute} />
                </div>
                <style dangerouslySetInnerHTML={{ __html: "\n                .f-outline input:focus-within ~ label,\n                .f-outline input:not(:placeholder-shown) ~ label {\n                    transform: translateY(-1.5rem) translatex(-1rem) scaleX(0.80) scaleY(0.80);\n    }\n            " }} />
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


        </Fragment>
    }} />

}