import { MapPin } from "@phosphor-icons/react";

export default function Place() {
    return (
        <section className="bg-[#F7F7FA]">
            <div className="py-8 w-full px-4 mx-auto max-w-2xl md:px-0 lg:max-w-screen-xl">
                <h1 className='mb-8 font-bold text-3xl text-left xl:text-4xl text-[#FC8A22]'>Our Place</h1>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.08077889175294!2d110.40776877479932!3d-7.758775100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599959732bf7%3A0x4993d8e585a4e8f4!2sJl.%20Nusa%20Indah%2C%20Ngringin%2C%20Condongcatur%2C%20Kec.%20Depok%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055281!5e0!3m2!1sid!2sid!4v1719652436454!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                <div className="flex flex-col md:flex-row items-start gap-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.08077889175294!2d110.40776877479932!3d-7.758775100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599959732bf7%3A0x4993d8e585a4e8f4!2sJl.%20Nusa%20Indah%2C%20Ngringin%2C%20Condongcatur%2C%20Kec.%20Depok%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055281!5e0!3m2!1sid!2sid!4v1719652436454!5m2!1sid!2sid"
                        className="w-full lg:w-1/2 h-[400px] md:h-[450px] rounded-lg ring-2 ring-gray-300"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="flex gap-3">
                        <MapPin size={28} color="#FC8A22" weight="duotone" />
                        <span className="w-full md:w-96">
                            Jl. Nusa Indah, Ngringin, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}