import bakery from '../../assets/bakery-transparent.png'
import CarouselComponent from './CarouselComponent'
import lapis_batang from '../../assets/lapis-batang.jpg'
import blackforest_cake from '../../assets/blackforest-cake.jpg'
import Card from './Card'

export default function Hero() {
    return (
        <section>
            <CarouselComponent />

            <div className='relative flex flex-col xl:flex-row items-end xl:items-center xl:h-96'>
                <div className='pt-5 xl:pt-0 w-full px-4 mx-auto max-w-2xl xl:px-0 lg:max-w-screen-xl'>
                    <h1 className='font-bold text-3xl xl:text-4xl'>Home Bakery</h1>
                    <p className='mt-3 xl:w-1/2 xl:mt-5'>Dibuat dengan ketelatenan oleh para ahli roti kami, setiap produk kami adalah perpaduan sempurna antara rasa autentik dan sentuhan kreatif modern.</p>
                </div>

                <img className='h-96 xl:h-full xl:absolute right-0 top-0' src={bakery} alt="Bakery" />

                <div className='absolute right-0 bottom-0 xl:bottom-auto xl:top-0 xl:-translate-x-[50%] xl:translate-y-[10%]
                md:-translate-x-[80%] md:translate-y-[-50%]
                sm:-translate-x-[50%] sm:translate-y-[-50%]
                translate-x-[5%] translate-y-[-40%]
                scale-75 sm:scale-100'>
                    <Card image={lapis_batang} title="Lapis Legit Coklat" rating="5.0" />
                </div>

                <div className='absolute right-0 bottom-0 xl:-translate-x-[165%] xl:translate-y-[-10%]
                md:-translate-x-[195%] md:translate-y-[-10%]
                sm:-translate-x-[165%] sm:translate-y-[-10%]
                -translate-x-[80%] translate-y-[0%]
                scale-75 sm:scale-100'>
                    <Card image={blackforest_cake} title="Blackforest Cake" rating="4.9" />
                </div>

            </div>

        </section>
    )
}