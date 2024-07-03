/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink, useParams } from "react-router-dom";
import { categoriesData } from "../data/categoryData";
import { ArrowSquareOut, ShoppingCart, Star } from "@phosphor-icons/react";
import { useState } from "react";
import FixedButton from "../components/FixedButton";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const CategoryItem = ({ item, categoryId }) => {
    const [buttonText, setButtonText] = useState('Add to Cart');
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        const storedCart = localStorage.getItem('cart');
        let cart = storedCart ? JSON.parse(storedCart) : [];

        const existingItem = cart.find(cartItem => cartItem.itemId === item.id && cartItem.categoryId === categoryId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ categoryId, itemId: item.id, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        setButtonText('Success');
        setIsClicked(true);
        setTimeout(() => {
            setButtonText('Add to Cart');
            setIsClicked(false);
        }, 1000);
    };

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

    return (
        <div className="category-item w-1/2 md:w-1/2 lg:w-1/4 p-4 pt-14 md:pt-24">
            <div className="relative h-full px-4 md:px-5 bg-gray-50 shadow-[-3px_3px_20px_0px_rgba(0,0,0,0.10)] rounded-2xl flex flex-col items-center">
                <div className="relative w-24 md:w-40 flex justify-center">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="absolute w-full object-cover rounded-full shadow-[-3px_3px_20px_0px_rgba(0,0,0,0.10)] transform -top-1/2 -translate-y-1/2"
                    />
                </div>
                <div className="bg-red-5 space-for-img h-12 md:h-20 w-full"></div>
                <div className="bg-green-10 pt-2 pb-4 md:pt-4 md:pb-8 w-full flex gap-3 md:gap-5 flex-col items-center">
                    <h3 className="font-semibold text-center text-base md:text-lg">
                        {item.name}
                    </h3>
                    <span className="font-semibold text-[#FC8A22]">
                        {formatCurrency(item.price)}
                    </span>
                    <div className="flex scale-75 md:scale-100">
                        <Star size={18} color="#FBB02C" weight="fill" />
                        <Star size={18} color="#FBB02C" weight="fill" />
                        <Star size={18} color="#FBB02C" weight="fill" />
                        <Star size={18} color="#FBB02C" weight="fill" />
                        <Star size={18} color="#FBB02C" weight="fill" />
                        <span className="font-semibold text-sm ml-2">
                            ({item.rating})
                        </span>
                    </div>

                    <button
                        className={`bg-[#FC8A22] text-[#F7F7FA] font-medium text-sm w-32 py-2 rounded-full flex items-center justify-center gap-1 ${isClicked ? 'bg-green-500' : 'hover:bg-[#ee8322] active:ring-2 active:ring-[#ffbf88]'}`}
                        onClick={handleClick}
                        disabled={isClicked}
                    >
                        {!isClicked && <ShoppingCart size={18} color="#F7F7FA" weight="bold" />}
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function CategoryDetail() {
    const { id } = useParams();
    const category = categoriesData.find((cat) => cat.id === parseInt(id));

    if (!category) {
        return <div className="text-center font-bold text-3xl">Category not found</div>;
    }

    return (
        <>
            <Header />
            <section>
                <div className="py-8 w-full px-4 mx-auto max-w-2xl md:px-0 lg:max-w-screen-xl">
                    <h1 className='mb-8 font-bold text-3xl text-center xl:text-4xl text-[#FC8A22]'>
                        {category.name}
                    </h1>

                    <div className="flex flex-wrap justify-center">
                        {category.items.map((item) => (
                            <CategoryItem key={item.id} item={item} categoryId={category.id} />
                        ))}
                    </div>
                </div>
            </section>
            <FixedButton />
            <Footer />
        </>
    );
}
