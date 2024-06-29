import Benefits from '../components/Bennefits/Benefits';
import Categories from '../components/Categories/Categories';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/hero';
import Place from '../components/Place/Place';

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Benefits />
            <Categories />
            <Place />
        </>
    )
}