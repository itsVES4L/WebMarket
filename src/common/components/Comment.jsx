import React from "react";

const Comment = ({ name, des, title }) => {
  return (
    <div className="relative  w-[500px] bg-gray-200 m-3 p-4  gap-3 rounded-xl min-h-[150px] h-fit ">
      
     
     

      <div className=" flex flex-col    h-full  ">
        <p className=" text-lg font-bold   ">{name} <span className=" text-sm text-gray-400  "> ({title}) </span>  </p>
       
        <p className="p-3 w-[90%]  text-gray-500 h-fit text-sm">{des}</p>
      </div>
      <dir>
        {" "}
        <button className="absolute left-10 bottom-5 text-blue-500">
          {" "}
          پاسخ{" "}
        </button>{" "}
      </dir>
    </div>
  );
};

export default Comment;
