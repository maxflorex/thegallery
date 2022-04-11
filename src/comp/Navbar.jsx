import { Link } from 'react-router-dom';

const Navbar = () => {
    const links = 'text-xl font-semibold text-white p-2 hover:bg-oragnge-600';

    return (
        <div className="bg-orange-500">
            <div className="container mx-auto py-12">
                <div className="flex justify-between">
                    <Link className={links} to="/">
                        Home
                    </Link>
                    <Link className={links} to="/artists">
                        Artist
                    </Link>
                    <Link className={links} to="/artworks">
                        Artwork
                    </Link>
                    <Link className={links} to="/about">
                        About
                    </Link>
                    <Link className={links} to="/gallery">
                        Gallery
                    </Link>
                    <Link className={links} to="/login">
                        login
                    </Link>
                    <Link className={links} to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
