import { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

//icon

import { search , person} from "../../assets";
import Navbar from "./Navbar";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.authVerify.isLoggedIn);



  



  return ( 
<>

<div className=" pt-4 sm:p-0 mb-4   z-50 sm:rounded-full border-dotted border-b-2 h-14  sm:h-40  sticky top-0 bg-white border-b-blue-300  ">
      <div className="bg-white mb-3 h-3/6 flex justify-around items-center ">
     

      
   
  
   
   <Link
          to={"/"}
          className="font-[logo] hidden sm:block font-bold text-5xl text-blue-600 "
        >
          {" "}
          <p> وبمارکت </p>{" "}
        </Link> 





                
                
             
        <div className="w-[90%] sm:w-[40%] relative ">
          <div
            className="bg-blue-400 
            hover:bg-blue-600 h-10
            absolute w-10 rounded-xl 
            flex
            justify-center
            items-center
            shadow-sm z-30 left-[-5px] cursor-pointer "
          >
            {" "}
            <img className="w-6" src={search} />{" "}
          </div>
          <input
            type="text"
            placeholder="جستجو در محصولات ..."
            id="search"
            className="bg-gray-200 focus:z-10 
            placeholder:text-gray-200
            sm:placeholder:text-gray-400
            shadow-sm h-10 z-0 rounded-lg sticky left-[0%] w-[100%] 
           outline-blue-300 py-1 placeholder:text-sm px-2 pr-4"
            
          />



<label htmlFor="search"   className="absolute  focus:z-1 sm:hidden  bg-gray-200 text-sm top-0 right-5 ">
    جستجو در     <span className="font-[logo] font-bold text-3xl text-blue-600 pr-1 "> وبمارکت  </span> 
</label>

        </div>

          
                
        <div className="w-[150px] hidden sm:block">
        {isLoggedIn ? (
          <ul className=" flex bg-gray-200 w-11 justify-center items-center  h-10 rounded-lg">
            <img src={person} className=" w-5  " alt="icon" />
          </ul>
        ) : (
          <Link
            to={"/auth/login"}
            className="bg-gray-200 
         h-10
         w-[10%] min-w-[150px] text-xs   flex gap-4 text-gray-500    rounded-lg shadow-sm items-center justify-center p-4 "
          >
            <img src={person} className="w-5 " alt="icon" />
            <span>ورود / ثبت نام </span>
          </Link>
        )}




</div> 







      </div>
      <Navbar />
    </div>

</>

    );
};

export default Header;
