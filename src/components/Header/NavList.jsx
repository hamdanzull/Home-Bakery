import { NavLink } from 'react-router-dom';


const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About Us' },
    { to: '/categories', text: 'Categories' },
    { to: '/place', text: 'Place' },
    { to: '/testimony', text: 'Testimony' },
    { to: '/contact', text: 'Contact' },
];

export default function NavList() {
    return (
        <nav className='hidden xl:block'>
            <ul className='flex'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.to} className={
                            ({ isActive }) => `px-3 cursor-pointer transition-colors duration-300 ${isActive ? 'text-[#FC8A22] font-semibold' : ''}`
                        }>{link.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}