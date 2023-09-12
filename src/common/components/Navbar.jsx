import React from 'react';
import { Link } from 'react-router-dom';

//icon
import shopping from '../../assets/icon/shopping.svg'

const Navbar = () => {
    return (
        <div className='flex' >
            <ul className='bg-gray-200 mr-24 h-12 items-center shadow-sm text-xs pr-8 flex gap-4 p-3 w-[65%] rounded-lg ' >

<li className='hover:text-blue-500 hover:border-b-2 border-dashed  rounded-sm
pb-1 border-blue-400' >
    <Link> کالای دیجیتال </Link>
</li>
<li className='hover:text-blue-500 hover:border-b-2 border-dashed  rounded-sm
pb-1 border-blue-400' >
    <Link> خانه و آشپزخانه </Link>
</li>
<li className='hover:text-blue-500 hover:border-b-2 border-dashed  rounded-sm
pb-1 border-blue-400'>
    <Link> ابزار و اداری </Link>
</li>
<li className='hover:text-blue-500 hover:border-b-2 border-dashed  rounded-sm
pb-1 border-blue-400' >
    <Link> لوازم تحریر و هنر </Link>
</li>
<li className='hover:text-blue-500 hover:border-b-2 border-dashed  rounded-sm
pb-1 border-blue-400' >
    <Link> مد و پوشاک </Link>
</li>
<li className='hover:text-blue-500 hover:border-b-2 border-dashed  rounded-sm
pb-1 border-blue-400' >
    <Link> آرایشی و بهداشتی </Link>
</li>

            </ul>
            <div> 
                <button className='bg-green-400  w-40 h-12 rounded-lg relative text-xs 
                flex gap-2
                text-white mr-10  ' > 
                <img className='w-6 absolute top-1/4 right-3' src={shopping} alt="icon" />
                <span className='absolute left-1/3 top-1/4'>سبد خرید </span>
                <span className='bg-white absolute  left-4  text-green-600 w-5 text-center items-center   h-5 top-1/4  rounded-xl'> 0 </span> 
                
                 </button>
                 </div>
        </div>
    );
};

export default Navbar;