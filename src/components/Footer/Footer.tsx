import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IconSvg from './IconSvg';
import logo from '@/assets/logo.svg';

const currentYear = new Date().getFullYear(); 

const Footer = () => {
    const { t } = useTranslation();

return (
    <footer className="footer sm:footer-horizontal bg-neutral-200 text-neutral-900 p-10 relative bottom-0">
        <aside>
            <Link className="" to="/">
                <img src={logo} alt="Zukunft Akademie Logo" className="inline-block h-[60px]" />                    
            </Link>
            <p>
                © {currentYear}  Akademie Zukunft & Bildung
            </p>
            <p>
                ({t('footer-unregistered-association')})
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
            <p className="footer-title">{t('footer-address')}</p>
            <p>Ettenhofener {t('footer-address-street')} 48A</p>
            <p>82234 {t('footer-address-city')}</p>
            <p>{t('footer-address-country')}</p>
            <div className='flex items-center'>
                <IconSvg icon='envelope' size="16"/>
                <a className='link link-hover' href="mailto:info@zukunft-akademie.de">info@zukunft-akademie.de</a>
            </div>
        </div>
        <nav>
            <p className="footer-title">{t('footer-website')}</p>
            <Link className="link link-hover" to="/">
              {t('footer-website-home')}                     
            </Link>
            <Link className="link link-hover" to="/programs">
              {t('footer-website-programs')}                     
            </Link>
            <Link className="link link-hover" to="/participate">
              {t('footer-website-participate')}                     
            </Link>
        </nav>
        <nav>
            <p className="footer-title">{t('footer-legal')}</p>
            <Link className="link link-hover" to="/legal-notice"> {/* Impressum */}
              {t('footer-legal-legal-notice')}                    
            </Link>
            <Link className="link link-hover" to="/data-protection"> {/* Datenschutz */}
              {t('footer-legal-data-protection')}                     
            </Link>
            <Link className="link link-hover" to="/cookie-policy">
              {t('footer-legal-cookie-policy')}                   
            </Link>
        </nav>
    </footer>
    );
};

export default Footer;