import { NavLink } from 'react-router-dom';


const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/categories', text: 'Categories' },
    { to: '/contact', text: 'Contact' },
    { to: '/testimony', text: 'Testimony' },
];

export default function NavList() {
    return (
        <nav className='hidden xl:block'>
            <ul className='flex'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.to} className={
                            ({ isActive }) => `px-6 cursor-pointer transition-colors duration-300 ${isActive ? 'text-[#FC8A22] font-semibold' : ''}`
                        }>{link.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}