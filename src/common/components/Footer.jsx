import React from "react";

import { Link } from "react-router-dom";
import {
  best,
  box,
  express,
  github,
  headphone,
  instagram,
  linkedin,
} from "../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";

const Footer = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      "";
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          "ایمیل وارد شده نادرست است"
        )
        .required("لطفا این قسمت را خالی نگذارید"),
    }),
  });

  return (
    <footer className="bg-gray-200 mt-20  overflow-x-hidden border-t-[1px] border-gray-400 z-50  relative p-3  h-fit">
      <div className="mt-8 mr-5  ">
        <p className="font-[logo]  font-bold text-5xl text-blue-700 ">
          {" "}
          وبمارکت{" "}
        </p>

        <pre className=" font-[graphic]  font-medium text-sm mt-5">
          {" "}
          تلفن پشتیبانی ۹۹۹۹۰۰۰۰ - ۰۲۱ | ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم{" "}
        </pre>
      </div>

      <div className="  flex  flex-col justify-center items-center w-screen  relative ">
        <div className="h-[25vh] w-[80vw]  grid grid-cols-4 p-10">
          <div className="text-center h-[20vh] p-4 flex justify-center items-center flex-col gap-3 rounded-2xl   w-[15vw]">
            {" "}
            <img className="w-14  select-none" src={express} alt="icon" />
            <p className="text-xs"> امکان تحویل اکسپرس </p>
          </div>
          <div className="text-center h-[20vh] p-4 flex justify-center items-center flex-col gap-3 rounded-2xl   w-[15vw]">
            {" "}
            <img className="w-14 select-none " src={headphone} alt="icon" />
            <p className="text-xs"> پاسخگویی ۲۴ ساعته</p>
          </div>
          <div className="text-center h-[20vh] p-4 flex justify-center items-center flex-col gap-3 rounded-2xl   w-[15vw]">
            {" "}
            <img className="w-14  select-none" src={box} alt="icon" />
            <p className="text-xs"> هفت روز زمانت بازگشت کالا </p>
          </div>
          <div className="text-center h-[20vh] p-4 flex justify-center items-center flex-col gap-3 rounded-2xl  w-[15vw]">
            {" "}
            <img className="w-14  select-none" src={best} alt="icon" />
            <p className="text-xs"> زمانت اصل بودن کالا </p>
          </div>
        </div>
      </div>

      <div className="flex w-screen mt-12   justify-center items-center ">
        <div className="grid  grid-cols-4 justify-center items-start w-[70%]">
          <div className="inline-flex mr-12 flex-col">
            <p className="text-gray-800 font-semibold">خدمات مشتریان</p>
            <Link className="text-gray-500 text-sm mt-2">
              {" "}
              پاسخ به پرسش های متداول{" "}
            </Link>
            <Link className="text-gray-500 text-sm mt-2">
              {" "}
              رویه های بازگرداندن کالا{" "}
            </Link>
            <Link className="text-gray-500 text-sm mt-2"> شرایط استفاده </Link>
            <Link className="text-gray-500 text-sm mt-2"> حریم خصوصی </Link>
            <Link className="text-gray-500 text-sm mt-2"> گذارش باگ </Link>
          </div>
          <div className="inline-flex mr-12  flex-col">
            <p className="text-gray-800 font-semibold">
              {" "}
              راهنمای خرید از وبمارکت{" "}
            </p>
            <Link className="text-gray-500 text-sm mt-2"> نحوه ثبت سفارش</Link>
            <Link className="text-gray-500 text-sm mt-2">
              {" "}
              رویه ارسال سفارش
            </Link>
            <Link className="text-gray-500 text-sm mt-2"> شیوه های پرداخت</Link>
          </div>

          <div className="grid gap-5 mr-12 ">
            <p className="text-gray-800 font-semibold w-fit">
              همراه ما باشید !
            </p>
            <div className="flex gap-8 w-[370px] ">
              <a href="https://instagram.com/whosvesal">
                {" "}
                <img
                  className="w-8  cursor-pointer"
                  src={instagram}
                  alt="instagram"
                />
              </a>

              <a href="#">
                {" "}
                <img
                  className="w-8 cursor-pointer"
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
              <a href="https://github.com/itsVES4L">
                {" "}
                <img className="w-8 cursor-pointer" src={github} alt="github" />
              </a>
            </div>
            <p className="text-gray-800 font-semibold w-fit">
              با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </p>

            <div>
              <div className="flex mb-1 overflow-x-hidden flex-row-reverse gap-3">
               

              { formik.touched.email && !formik.errors.email ? <button  className="w-16 rounded-xl h-14  bg-[#2563EB] text-white">
                  ثبت
                </button> :<button  className="w-16 rounded-xl h-14  bg-[#b1b1b5cc]  text-white">
                  ثبت
                </button> }

                
                <input
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  id="email"
                  name="email"
                  type="text"
                  placeholder=" ایمیل شما"
                  className="px-3  bg-gray-300
                     focus:outline-none  w-80 h-14 rounded-xl"
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <span
                  className="bg-red-200 rounded-xl w-fit text-red-500 
                   text-xs"
                >
                  {formik.errors.email}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-6  text-center text-gray-500">
        <hr className="h-[2px] bg-gray-400" />
        <p className="mt-8">
          Made with ♥ by <a href="https://github.com/itsVES4L">Vesal</a>{" "}
        </p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
