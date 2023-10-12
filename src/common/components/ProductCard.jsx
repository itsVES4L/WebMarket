import React from 'react';
import { star } from '../../assets';

const product1 = {
    rate: "4.5",
    price: "4152000",
    title: "گوشی موبایل سامسونگ مدل Galaxy A14",
    des: "دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت - ویتنام",
    img: "https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1681112650.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
  };

const ProductCard = ({product}) => {
    return (
        <div className='hover:shadow-2xl border-[1px] transition-shadow ease-in delay-300 text-center cursor-pointer flex flex-col justify-center bg-white p-3 rounded-lg h-[427px] w-[323px]'  >
<img className='h-1/2  m-8 ' src={product1.img} alt="pic" />
<div className='flex  flex-col gap-2 h-1/2 relative  items-center'>
    <p className=' font-bold text-black '>{product.title}</p>
    <p className='text-gray-500 text-xs  w-[90%] max-h-[90px]'>{product.description}</p>
    <div className='flex absolute left-3 bottom-10 flex-row-reverse gap-2 justify-center items-center w-12 h-8'>
       
        <img className='w-4' src={star} alt="" />
<span className='text-black text-xs font-[iran]' >{product.rate}</span>
        
    </div>

    <p className='text-gray-700 absolute left-4 bottom-4  font-bold font-[iran]' >{(+product.price).toLocaleString()} <span className="font-[graphic]">
                    <i class="icony icony-toman"></i>{" "}
                  </span></p>

                  <p className='text-blue-500 font-[iran] font-bold absolute right-8 bottom-4 cursor-pointer ' >خرید</p>
</div>


            
        </div>
    );
};

export default ProductCard;