import { Link } from 'react-router-dom';
import logo from '@/assets/logo.svg';

const currentYear = new Date().getFullYear(); 

type SvgIconProps = {
  icon: string,
  size: string
};

const IconSvg = ({icon, size}: SvgIconProps) => (
   <svg className={`mr-2 fill-neutral-700`} width={size} height={size} >
       <use href={`images/sprite.svg#icon-${icon}`} />
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
             <div className="grid grid-flow-col gap-4 md:place-self-center md:justify-self-end w-full">
                <a className='p-3 transition duration-300 ease-in-out hover:scale-110' href="https://chat.whatsapp.com/FrP7zc2iuDa7EqR1ignynk?mode=wwt" target="_blank" title='WhatsApp' aria-label='WhatsApp'>
                    <IconSvg icon='whatsapp' size="24"/>
                </a>
                <a className='p-3 transition duration-300 ease-in-out hover:scale-110' href="https://m.me/academy.azb" target="_blank" title='Facebook Messenger' aria-label='Facebook Messenger'>
                    <IconSvg icon='facebook-bold' size="26"/>
                </a>
                <a className='p-3 transition duration-300 ease-in-out hover:scale-110' href="https://t.me/+jPWba-XEAG9hNDdi" target="_blank" title='Telegram' aria-label='Telegram'>
                    <IconSvg icon='telegram' size="24"/>
                </a>
            </div>
        </aside>
        <div>
            <p className="footer-title">Adresse</p>
            <p>Ettenhofener Str. 48A</p>
            <p>82234 Weßling</p>
            <p>Deutschland</p>
            <div className='flex items-center'>
                <IconSvg icon='envelope' size="16"/>
                <a className='link link-hover' href="mailto:info@zukunft-akademie.de">info@zukunft-akademie.de</a>
            </div>
        </div>
        <nav>
            <p className="footer-title">Seite</p>
            <Link className="link link-hover" to="/">
              Home                     
            </Link>
            <Link className="link link-hover" to="/programs">
              Programme                     
            </Link>
            <Link className="link link-hover" to="/participate">
              Mitmachen                     
            </Link>
        </nav>
        <nav>
            <p className="footer-title">Rechtlich</p>
            <Link className="link link-hover" to="/legal-notice"> {/* Impressum */}
              Impressum                     
            </Link>
            <Link className="link link-hover" to="/data-protection"> {/* Datenschutz */}
              Datenschutz                     
            </Link>
            <Link className="link link-hover" to="/cookie-policy">
              Cookie-Richtung                    
            </Link>
        </nav>
    </footer>
    );
};

export default Footer;