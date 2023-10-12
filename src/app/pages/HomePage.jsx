import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { LOGOUT } from "../../services/API";

import { digitalBanner } from "../../assets";
import { getProductsList } from "../../features/products/getProductsListSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Footer,
  Header,
  ProductCard,
  ProductCardLoading,
} from "../../common/components";

const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsList()).then();
  }, []);
  
  const isLoggedIn = useSelector((state) => state.productList.isLoggedIn);
  const error = useSelector((state) => state.productList.error);
  const isLoading = useSelector((state) => state.productList.isLoading);
 

  const logOutHandler = () => {
    // LOGOUT("/auth/logout/");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white overflow-x-hidden  ">
        <section className="  max-w-screen">
          {/* //Banner */}

          <div className=" mb-10 flex justify-center">
            <div className="relative w-fit">
              <div className="absolute top-10 right-10 sm:top-24 sm:right-20  flex flex-col justify-center items-center gap-6">
                <h3 className="text-bold  left-32 top-28  sm:text-3xl">
                  {" "}
                  بهترین کالای دیجیتال <br />
                  را از{" "}
                  <span className="font-[logo] text-2xl font-bold sm:text-5xl text-blue-700 rotate-12">
                    {" "}
                    وبمارکت{" "}
                  </span>{" "}
                  بخرید ...
                </h3>
                <Link className=" rounded-lg bg-blue-600 text-white sm:text-lg text-xs pb-2 px-8 sm:p-1 sm:w-48  left-48 sm:bottom-16  text-center  ">
                  {" "}
                  خرید{" "}
                </Link>
              </div>
              <img
                className="  bg-cover w-[98vw] sm:w-[86vw] rounded-xl h-44  sm:h-80 cursor-pointer "
                src={digitalBanner}
              />
            </div>
          </div>

          {/* 
// Category */}

          <div className=" sm:w-screen flex justify-center mb-10">
            <div
              className="
                bg-gray-200 flex flex-col  items-center w-fit p-8 shadow-xl   rounded-3xl "
            >
              <p className=" mb-6 text-2xl">
                {" "}
                دسته بندی های{" "}
                <span className="font-[logo]  font-bold text-5xl text-blue-700 rotate-12">
                  {" "}
                  وبمارکت{" "}
                </span>{" "}
              </p>

              <div className="  grid grid-cols-3  justify-center items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  gap-4 ">





                <div className="bg-white  flex flex-col items-center  rounded-xl p-6 sm:h-64 w-[200px] shadow-sm hover:shadow-2xl transition-shadow ease-in delay-300 text-center cursor-pointer">
                  <img
                    className="w-40"
                    src="https://www.hypershop.com/cdn/shop/products/MicrosoftTeams-image_45_b904358c-da41-4816-8cc7-55e44cf5c211_1024x1024.jpg?v=1676654143"
                    alt="ساعت"
                  />
                  <p className="mt-4">کالای دیجیتال</p>
                </div>
                <div className="bg-white  flex flex-col items-center  rounded-xl p-6 sm:h-64 w-[200px] shadow-sm hover:shadow-2xl transition-shadow ease-in delay-300 text-center cursor-pointer">
                  <img
                    className="w-40"
                    src="https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                    alt="عکس"
                  />
                  <p className="mt-4"> موبایل </p>
                </div>
                <div className="bg-white  flex flex-col items-center  rounded-xl p-6 sm:h-64 w-[200px] shadow-sm hover:shadow-2xl transition-shadow ease-in  delay-300 text-center cursor-pointer">
                  <img
                    className="w-40"
                    src="https://dkstatics-public.digikala.com/digikala-products/fb08089406e270d15ef5bcf9475d0078b74852c1_1674574858.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                    alt="عکس"
                  />
                  <p className="mt-4"> مد و پوشاک</p>
                </div>
                <div className="bg-white  flex flex-col items-center  rounded-xl p-6 sm:h-64 w-[200px] shadow-sm hover:shadow-2xl transition-shadow ease-in  delay-300 text-center cursor-pointer">
                  <img
                    className="w-40"
                    src="https://dkstatics-public.digikala.com/digikala-products/abc769f82171fb0d67b6f61fc21d52f36804a7ba_1662355794.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                    alt="عکس"
                  />
                  <p className="mt-4"> خانه و آشپزخانه</p>
                </div>
                <div className="bg-white flex flex-col items-center rounded-xl p-6 sm:h-64 w-[200px] shadow-sm hover:shadow-2xl transition-shadow ease-in delay-300 text-center cursor-pointer">
                  <img
                    className="w-40"
                    src="https://dkstatics-public.digikala.com/digikala-products/367a87093530a231848ce0e28453c93b34d427a5_1659334108.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                    alt="عکس"
                  />
                  <p className="mt-4"> لوازم تحریر و هنر</p>
                </div>
                <div className="bg-white  flex flex-col items-center  rounded-xl p-6 sm:h-64 w-[200px] shadow-sm hover:shadow-2xl transition-shadow ease-in  delay-300 text-center cursor-pointer">
                  <img
                    className="w-40"
                    src="https://dkstatics-public.digikala.com/digikala-products/b2c0eb53f0eeacdefb8771155bf5e4887222a654_1672051046.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                    alt="عکس"
                  />
                  <p className="mt-4"> لپ تاپ </p>
                </div>
                <div className="bg-white  flex flex-col items-center  rounded-xl p-6 sm:h-64 w-[200px] shadow-sm hover:shadow-2xl transition-shadow  ease-in delay-300 text-center cursor-pointer">
                  <img
                    className="w-40"
                    src="https://dkstatics-public.digikala.com/digikala-products/f549c48174cf8a15e7c192166f7afdf01b077c60_1690963563.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                    alt=""
                  />
                  <p className="mt-4"> آرایشی و بهداشتی </p>
                </div>

                <div className="bg-white flex flex-col items-center rounded-xl p-6 sm:h-64 w-[200px] shadow-sm hover:shadow-2xl transition-shadow ease-in delay-300 text-center cursor-pointer">
                  <img
                    className="w-40"
                    src="https://dkstatics-public.digikala.com/digikala-products/29eba33e742fcbe13761a25fbf1f0c01e292ce57_1689853757.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                    alt=""
                  />
                  <p className="mt-4"> ابزار آلات </p>
                </div>
                
              </div>
            </div>
          </div>

          {/*  */}

          <div className="flex items-center justify-center  h-fit">
            <div className="flex   flex-col gap-x-2 gap-y-10 ">
              <div className="grid grid-cols-2 px-2  sm:p-0 gap-x-2 ">
                <div className="w-[48vw] p-1 sm:w-[580px] sm:h-[200px] rounded-lg bg-cover ">
                  {" "}
                  <img
                    className=" cursor-pointer rounded-lg"
                    src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c8fc13b6748c0fc4378211c065023f8371244e74_1696162095.jpg?x-oss-process=image/quality,q_95/format,webp"
                    alt=""
                  />
                </div>
                <div className="w-[48vw] p-1 sm:w-[580px] sm:h-[200px] rounded-lg bg-cover">
                  <img
                    className=" cursor-pointer rounded-lg"
                    src="https://dkstatics-public.digikala.com/digikala-adservice-banners/bd432fa6d92617248136bbd0c241590ab30936b2_1680504728.jpg?x-oss-process=image/quality,q_95/format,webp"
                    alt=""
                  />
                </div>
              </div>

              <div className=" sm:w-[1170px] sm:h-[150px] col-span-2  rounded-lg bg-cover">
                <img
                  className=" cursor-pointer rounded-lg"
                  src="https://dkstatics-public.digikala.com/digikala-adservice-banners/bd8615f608fee4f12aa66a9cd368df31efc1af39_1693908604.jpg?x-oss-process=image/quality,q_95/format,webp"
                  alt=""
                />
              </div>
            </div>
          </div>

        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
