import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

type CardProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    link?: string;
}

export default function Card ({imageSrc, imageAlt, title, description, link}: CardProps) {
    const { t } = useTranslation();

    return (
        <div className='border-neutral-200 rounded-lg shadow-md'>
            <div className='h-[250px] overflow-hidden'>
                <img className='w-full h-full rounded-t-lg object-cover object-center' src={imageSrc} alt={imageAlt} />
            </div>
            <div className='p-4'>
                 <h3 className='text-lg font-bold mb-4'>{title}</h3>
                    <p className='mb-4'>{description}</p>
                    {link && (
                        <HashLink smooth className="underline underline-offset-8 decoration-neutral-600 hover:underline-offset-2" to={link}>
                            {t('link-learn-more')} →
                        </HashLink>
                    )} 
            </div>
        </div>
    )
}