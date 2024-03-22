import { createContext, useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../components/Context/CartContext";

export const ItemDetail = ({id, description, img, price, stock, name}) => {

const {addItem} = useContext(CartContext);

const onAdd = (quantity) => {

  const item = {
    id,
    price,
    name
  };

  addItem(item, quantity)

}
  return (
        <div className=" container mt-12">
          <div className="justify-center grid grid-cols-7 gap-4">
          <div className="col-start-2 col-end-5 mt-8 mb-4 ml- ">
          <img className="w-full h-full ring-slate-200 ring shadow-black" src={img} alt="" />
          </div>
            <div className="col-span-2 m-10 w-full">
              <h5 className="m-4 text-center uppercase font-extrabold font-mono text-2xl ">{name}</h5>
              <hr className="size-2 w-full bg-black  "/>
              <p className="mt-4 text-lg p-2 mb-4">{description}</p>
              <hr />
              <p className="mt-72 text-3xl font-semibold mb-4 text-right">{price} €</p>
              <hr className="size-2 w-full bg-black  "/>
              <div className="mt-12 ml-2 mr-2 ">
                <ItemCount stock={stock} onAdd={onAdd} />
              </div>
            </div>
          </div>
        </div> 
  );
};


