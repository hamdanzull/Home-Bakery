export default function Footer() {
    return (
        <footer className="bg-gray-600 text-[#F7F7FA] font-light">
            <div className="">


                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8
                w-full px-4 mx-auto max-w-2xl md:px-0 lg:max-w-screen-xl">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="flex flex-col gap-3">
                            <li className=""><a href="#about" className="hover:text-[#FC8A22] transition-all duration-300">About Us</a></li>
                            <li className=""><a href="#careers" className="hover:text-[#FC8A22] transition-all duration-300">Careers</a></li>
                            <li className=""><a href="#blog" className="hover:text-[#FC8A22] transition-all duration-300">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Order</h3>
                        <ul className="flex flex-col gap-3">
                            <li className=""><a href="#how-to-order" className="hover:text-[#FC8A22] transition-all duration-300">How to Order</a></li>
                            <li className=""><a href="#delivery" className="hover:text-[#FC8A22] transition-all duration-300">Delivery</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                        <ul className="flex flex-col gap-3">
                            <li className=""><a href="#contact" className="hover:text-[#FC8A22] transition-all duration-300">Contact Us</a></li>
                            <li className=""><a href="#support" className="hover:text-[#FC8A22] transition-all duration-300">Support</a></li>
                            <li className=""><a href="#location" className="hover:text-[#FC8A22] transition-all duration-300">Location</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul className="flex flex-col gap-3">
                            <li className=""><a href="#facebook" className="hover:text-[#FC8A22] transition-all duration-300">Facebook</a></li>
                            <li className=""><a href="#twitter" className="hover:text-[#FC8A22] transition-all duration-300">Twitter</a></li>
                            <li className=""><a href="#instagram" className="hover:text-[#FC8A22] transition-all duration-300">Instagram</a></li>
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