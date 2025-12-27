import { Link } from 'react-router-dom';
import logo from '@/assets/logo.svg';

const currentYear = new Date().getFullYear(); 

type SvgIcon = {
  icon: string,
  size: string
};

const IconSvg = ({icon, size}: SvgIcon) => (
   <svg className={`inline-block w-${size} h-${size} mr-2 fill-neutral-700`}>
       <use href={`sprite.svg#icon-${icon}`} />
   </svg>
);

const Footer = () => {
return (
    <footer className="footer sm:footer-horizontal bg-neutral-200 text-neutral-700 p-10 relative bottom-0">
        <aside>
            <Link className="" to="/">
                <img src={logo} alt="Zukunft Akademie Logo" className="inline-block" />                    
            </Link>
            <p>
                © {currentYear}  Akademie Zukunft & Bildung
            </p>
            <p>
                (nicht eingetragener Verein)
            </p>
            <div className='flex items-center'>
                <IconSvg icon='envelope' size="4"/>
                <a href="mailto:info@zukunft-akademie.de">info@zukunft-akademie.de</a>
            </div>
             <div className="grid grid-flow-col gap-4 md:place-self-center md:justify-self-end w-full">
                <a href="https://chat.whatsapp.com/FrP7zc2iuDa7EqR1ignynk?mode=wwt" target="_blank" title='WhatsApp' aria-label='WhatsApp'>
                    <IconSvg icon='whatsapp' size="6"/>
                </a>
                <a href="https://m.me/academy.azb" target="_blank" title='Facebook Messenger' aria-label='Facebook Messenger'>
                    <IconSvg icon='facebook-bold' size="7"/>
                </a>
                <a href="https://t.me/+jPWba-XEAG9hNDdi" target="_blank" title='Telegram' aria-label='Telegram'>
                    <IconSvg icon='telegram' size="6"/>
                </a>
            </div>
        </aside>
        <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
    </footer>
    );
};

export default Footer;