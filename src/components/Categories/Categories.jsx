import { NavLink } from "react-router-dom"
import { categoriesData } from "../../data/categoryData"
import { ArrowSquareOut, Star } from "@phosphor-icons/react"

export default function Categories() {
    return (
        <section>
            <div className="py-8 w-full px-4 mx-auto max-w-2xl md:px-0 lg:max-w-screen-xl">
                <h1 className='mb-8 font-bold text-3xl text-center xl:text-4xl text-[#FC8A22]'>Our Popular Categories</h1>

                <div className="flex flex-wrap justify-center">
                    {categoriesData.map((category) => (
                        <div key={category.id} className="category-item w-1/2 md:w-1/2 lg:w-1/4 p-4 pt-14 md:pt-24">
                            <div className="relative px-4 md:px-5 h-full bg-gray-50 shadow-[-3px_3px_20px_0px_rgba(0,0,0,0.10)] rounded-2xl flex flex-col items-center">
                                <div className="relative w-24 md:w-40 flex justify-center">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="absolute w-full object-cover rounded-full shadow-[-3px_3px_20px_0px_rgba(0,0,0,0.10)] transform -top-1/2 -translate-y-1/2"
                                    />
                                </div>
                                <div className="bg-red-5 space-for-img h-12 md:h-20 w-full"></div>
                                <div className="bg-green-10 pt-2 pb-4 md:pt-4 md:pb-8 w-full flex gap-3 md:gap-5 flex-col items-center">
                                    <h3 className="font-semibold text-center text-base md:text-lg">
                                        {category.name}
                                    </h3>
                                    <div className="flex scale-75 md:scale-100">
                                        <Star size={18} color="#FBB02C" weight="fill" />
                                        <Star size={18} color="#FBB02C" weight="fill" />
                                        <Star size={18} color="#FBB02C" weight="fill" />
                                        <Star size={18} color="#FBB02C" weight="fill" />
                                        <Star size={18} color="#FBB02C" weight="fill" />
                                        <span className="font-semibold text-sm ml-2">
                                            ({category.rating})
                                        </span>
                                    </div>
                                    <NavLink
                                        to={`/categories/${category.id}`}
                                        className="flex items-center gap-1"
                                    >
                                        <span className="font-semibold text-[#FC8A22]">View More</span>
                                        <ArrowSquareOut size={16} color="#FC8A22" weight="duotone" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}