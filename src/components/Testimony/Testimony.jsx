import { ThumbsUp } from "@phosphor-icons/react"
import { testimonyData } from "../../data/testimonyData"

export default function Testimony() {
    // return (
    //     <section>
    //         <div className="py-8 w-full overflow-hidde">
    //             <h1 className='mb-8 font-bold text-3xl text-center xl:text-4xl text-[#FC8A22]'>Testimony</h1>

    //             <div className="flex">
    //                 {testimonyData.map((testimony, index) => (
    //                     <div key={index} className="bg-red-50 p-4 pt-14 md:pt-24">
    //                         <div className="relative h-full w-96 px-4 md:px-5 bg-gray-50 shadow-[-3px_3px_20px_0px_rgba(0,0,0,0.10)] rounded-2xl flex flex-col items-center">
    //                             <div className="relative w-24 md:w-24 flex justify-center">
    //                                 <img
    //                                     src={testimony.profile}
    //                                     alt={testimony.name}
    //                                     className="absolute w-full object-cover rounded-full shadow-[-3px_3px_20px_0px_rgba(0,0,0,0.10)] transform -top-1/2 -translate-y-1/2"
    //                                 />
    //                             </div>
    //                             <div className="bg-red-5 space-for-img h-12 md:h-24 w-full"></div>
    //                             <div className="bg-green-100 h-full pt-2 pb-4 md:pt-4 md:pb-8 w-full flex gap-3 flex-col items-center justify-between">
    //                                 <div className="text-center">
    //                                     <h3 className="font-semibold  text-base md:text-lg">
    //                                         {testimony.name}
    //                                     </h3>
    //                                     <span className="bg-red-100">
    //                                         {testimony.review}
    //                                     </span>
    //                                 </div>
    //                                 <div className="flex items-center gap-2">
    //                                     <ThumbsUp size={24} color="#374151" weight="duotone" />
    //                                     <span>
    //                                         ({testimony.likeCount})
    //                                     </span>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>

    //         </div>
    //     </section>
    // )
}