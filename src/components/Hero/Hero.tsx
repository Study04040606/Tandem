import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';

export default function Hero () {
     const { t } = useTranslation();  

    return (
        <section className={`${styles.hero} flex flex-col justify-center items-center relative w-full bg-cover bg-center aspect-16/6 bg-no-repeat`}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-neutral-100 text-center">
                <p className='text-lg lg:text-3xl py-2'>
                    {t('hero-first-text')}
                </p>
                <h1 className='text-3xl lg:text-6xl font-bold my-4 lg:my-16 whitespace-pre-line leading-[1.3]'>
                    {t("hero-title")}
                </h1>
                <p className='text-lg lg:text-3xl py-2'>
                    {t('hero-second-text')}
                </p>
            </div>
        </section>
    )
};