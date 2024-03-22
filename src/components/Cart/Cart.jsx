import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { BsCart3 } from "react-icons/bs";
import Swal from 'sweetalert2'

export const Cart = () => {

  const {cart, clearCart, removeItem, total} = useContext (CartContext);

  const handleDeleteItem = (item) => {

    Swal.fire({
      title: `¿Desea eliminar ${item.name} del carrito?`,
      text: "Se eliminara de forma permanente!",
      icon: "question",
      showCancelButton: true,
      showConfirmButton:true,

    }).then(resp => {
      if (resp.isConfirmed) {
        removeItem(item.id)
        Swal.fire({
          title: "Producto eliminado",
          icon: "success"
        });
      }
    });
  }
  
  return (
    <div className="grid grid-cols-3 ml-36 mr-36 mt-24 h-fit">
      <div className="col-span-2">
          <h1 className="text-5xl font-bold mb-14">Mi cesta</h1>
            {cart.map ((item) => (
              <div key={item.id} className="flex justify-between mr-8 mb-8">
              <p className="uppercase font-semibold text-3xl" key={item.id}>
                {item.name}
              </p>
              <p className="font-semibold text-2xl">{item.subTotal} 
                € 
              </p>
              <p className="text-xl text-center">
                Cantidad: {item.quantity}
              </p>
            <div className="">
                <button onClick={() => handleDeleteItem(item)}>
                <ImCross />
                </button>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-24">
        {total > 0 ? (
        <div className="">
          <h1 className="text-5xl font-bold mb-14">
            Resumen
          </h1>
          <hr className="size-1 w-full bg-black mb-4"/>
          <h4 className="flex h-full font-semibold font-mono text-xl mb-4">Total a pagar {total}
            €
          </h4> 
          <hr className="size-1 w-full bg-black mb-4"/>
          <button className="flex justify-center rounded h-12 w-4/5 items-center m-4 ml-10 font-semibold font-mono text-md bg-black text-white" onClick={clearCart}>
            Eliminar todos los productos
          </button>
          <Link to="/checkout">
            <button className="flex justify-center rounded h-12 w-4/5 items-center m-4 ml-10 font-semibold font-mono text-xl bg-orange-500 hover:bg-orange-400"> 
              Comprar ahora  <BsCart3 /> 
            </button>
          </Link>
        </div>
          ) : ( 
          <Link to="/">
            <h4 className="font-semibold font-mono text-xl" >
              Tu cesta está vacía. ¿Por qué no echas un vistazo a nuestros productos?
            </h4>
          </Link>
          )}
      </div>
    </div>
  )
}