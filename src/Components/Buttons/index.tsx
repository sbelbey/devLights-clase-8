"use client";

import { useContext } from "react";
import { CartContext } from "../CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity?: number;
  image: string;
}

export default function AddCartButton({
  text,
  className,
  product,
}: {
  text: string;
  className?: string;
  product: Product;
}) {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { addToCart } = cartContext;

  return (
    <button
      className={`${className}`}
      onClick={() => addToCart({ ...product, quantity: 1 })}
    >
      {text}
    </button>
  );
}

export function LookProduct({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return <button className={`${className}`}>{text}</button>;
}
