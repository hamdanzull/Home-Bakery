import { Heart, Star } from "@phosphor-icons/react";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Card({ image, title, rating }) {
    return (
        <div className="w-[220px] h-[240px] bg-white rounded-[20px] p-2.5 flex flex-col shadow-[-5px_5px_20px_0px_rgba(0,0,0,0.20);] hover:shadow-[-5px_5px_30px_0px_rgba(0,0,0,0.30);] hover:scale-105 transition-all duration-300">
            <div className="w-full h-[140px] rounded-t-[10px] overflow-hidden relative">
                <img className="absolute inset-0 w-full h-full object-cover"
                    src={image} alt="Cover Image"
                />
            </div>
            <div className="flex-grow flex flex-col justify-center gap-2 p-2.5">
                <div className="flex items-center justify-between">
                    <span className="font-semibold">
                        {title}
                    </span>
                    <Heart size={24} color="#374151" weight="bold" />
                </div>
                <div className="flex items-center gap-2.5">
                    <Star size={24} color="#FBB02C" weight="fill" />
                    <span className="font-semibold">
                        {rating}
                    </span>
                </div>
            </div>
        </div>
    )
}