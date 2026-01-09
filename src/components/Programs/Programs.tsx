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
                        <Card imageSrc={'./images/Programs/ForeignLanguages/Programs-foreign-languages-mobile.webp'} imageAlt={t('programs-foreign-languages-image-alt')} title={t('programs-foreign-languages-title')} description={t('programs-foreign-languages-lead')} link={"/programs#foreign-languages"} />
                        <Card imageSrc={'./images/Programs/IT/Programs-it-tablet-mobile.webp'} imageAlt={t('programs-it-image-alt')} title={t('programs-it-title')} description={t('programs-it-lead')} link={"/programs#it"} />
                        <Card imageSrc={'./images/Programs/BusinessEducation/Programs-business-education-tablet-mobile.webp'} imageAlt={t('programs-business-education-image-alt')} title={t('programs-business-education-title')} description={t('programs-business-education-lead')} link={"/programs#business-education"} />
                        <Card imageSrc={'./images/Programs/SocialEducation/Programs-social-education-tablet-mobile.webp'} imageAlt={t('programs-social-education-image-alt')} title={t('programs-social-education-title')} description={t('programs-social-education-lead')} link={"/programs#social-education"} />
                        <Card imageSrc={'./images/Programs/AcademicEducation/Programs-academic-education-tablet-mobile.webp'} imageAlt={t('programs-academic-education-image-alt')} title={t('programs-academic-education-title')} description={t('programs-academic-education-lead')} link={"/programs#academic-education"} />
                        <Card imageSrc={'./images/Programs/ScienceCreativity/Programs-science-creativity-tablet-mobile.webp'} imageAlt={t('programs-science-creativity-image-alt')} title={t('programs-science-creativity-title')} description={t('programs-science-creativity-lead')} link={"/programs#science-creativity"} />
                    </div>
                </div>
           </Container>
        </section>
    )
}