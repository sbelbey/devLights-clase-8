"use client";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../../Components/CartContext";

export default function Page() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Error: CartContext not found</div>;
  }

  const { cart } = cartContext;

  return (
    <div className="flex flex-col items-center m-3">
      <h1 className="font-bold text-2xl border-2 text-center w-60 rounded-md">
        Carrito de compras
      </h1>
      <div>
        {cart.map((item, index) => (
          <div key={index} className="flex m-4 items-center">
            <Image
              src={item.image}
              width={50}
              height={50}
              alt="item-image"
              className="rounded-t-lg border-2 bg-transparent"
            />
            <p>
              - {item.title} - Precio: ${item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
