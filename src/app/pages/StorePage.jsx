import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsList } from "../../features/products/getProductsListSlice";
import {
  Footer,
  Header,
  ProductCard,
  ProductCardLoading,
} from "../../common/components";
import { Link } from "react-router-dom";
// import { GET_DATA } from '../services/API';

export default function StorePage() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsList());
  }, []);

  const isLoggedIn = useSelector((state) => state.productList.isLoggedIn);
  const error = useSelector((state) => state.productList.error);
  const isLoading = useSelector((state) => state.productList.isLoading);

  const productList = useSelector((state) => state.productList.productList);
  console.log(productList);

  return (
    <>
      <Header />
      <div className="flex justify-center items-center ">
        <div className=" flex flex-row flex-wrap gap-2 p-4  w-fit bg-white  justify-center rounded-lg h-fit ">
          {isLoading
            ? arr.map((product, i) => <ProductCardLoading />)
            : productList.map((product, i) => (
               <Link to={'/product/details'}>
                <ProductCard product={product} key={i} />
              </Link>
              ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
