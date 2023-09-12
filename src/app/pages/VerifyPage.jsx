import React, { useEffect } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import pic from "../../assets/login.jpg";
import loading from '../../assets/gif/loading.gif';

import { useNavigate } from "react-router-dom";

import { verify } from "../../features/users/authUserSlice";
import { useDispatch, useSelector } from "react-redux";

const VerifyPage = () => {
  const navigate = useNavigate();

  const token = useSelector((state) => state.authVerify.token);
  const isLoggedIn = useSelector((state) => state.authVerify.isLoggedIn);
  const error = useSelector((state) => state.authVerify.error);
  const isLoading = useSelector((state) => state.authVerify.isLoading);
  const userData = useSelector((state) => state.authLogin.phone);

  useEffect(() => {
    if (isLoggedIn && !error) {
      navigate("/");
    } else {
      console.log(error);
    }
  }, [isLoggedIn]);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (values) => {
      dispatch(verify(values));
    },
    validationSchema: Yup.object({
      code: Yup.string().required("لطفا این قسمت را خالی نگذارید"),
    }),
  });

  return (<>
  
  
  <section className="  w-screen bg-gray-50 h-screen  flex items-center justify-center ">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="  sm:w-1/2,  px-16 py-16 ">
          <h2 className="font-bold text-xl mb-10 text-[#002d74]">
            {" "}
            کد تایید را وارد کنید{" "}
          </h2>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 ">
            <div className="relative">
              <p className="text-sm mb-2 w-50  text-[#002d74] ">
                {" "}
                کد تایید برای شماره {userData} پیامک شد{" "}
              </p>

              <input
                maxLength={6}
                className="p-2 w-64 rounded-xl mt-3
                focus:outline-gray-300 
                "
                name="code"
                id="code"
                onChange={formik.handleChange}
                value={formik.values.code}
                type="text"
                placeholder=" کد تایید "
              />
              {formik.touched.code && formik.errors.code ? (
                <span
                  className="bg-red-200 rounded-xl w-fit text-red-500 
                  font-bold text-sm"
                >
                  {formik.errors.code}
                </span>
              ) : null}
            </div>
            <button
              type="submit"
              className="  hover:bg-[#faba98ac] bg-[#fabb98] rounded-xl h-15 
              flex
              justify-center
              item-center
              text-white py-2 "
            >
              {isLoading ? <img className="w-10" src={loading} alt="loading" /> : " تایید "}
            </button>
          </form>
        </div>
        {/* <img src={loading} alt="loading" /> */}
        <div className="sm:w-1/2, sm:block hidden mr-10">
          <img className="rounded-2xl" src={pic} alt="picture" />
        </div>
      </div>
    </section>
  </>
  );
};

export default VerifyPage;
