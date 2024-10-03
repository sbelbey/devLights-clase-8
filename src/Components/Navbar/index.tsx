/* eslint-disable @typescript-eslint/no-empty-object-type */
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    return (
        <div className="bg-blue-600 min-w-screen">
            <ul className="flex justify-evenly text-4xl p-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/productos">Productos</Link>
                </li>
                <li>
                    <Link href="/carrito">
                        <Image
                            width={50}
                            height={50}
                            src={"icons/cart_icon.svg"}
                            alt="Carrito de compras"
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
