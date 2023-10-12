import React from "react";

const ProductCardLoading = () => {
  return (
    <div
      role="status"
      className="max-w-sm flex sm:flex-col p-4 h-[172px] w-[390px] sm:h-[427px] sm:w-[323px] border-[1px] border-gray-200 rounded-xl shadow animate-pulse md:p-6 dark:border-gray-300"
    >

      <div className="flex items-center justify-center h-[118px] w-[218px] sm:w-[273px] sm:h-1/2 mb-4 bg-gray-200 rounded dark:bg-gray-200"></div>

<div className="p-2 w-full">
     <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-28 sm:w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-200 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-200 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-200"></div>
      <div className="flex items-center mt-4 space-x-3">
</div>

     
        <div className="sm:mt-10 mt-8 w-full flex flex-col justify-end items-end">
          <div className="h-2.5   bg-gray-200 rounded-full dark:bg-gray-200 w-32 mb-10 sm:mb-2"></div>
          <div className="w-48 hidden sm:block h-2 bg-gray-200 rounded-full dark:bg-gray-200"></div>
        </div>
      </div>
      {/* <span className="sr-only">Loading...</span> */}
    </div>
  );
};

export default ProductCardLoading;
