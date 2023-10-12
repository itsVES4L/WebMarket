import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

//icon
import {phone} from "../../assets";

import logpic from "../../assets/logpic.jpg";

import { useNavigate, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/users/authUserSlice";

const RegisterAndLoginPage = () => {
  const navigate = useNavigate();

  const error = useSelector((state) => {
    state.authLogin.error;
  });
  const isLoading = useSelector((state) => {
    state.authLogin.isLoading;
  });

  

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: (values) => {
      dispatch(login(values));

      !error ? navigate("/auth/verify") : console.log(error);
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(/^(\+98|0)?9\d{9}$/, "شماره موبایل نادرست است")
        .required("لطفا این قسمت را خالی نگذارید"),
    }),
  });

  return (
    <div>
      <section className="bg-cyan-50  flex items-center justify-center w-screen h-screen">
        <div className="bg-gray-100  flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="sm:w-1/2  px-16 py-16 ">
            <h2 className="font-bold mb-10 text-2xl text-[#000000]">
              {" "}
              ورود | ثبت‌نام
            </h2>

            <p className="text-sm w-60 mb-4 mt-4  ">
              {" "}
              لطفا شماره موبایل خود را وارد کنید{" "}
            </p>

            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-6 "
            >
              <div className="flex flex-col min-w-51 w-fit gap-2">
                <div className="relative">
                  <input
                    className="p-2 
                    placeholder:text-sm
                  w-60 rounded-xl min-w-full  focus:outline-gray-300 "
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="شماره موبایل"
                  />
                  <img
                    src={phone}
                    alt="icon"
                    className="absolute top-1/2 left-2 -translate-y-1/2"
                  />
                </div>
                {formik.touched.phone && formik.errors.phone ? (
                  <span
                    className="bg-red-200 rounded-xl w-fit text-red-500 
                   text-sm"
                  >
                    {formik.errors.phone}
                  </span>
                ) : null}
              </div>

              {/* <!-- bg-[#002d74] --> */}

              <button
                type="submit"
                className="min-w-51 hover:bg-[#74ea5d]  bg-[#A0E593] rounded-xl  text-white py-2 "
              >
                ورود
              </button>
            </form>
          </div>

          <div className="sm:w-1/2, sm:block hidden mr-10">
            <img className="rounded-2xl" src={logpic} alt="picture" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterAndLoginPage;
