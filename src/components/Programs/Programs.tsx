import { useTranslation } from 'react-i18next';
import Container from '@/components/Container/Container.tsx';
import Card from '@/components/Card/Card.tsx';

export default function Programs () {
    const { t } = useTranslation();  

    return (
        <section>
           <Container>
                <div className='p-4 lg:p-8 lg:m-8'>
                    <h2 className='text-2xl font-bold text-center mb-4'>
                         {t('programs-title')}
                    </h2>
                    <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <Card imageSrc={'./images/ForWhom/ForWhom-desktop.jpg'} imageAlt={t('program-1-image-alt')} title={t('program-1-card-title')} description={t('program-1-card-description')} link={"/programs"} />
                        <Card imageSrc={'./images/ForWhom/ForWhom-desktop.jpg'} imageAlt={t('program-1-image-alt')} title={t('program-1-card-title')} description={t('program-1-card-description')} link={"/programs"} />
                        <Card imageSrc={'./images/ForWhom/ForWhom-desktop.jpg'} imageAlt={t('program-1-image-alt')} title={t('program-1-card-title')} description={t('program-1-card-description')} link={"/programs"} />
                    </div>
                </div>
           </Container>
        </section>
    )
}