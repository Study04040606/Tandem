import { Link } from 'react-router-dom';
import logo from '@/assets/logo.svg';

const Header = () => {
return (
    <header>
        <nav className="navbar shadow-sm">
            <div className="navbar-start">
                <Link className="" to="/">
                    <img src={logo} alt="Zukunft Akademie Logo" className="inline-block" />                    
                </Link>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/programs">Programs</Link>
                        </li>
                        <li>
                            <Link to="/participate">Participate</Link>
                        </li>
                        <li>
                            DE
                        </li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> </svg>
                    </div>
                    <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-neutral-100 rounded-box z-1 mt-3 w-30 p-2 shadow">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/programs">Programs</Link>
                        </li>
                        <li>
                            <Link to="/participate">Participate</Link>
                        </li>
                        <li>
                            DE
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
};

export default Header;