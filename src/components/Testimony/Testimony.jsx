import { ThumbsUp } from "@phosphor-icons/react";
import { testimonyData } from "../../data/testimonyData";
import { useLocation } from "react-router-dom";

export default function Testimony() {
    const location = useLocation();
    const isTestimonyPage = location.pathname === "/testimony";

    const testimoniesToDisplay = isTestimonyPage ? testimonyData : testimonyData.slice(0, 3);

    return (
        <section>
            <div className="py-8 w-full">
                <h1 className='mb-8 font-bold text-3xl text-center xl:text-4xl text-[#FC8A22]'>Testimony</h1>

                <div className="flex flex-wrap justify-around">
                    {testimoniesToDisplay.map((testimony, index) => (
                        <div key={index} className="bg-red-5 category-item w-full md:w-1/3 p-6 md:p-8 pt-12 md:pt-14">
                            <div className="relative h-full w-full bg-gray-50 px-4 shadow-[-3px_3px_20px_0px_rgba(0,0,0,0.10)] rounded-2xl flex flex-col items-center">
                                <div className="relative w-24 md:w-28 flex justify-center">
                                    <img
                                        src={testimony.profile}
                                        alt={testimony.name}
                                        className="absolute w-full object-cover rounded-full shadow-[-3px_3px_20px_0px_rgba(0,0,0,0.10)] transform -top-1/2 -translate-y-1/2"
                                    />
                                </div>
                                <div className="space-for-img h-16 md:h-20 w-full"></div>
                                <div className="bg-green-10 h-full pt-2 pb-4 md:pt-4 md:pb-8 w-full flex gap-3 flex-col items-center justify-between">
                                    <div className="text-center">
                                        <h3 className="font-semibold mb-2 text-base md:text-lg">
                                            {testimony.name}
                                        </h3>
                                        <span className="">
                                            {testimony.review}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ThumbsUp size={24} color="#374151" weight="duotone" />
                                        <span>
                                            ({testimony.likeCount})
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
