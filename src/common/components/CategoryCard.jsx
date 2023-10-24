import React from 'react';

const CategoryCard = ({url,title}) => {
    return (
        <div className="bg-white  flex flex-col items-center  rounded-xl p-6 sm:max-h-64  shadow-sm hover:shadow-2xl transition-shadow ease-in  delay-300 text-center cursor-pointer">
        <img
          className="w-40"
          src={url}
          alt={title}
        />
        <p className="mt-4 text-sm sm:text-lg"> {title} </p>
      </div>
    );
};

export default CategoryCard;