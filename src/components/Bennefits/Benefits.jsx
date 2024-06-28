import { Crown, Grains, HandSoap, Tag, } from "@phosphor-icons/react";

const icons = {
    Crown: Crown,
    Grains: Grains,
    HandSoap: HandSoap,
    Tag: Tag,
};

const benefitsData = [
    {
        icon: "Crown",
        title: "Kualitas Premium",
        description: "Menciptakan produk-produk dengan rasa dan tekstur yang luar biasa, sesuai dengan standar premium."
    },
    {
        icon: "Grains",
        title: "Bahan Terbaik",
        description: "Dipilih secara cermat untuk memastikan setiap produk kami memiliki rasa yang autentik dan kualitas yang konsisten."
    },
    {
        icon: "HandSoap",
        title: "Kebersihan Terjaga",
        description: "Mengutamakan kebersihan dan sanitasi dalam setiap tahap produksi."
    },
    {
        icon: "Tag",
        title: "Harga Terjangkau",
        description: "Harga yang terjangkau untuk memastikan aksesibilitas bagi semua pelanggan kami, tanpa mengorbankan kualitas."
    }
];

export default function Benefits() {
    return (
        <section className="bg-[#F7F7FA]">
            <div className="py-8 w-full px-4 mx-auto max-w-2xl md:px-0 lg:max-w-screen-xl">

                <div className="flex flex-wrap justify-around">
                    {benefitsData.map((feature, index) => {
                        const IconComponent = icons[feature.icon];
                        return (
                            <div key={index} className="feature-item w-full md:w-1/2 lg:w-1/4">
                                <div className="p-5 bg-whit h-full flex flex-col items-center">
                                    <div className="w-[100px] h-[100px] bg-[#FFF0E6] flex items-center justify-center rounded-full">
                                        <IconComponent size={64} color="#FC8A22" />
                                    </div>
                                    <h3 className="text-lg font-semibold my-4">{feature.title}</h3>
                                    <p className="text-center">{feature.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    )
}