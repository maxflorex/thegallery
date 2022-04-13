import { Link } from 'react-router-dom';
import logo from '../img/logos/tg-logow-1.svg';

const Navbar = () => {
    const links = 'text-xl text-white p-2 hover:bg-oragnge-600';

    return (
        <div className="bg-black">
            <div className="container mx-auto py-12">
                <div className="flex justify-between mx-4">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-40" />
                    </Link>
                    <div className="md:flex gap-4 items-center hidden">
                        <Link className={links} to="/artists">
                            artist
                        </Link>
                        <Link className={links} to="/artworks">
                            artwork
                        </Link>
                        <Link className={links} to="/about">
                            about
                        </Link>
                        <Link className={links} to="/gallery">
                            gallery
                        </Link>
                        <Link className={links} to="/login">
                            login
                        </Link>
                        <Link className={links} to="/contact">
                            contact
                        </Link>
                    </div>
                    <div className="flex items-center md:hidden">
                        <h1 className='text-white text-xl cursor-pointer'>menu</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
