import { ArrowLineUp, ShoppingCart } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function FixedButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setIsVisible(true); else setIsVisible(false);
        };

        window.addEventListener('scroll', toggleVisibility);

        // Get cart item count from local storage
        const getCartItemCount = () => {
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                const cart = JSON.parse(storedCart);
                const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
                setCartItemCount(itemCount);
            }
        };

        getCartItemCount();

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className='fixed z-10 bottom-8 right-8 md:bottom-20 md:right-20 flex flex-col gap-3 md:gap-4'>
            <button onClick={() => window.scroll(0, 0)}
                className={`w-14 h-14 md:w-16 md:h-16 bg-[#FC8A22] hover:bg-[#ee8322] active:ring-2 active:ring-[#ff983f] rounded-full flex items-center justify-center ${isVisible ? 'block' : 'hidden'}`}>
                <ArrowLineUp className="w-6 h-6 md:w-8 md:h-8" color="#F7F7FA" weight="bold" />
            </button>

            <NavLink to="/cart">
                <button className="w-14 h-14 md:w-16 md:h-16 bg-[#FC8A22] hover:bg-[#ee8322] active:ring-2 active:ring-[#ff983f] rounded-full flex items-center justify-center relative">
                    <span className="bg-[#F7F7FA] absolute -top-1 -right-1 h-6 w-6 rounded-full flex items-center justify-center">{cartItemCount}</span>
                    <ShoppingCart className="w-6 h-6 md:w-8 md:h-8" color="#F7F7FA" weight="bold" />
                </button>
            </NavLink>
        </div>
    )
}