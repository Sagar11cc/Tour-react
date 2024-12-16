// import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
    const [header, setHeader] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });
        //remove event
        return () => window.removeEventListener('scroll', scrollYPos)
    })




    return (

        <header className={`sticky mx-auto top-0 z-30   transition-all ${header ? 'bg-transparent py-6 bg-orange-100 shadow-lg ' : 'py-6'} `}>
            <div className='bg-transparent/75 px-4 fixed w-full z-50  top-0  py-2'>
                <div className='max-w-7xl mx-auto py-2 px-5 flex bg-transparent  justify-between items-center'>
                    <Link to='/'>
                        <h1 className="text-2xl text-white font-bold"><span className="text-red-500">Trip</span>Buddy</h1>
                    </Link>
                    <div className='flex items-center gap-5'>
                        <nav className='hidden md:flex gap-7'>
                            <ul className='flex items-center font-semibold text-white text-xl gap-7'>
                                {/* <li><Link to='/'>Home</Link></li> */}
                                <Link to='/'><li onClick={() => setShowMenu(false)}>Home</li></Link>
                                <Link to='/about'><li onClick={() => setShowMenu(false)}>About Us</li></Link>
                                <Link to='/tours'><li onClick={() => setShowMenu(false)}>Tours</li></Link>
                                <Link to='/gallery'><li onClick={() => setShowMenu(false)}>Gallery</li></Link>
                                <Link to='/contact'><li onClick={() => setShowMenu(false)}>Contact</li></Link>
                            </ul>
                                <Link to='#'><button onClick={() => setShowMenu(false)} className='bg-red-500 text-white px-4 py-1 rounded-md font-semibold'>Book Now</button></Link>
                        </nav>
                        {/* Mobile Hamburger icon */}
                        {showMenu ? (
                            <HiMenuAlt1
                                onClick={toggleMenu}
                                className='cursor-pointer transition-all md:hidden text-white'
                                size={30}
                            />
                        ) : (
                            <HiMenuAlt3
                                onClick={toggleMenu}
                                className='cursor-pointer transition-all md:hidden text-white'
                                size={30}
                            />
                        )}
                    </div>
                </div>
                <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
        </header>
    );
};

export default Navbar;