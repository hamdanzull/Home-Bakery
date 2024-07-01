import Benefits from '../components/Bennefits/Benefits';
import Categories from '../components/Categories/Categories';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/hero';
import Contact from '../components/Contact/Contact';
import Testimony from '../components/Testimony/Testimony';
import Footer from '../components/Footer/Footer';
import FixedButton from '../components/FixedButton';

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Benefits />
            <Categories />
            <Contact />
            <Testimony />
            <Footer />
            <FixedButton />
        </>
    )
}