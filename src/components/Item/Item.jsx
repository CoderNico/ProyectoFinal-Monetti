import { Link } from "react-router-dom";



export const Item = ({id, name, img, price, category}) => {
  return (
          <div className="flex justify-center">
            <div className="w-full
             items-center text-center m-5 group">
            <div className="justify-start text-left">
            <img src={img} alt="" className="w-full align-middle bg-cover"/>
            <h5 className="w-16 font-bold group-hover:-translate-y-4 m-1">{price}€ </h5>
            </div>
              <div className="font-mono uppercase text-left">
                <h3 className="m-1">{name} </h3>
                <h3 className=" text-gray-400 m-1">{category} </h3>
                <Link to={`/item/${id}`}>
                <button className=" bg-zinc-900 text-white m-1 w-full rounded hover:scale-105 hover:shadow-md">Ver Más</button>
                </Link>
              </div>
              </div>
          </div>
  );
};
