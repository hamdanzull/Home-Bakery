import { Envelope, FacebookLogo, InstagramLogo, MapPin, WhatsappLogo } from "@phosphor-icons/react";

export default function Contact() {
    return (
        <section className="bg-[#F7F7FA]">
            <div className="py-8 pb-12 w-full px-4 mx-auto max-w-2xl md:px-0 lg:max-w-screen-xl">
                <h1 className='mb-8 font-bold text-3xl text-left xl:text-4xl text-[#FC8A22]'>Our Contact</h1>
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.08077889175294!2d110.40776877479932!3d-7.758775100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599959732bf7%3A0x4993d8e585a4e8f4!2sJl.%20Nusa%20Indah%2C%20Ngringin%2C%20Condongcatur%2C%20Kec.%20Depok%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055281!5e0!3m2!1sid!2sid!4v1719652436454!5m2!1sid!2sid"
                        className="w-full lg:w-1/2 h-[350px] md:h-[450px] rounded-lg ring-2 ring-gray-300"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="flex flex-col gap-3 justify-center">
                        <a href="http://wa.me/628975004004" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1 md:gap-2 hover:text-[#FC8A22] transition-all duration-300">
                            <WhatsappLogo className="w-5 md:w-6 h-5 md:h-6" color="#FC8A22" weight="duotone" />
                            <span>
                                +62 897-5004-004
                            </span>
                        </a>
                        <a href="http://instagram.com/" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1 md:gap-2 hover:text-[#FC8A22] transition-all duration-300">
                            <InstagramLogo className="w-5 md:w-6 h-5 md:h-6" color="#FC8A22" weight="duotone" />
                            <span>
                                @home.bakery
                            </span>
                        </a>
                        <a href="http://facebook.com/" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1 md:gap-2 hover:text-[#FC8A22] transition-all duration-300">
                            <FacebookLogo className="w-5 md:w-6 h-5 md:h-6" color="#FC8A22" weight="duotone" />
                            <span>
                                Home Bakery
                            </span>
                        </a>
                        <a href="http://gmail.com/" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1 md:gap-2 hover:text-[#FC8A22] transition-all duration-300">
                            <Envelope className="w-5 md:w-6 h-5 md:h-6" color="#FC8A22" weight="duotone" />
                            <span>
                                rumah.bakery@gmail.com
                            </span>
                        </a>
                        <div className="flex gap-1 md:gap-2">
                            <MapPin className="w-5 md:w-6 h-5 md:h-6" color="#FC8A22" weight="duotone" />
                            <div className="w-full md:w-96 flex flex-col items-start gap-3">
                                <span className="hover:text-[#FC8A22] transition-all duration-300">
                                    Jl. Nusa Indah, Ngringin, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                                </span>
                                <a href="https://maps.app.goo.gl/ZVkyBG5e4wYmMqiH8" className='bg-[#FC8A22] text-[#F7F7FA] font-medium text-sm px-3 py-2 rounded-full'>Open Gmaps</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}