import { Trash, WhatsappLogo } from "@phosphor-icons/react";
import { categoriesData } from "../data/categoryData";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";

export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const cart = JSON.parse(storedCart);
            const detailedCartItems = cart.map(cartItem => {
                const category = categoriesData.find(cat => cat.id === cartItem.categoryId);
                const item = category.items.find(item => item.id === cartItem.itemId);
                return { ...item, quantity: cartItem.quantity, categoryId: cartItem.categoryId };
            });
            setCartItems(detailedCartItems);
        }
    }, []);

    const formatCurrency = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
            .format(number)
            .replace(/\s+/g, '');
    };

    const handleRemoveItem = (itemId, categoryId) => {
        const updatedCart = cartItems.filter(item => !(item.id === itemId && item.categoryId === categoryId));
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart.map(item => ({ categoryId: item.categoryId, itemId: item.id, quantity: item.quantity }))));
    };

    const handleQuantityChange = (itemId, categoryId, quantity) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId && item.categoryId === categoryId) {
                return { ...item, quantity: quantity < 1 ? 1 : quantity };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart.map(item => ({ categoryId: item.categoryId, itemId: item.id, quantity: item.quantity }))));
    };

    const handleIncreaseQuantity = (itemId, categoryId) => {
        handleQuantityChange(itemId, categoryId, cartItems.find(item => item.id === itemId && item.categoryId === categoryId).quantity + 1);
    };

    const handleDecreaseQuantity = (itemId, categoryId) => {
        handleQuantityChange(itemId, categoryId, cartItems.find(item => item.id === itemId && item.categoryId === categoryId).quantity - 1);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const generateWhatsAppLink = () => {
        const orderItems = cartItems.map((item, index) => `${index + 1}. ${item.name} _(qty. ${item.quantity})_ - ${formatCurrency(item.price * item.quantity)}`).join('%0A');
        const total = formatCurrency(calculateTotal());
        const message = `📋 *Home Bakery Order*%0A%0AHalo, saya ingin membeli item:%0A${orderItems}%0A%0ATotal pesanan: *${total}*%0A%0ANote:%0A- (Tulis catatan disini)`;
        return `https://wa.me/628975004004?text=${message}`;
    };

    return (
        <>
            <Header />
            <section>
                <div className="py-8 w-full px-4 mx-auto max-w-2xl md:px-0 lg:max-w-screen-xl">
                    <h1 className='mb-4 font-bold text-3xl text-center xl:text-4xl text-[#FC8A22]'>Carts</h1>

                    {cartItems.length > 0 ? (
                        <>
                            <ul className="flex flex-col gap-4">
                                {cartItems.map((item, index) => (
                                    <li key={index} className="bg-[#F7F7FA] rounded-xl flex items-center gap-3 p-2">
                                        <div className="image-container w-16 rounded-l overflow-hidden flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-grow flex flex-col gap-0.5">
                                            <span className="font-semibold">
                                                {item.name}
                                            </span>
                                            <span>
                                                {formatCurrency(item.price)}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 flex items-center border-4 border-gray-100 rounded-full overflow-hidden">
                                                <button
                                                    className="bg-[#FC8A22] active:bg-[#ee8322] text-white font-semibold w-6 h-full flex items-center justify-center"
                                                    onClick={() => handleDecreaseQuantity(item.id, item.categoryId)}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    className="h-full w-10 text-center border-none focus:ring-0 p-0
                                                [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => handleQuantityChange(item.id, item.categoryId, parseInt(e.target.value))}
                                                />
                                                <button
                                                    className="bg-[#FC8A22] active:bg-[#ee8322] text-white font-semibold w-6 h-full flex items-center justify-center"
                                                    onClick={() => handleIncreaseQuantity(item.id, item.categoryId)}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                                                onClick={() => handleRemoveItem(item.id, item.categoryId)}
                                            >
                                                <Trash size={18} color="#FFFFFF" weight="bold" />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 mb-4 font-semibold">
                                <span>Total: {formatCurrency(calculateTotal())}</span>
                            </div>
                            <a href={generateWhatsAppLink()}
                                className='bg-[#FC8A22] text-[#F7F7FA] font-medium text-sm px-3 py-2 rounded-full float-right flex items-center gap-1'>
                                <WhatsappLogo className="flex-shrink-0 w-5 h-5" color="#F7F7FA" weight="duotone" />
                                Order Now
                            </a>
                        </>
                    ) : (
                        <div className="text-center font-bold text-2xl">Your cart is empty</div>
                    )}
                </div>
            </section>
        </>
    );
}