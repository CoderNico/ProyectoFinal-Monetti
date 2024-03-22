import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { Carousel } from "../Carouse/Carouse";

export const Home = () => {
  return (
    <>
    <Carousel/>
    <h1 className="text-4xl uppercase pb-6  mt-4 mb-4 text-center font-bold">Productos Destacados</h1>
        <div className="container justify-center align-middle cursor-pointer text-center flex items-center gap-4 mb-44">
            <Link to="/category/botas">
            <div className="p-3">
                <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/destacados_297x353_0124_adidas.webp"/>
                <h2 className="h-7 mt-1 rounded-full ring-2 ring-black text-xl font-semibold sm">Botas de fútbol</h2>
            </div>
            </Link>
            <Link to="/category/guantes">
            <div className="p-3 ">
                <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/cromos_297x353_sp_agosto23.webp" />
                <h2 className="h-7 mt-1 rounded-full ring-2 ring-black text-xl font-semibold">Guantes de portero</h2>
            </div>
            </Link>
            <Link to="/category/equipacion">
            <div className="p-3">
                <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/cromos_297x353_rm_junio23.webp" />
                <h2 className="h-7 mt-1 rounded-full ring-2 ring-black text-xl font-semibold">Equipaciones de fútbol</h2>
            </div >
            </Link>
            <Link to="/category/accesorios">
            <div className="p-3">
                <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/accesorios_297x353_adidas1023.webp"/>
                <h2 className="h-7 mt-1 rounded-full ring-2 ring-black text-xl font-semibold">Accesorios</h2>
            </div>
            </Link>
        </div>
        <h1 className="text-4xl uppercase pb-6 pt-2 mt-2 mb-4 text-center font-bold">Novedades</h1>
        <hr className="size-2 w-full bg-black  "/>
        <ItemListContainer />
    </>
  )
}


