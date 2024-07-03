import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function AboutPage() {
    return (
        <>
            <Header />
            <section>
                <div className='py-8 w-full px-4 mx-auto max-w-2xl md:px-0 lg:max-w-screen-xl'>
                    <h1 className='mb-8 font-bold text-3xl text-center xl:text-4xl text-[#FC8A22]'>About Us</h1>
                    <p className=''>
                        Selamat datang di <a href="/" className="font-semibold text-[#FC8A22]">Home Bakery</a>, tempat di mana kami menghadirkan cita rasa autentik dan kualitas premium dalam setiap gigitan. Kami berkomitmen untuk menyediakan produk bakery yang tidak hanya lezat tetapi juga terjangkau untuk semua pelanggan kami. Setiap produk dibuat dengan bahan-bahan pilihan yang higienis dan diproses dengan standar sanitasi tertinggi untuk memastikan kepuasan Anda.
                    </p>
                    <p className='mt-2'>
                        Kami percaya bahwa setiap hidangan yang kami sajikan adalah representasi dari dedikasi kami terhadap kualitas dan rasa. Dari roti yang lembut hingga kue yang menggoda, setiap produk kami diolah dengan cermat untuk memberikan pengalaman kuliner yang luar biasa. Kami terus berinovasi untuk memenuhi kebutuhan dan selera Anda, dengan menjaga kualitas yang konsisten.
                    </p>
                    <p className='mt-2'>
                        Landing page ini dibuat sebagai bagian dari tugas akhir mata kuliah Digital Bisnis. Terima kasih telah mengunjungi kami dan menikmati produk-produk yang kami tawarkan. Mari bersama-sama menciptakan momen indah dengan cita rasa yang tak terlupakan dari Home Bakery.
                    </p>

                    <table className="mt-4 table-auto w-full md:w-1/3 text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b-2 border-gray-300 pb-2 text-center">No</th>
                                <th className="border-b-2 border-gray-300 pb-2 text-center">Nama</th>
                                <th className="border-b-2 border-gray-300 pb-2 text-center">NIM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-b py-2 text-center">1</td>
                                <td className="border-b py-2">Muhammad Hamdan Zulfa</td>
                                <td className="border-b py-2 text-center">21.11.4039</td>
                            </tr>
                            <tr>
                                <td className="border-b py-2 text-center">2</td>
                                <td className="border-b py-2">Mahardika Wildan Fitrian</td>
                                <td className="border-b py-2 text-center">21.11.4036</td>
                            </tr>
                            <tr>
                                <td className="border-b py-2 text-center">3</td>
                                <td className="border-b py-2">Asrul Sepriawan Dwiantono</td>
                                <td className="border-b py-2 text-center">21.11.3991</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </section>
            <Footer />
        </>
    )
}