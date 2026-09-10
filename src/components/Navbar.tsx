import Logo from "../assets/logo-text.png"
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    
    return (
        <nav className="sticky top-0 bg-white z-50">
            <div className="flex justify-between items-center px-4 md:gap-4 container mx-auto py-4">
            <GiHamburgerMenu className="md:hidden" />   
            <img src={Logo} alt="logo" className="w-22 sm:w-30"/>
            <ul className="hidden md:flex gap-4">
                <li className="hover:text-pink-500 cursor-pointer text-pink-500"><a href="">Home</a></li>
                <li className="hover:text-pink-500 cursor-pointer"><a href="">Technologies</a></li>
                <li className="hover:text-pink-500 cursor-pointer"><a href="">Projects</a></li>
                <li className="hover:text-pink-500 cursor-pointer"><a href="">About</a></li>
                <li className="hover:text-pink-500 cursor-pointer"><a href="">Contact</a></li>
            </ul>
            <div>
            <button className="btn btn-outline btn-error text-black rounded-2xl border-0 hover:text-white max-w-21 max-h-6 md:max-w-full md:max-h-full">Sign In</button>
            <button className="btn btn-active btn-error text-white rounded-2xl max-w-21 max-h-6 md:max-w-full md:max-h-full">Sign Up</button>
            </div>
            </div>
            <div className="divider m-0"></div>
        </nav>
    )
}

export default Navbar;