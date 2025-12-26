import { Link } from 'react-router-dom';

const Header = () => {
return (
    <header>
        <nav className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <Link className="btn btn-ghost text-xl" to="/">Logo</Link>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>
                                <Link to="/">Home</Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/programs">Programs</Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/participate">Participate</Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                DE
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> </svg>
                    </div>
                    <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a>
                                <Link to="/">Home</Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/programs">Programs</Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/participate">Participate</Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                DE
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
    </header>
    );
};

export default Header;