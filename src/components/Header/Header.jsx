import { NavLink } from 'react-router-dom'
import logo from '../../assets/chef-hat.svg'
import NavList from './NavList'

export default function Header() {
    return (
        <header>
            <div className="h-[55px] bg-[#F7F7FA] flex items-center border-b-2 border-gray-200">
                <div className='flex items-center justify-between py-3.5 w-full px-4 mx-auto max-w-2xl md:px-0 lg:max-w-screen-xl'>

                    <div className="logo">
                        <a href="/" className='flex items-center justify-start gap-1'>
                            <img src={logo} alt="Logo" />
                            <h2 className="font-semibold text-2xl">HomeBakery</h2>
                        </a>
                    </div>

                    <NavList />

                    <NavLink to="/about" className='bg-[#FC8A22] text-[#F7F7FA] font-medium text-sm px-3 py-2 rounded-full'>About Us</NavLink>
                </div>
            </div>
        </header>
    )
}