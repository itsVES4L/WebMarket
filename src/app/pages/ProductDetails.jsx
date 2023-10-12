import React from "react";
import { Link } from "react-router-dom";
import { Comment, Footer, Header } from "../../common/components";

const ProductDetails = () => {
  

  return (

    <>
    <Header/>
    <div className=" h-fit p-10 ">
      <div className="flex flex-col gap-10">
        <div className="w-full   gap-10 flex  flex-row items-center">
          <div className="w-2/5 ">
            <img
              className="max-h-screen rounded-2xl "
              src="https://www.thespruce.com/thmb/i428zoKWoFbwAXPB6KkZyQ-6cWU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roundhillbestaccentchairsforsmallspaces-1bfebd7d87bf42bea3b8445f39236eac.jpg"
              alt=""
            />
          </div>
          <div className="flex   h-fit gap-10 flex-col">
            <div className=" border-b-[1px] p-3 flex flex-col gap-3">
              <p className="text-2xl font-bold">
                صندلی گیمینگ گرین لاین مدل Chair Pro GNCHAIR
              </p>
              <Link to="#" className="text-gray-400">
                {" "}
                خانه و آشپزخانه{" "}
              </Link>
            </div>
            <div className="p-6 flex flex-row gap-10 ">
              <span className="text-gray-400"> رنگ :</span>
              <div className="flex gap-5 flex-row"></div>
            </div>
            <div className="w-full  flex flex-row h-40  justify-around gap-3">
              <div className="flex flex-col gap-3">
                <span className="text-gray-400"> قیمت : </span>
                <p className="font-[iran] font-medium text-xl text-black select-none">
                  {" "}
                  5,000,000{" "}
                  <span className="font-[graphic]">
                    <i class="icony icony-toman"></i>{" "}
                  </span>{" "}
                </p>
              </div>

              <div className="flex flex-col  gap-3">
                <span className="text-gray-400"> تعداد : </span>
                <div className="bg-gray-200 w-32 flex items-center flex-row justify-between p-2 rounded-full  shadow-inner h-8">
                  <button className="bg-white flex items-center justify-center rounded-xl text-center font-serif font-bold text-blue-700 w-6 h-6 shadow-lg">
                    +
                  </button>
                  <span className="font-[iran] flex justify-center items-center text-black w-10 h-full text-center">
                    2
                  </span>
                  <button className="bg-white flex items-center justify-center rounded-xl text-center font-serif font-bold text-blue-700 w-6 h-6 shadow-lg">
                    -
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-blue-400 w-60 h-12 rounded-xl text-white ">
                افزودن به سبد خرید{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 ">
          <ul className=" flex justify-around h-10 border-b-[2px] w-full  flex-row gap-10">
            <li className="border-b-2 w-1/3 text-center border-blue-400">
              دیدگاه ها
            </li>
            <li className=" w-1/3 text-center">مشخصات</li>
            <li className=" w-1/3 text-center">معرفی</li>
          </ul>

          {/* <div className="flex flex-col gap-3 text-sm hidden p-5">
            <p>
              {" "}
              <span className="text-gray-400"> جنس : </span>{" "}
              <span className="text-black"> پارچه </span>{" "}
            </p>
            <p>
              {" "}
              <span className="text-gray-400"> جنس کفی :</span>{" "}
              <span className="text-black"> فوم قابل انعطاف، نایلون</span>{" "}
            </p>
            <p>
              {" "}
              <span className="text-gray-400"> جنس پایه </span>{" "}
              <span className="text-black"> چوب </span>{" "}
            </p>
          </div> */}<div className="  w-[90vw]  p-4">
            <Comment name={"علیرضا محمدی"} des={" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه ن گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و ی روزنامه و مجله در ستون و سطرآنچنان که لازم است، و ی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد." } title={"جنس محصول"} />

            <Comment name={"دانیال فرهمند"} des={" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه ن گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و ی روزنامه و مجله در ستون و سطرآنچنان که لازم است، و ی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد." } title={"دوخت محصول"} />
         
          </div>
        </div>

        
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductDetails;
