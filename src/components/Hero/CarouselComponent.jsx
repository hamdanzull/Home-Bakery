import carousel_1 from '../../assets/carousel-1.jpg'
import carousel_2 from '../../assets/carousel-2.jpg'
import carousel_3 from '../../assets/carousel-3.jpg'
import { Flowbite } from "flowbite-react";
import { Carousel } from "flowbite-react"

export default function CarouselComponent() {
    return (
        <div className="h-56 md:h-96">
            <Flowbite theme={{ theme: customTheme }}>
                <Carousel>
                    <img src={carousel_1} alt="Carousel-1" />
                    <img src={carousel_2} alt="Carousel-2" />
                    <img src={carousel_3} alt="Carousel-3" />
                </Carousel>
            </Flowbite>
        </div>
    )
}

const customTheme = {
    carousel: {
        "root": {
            "base": "relative h-full w-full",
            "leftControl": "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
            "rightControl": "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
        },
        "indicators": {
            "active": {
                "off": "w-[12px] h-[12px] md:w-[16px] md:h-[16px] bg-white/50 hover:bg-white",
                "on": "h-[12px] w-[24px] md:h-[16px] md:w-[33px] bg-[#FC8A22]"
            },
            "base": "h-3 w-3 rounded-full",
            "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
        },
        "item": {
            "base": "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
            "wrapper": {
                "off": "w-full flex-shrink-0 transform cursor-default snap-center",
                "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
            }
        },
        "control": {
            "base": "inline-flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#FC8A22]/40 group-hover:bg-[#FC8A22]/50 group-focus:outline-none group-active:ring-4 group-active:ring-[#FC8A22]/60 ",
            "icon": "h-6 w-6 md:h-8 md:w-8 text-white/50"
        },
        "scrollContainer": {
            "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
            "snap": "snap-x"
        }
    }
};