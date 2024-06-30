import { Envelope, FacebookLogo, InstagramLogo, MapPin, WhatsappLogo } from "@phosphor-icons/react";

export default function Footer() {
    return (
        <footer className="bg-gray-600 text-[#F7F7FA] font-light">
            <div className="">


                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8
                w-full px-4 mx-auto max-w-2xl md:px-0 lg:max-w-screen-xl">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#about" className="hover:text-[#FC8A22] transition-all duration-300">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#categories" className="hover:text-[#FC8A22] transition-all duration-300">
                                    Categories
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-[#FC8A22] transition-all duration-300">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#testimony" className="hover:text-[#FC8A22] transition-all duration-300">
                                    Testimony
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Order</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="/" className="hover:text-[#FC8A22] transition-all duration-300">
                                    How to Order
                                </a>
                            </li>
                            <li>
                                <a href="/" className="hover:text-[#FC8A22] transition-all duration-300">
                                    Delivery Order
                                </a>
                            </li>
                            <li>
                                <a href="/" className="hover:text-[#FC8A22] transition-all duration-300">
                                    Reservation
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="https://maps.app.goo.gl/ZVkyBG5e4wYmMqiH8" target="_blank" rel="noopener noreferrer" className="hover:text-[#FC8A22] transition-all duration-300 flex items-start gap-1 md:gap-2">
                                    <MapPin className="flex-shrink-0 w-5 md:w-6 h-5 md:h-6" color="#FC8A22" weight="duotone" />
                                    <span className="flex-grow">
                                        Jl. Nusa Indah, Ngringin, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="http://wa.me/628975004004" target="_blank" rel="noopener noreferrer" className="hover:text-[#FC8A22] transition-all duration-300 flex items-center gap-1 md:gap-2">
                                    <WhatsappLogo className="flex-shrink-0 w-5 md:w-6 h-5 md:h-6" color="#FC8A22" weight="duotone" />
                                    <span className="flex-grow">
                                        +62 897-5004-004
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="http://gmail.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FC8A22] transition-all duration-300 flex items-center gap-1 md:gap-2">
                                    <Envelope className="flex-shrink-0 w-5 md:w-6 h-5 md:h-6" color="#FC8A22" weight="duotone" />
                                    <span className="flex-grow">
                                        rumah.bakery@gmail.com
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="http://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FC8A22] transition-all duration-300 flex items-center gap-1 md:gap-2">
                                    <InstagramLogo className="flex-shrink-0 w-5 md:w-6 h-5 md:h-6" color="#FC8A22" weight="duotone" />
                                    <span className="flex-grow">
                                        @home.bakery
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="http://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FC8A22] transition-all duration-300 flex items-center gap-1 md:gap-2">
                                    <FacebookLogo className="flex-shrink-0 w-5 md:w-6 h-5 md:h-6" color="#FC8A22" weight="duotone" />
                                    <span className="flex-grow">
                                        Home Bakery
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full h-[2px] bg-gray-500"></div>

                <div className="text-center h-[55px] flex items-center
                w-full px-4 mx-auto max-w-2xl md:px-0 lg:max-w-screen-xl">
                    <a href="/"><img src="chef-hat.svg" alt="Logo" /></a>
                    <p className="w-full">&copy; {new Date().getFullYear()} <a className="font-semibold text-[#FC8A22]" href="/">Home Bakery</a> - All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}