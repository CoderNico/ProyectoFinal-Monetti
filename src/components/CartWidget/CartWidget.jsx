import { BsBackpack3 } from "react-icons/bs";
import { useContext } from "react";
import {CartContext}  from "../Context/CartContext";

export const CartWidget = () => {
    const {totalItems} = useContext(CartContext);
  return (
    <button className='relative p-3'>
      <BsBackpack3 className='text-xl text-gray-600 dark:text-gray-400'/>
        <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
        <strong> {totalItems} </strong>
        </div>
    </button>
  );
};


