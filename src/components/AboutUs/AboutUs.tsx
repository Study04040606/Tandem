import { useTranslation } from 'react-i18next';
import Container from '@/components/Container/Container';

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section className='bg-neutral-200'>
      <Container>
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 lg:m-8">
          <div className="flex-1 p-4 lg:p-8">
            <h2 className="text-2xl font-bold mb-4">{t('about-us-title')}</h2>
            <p className="mb-2 md:mb-4">{t('about-us-paragraph-1')}</p>
            <p className="">{t('about-us-paragraph-2')}</p>
          </div>
          <div className="flex-1 p-4 lg:p-8">
            <div className="bg-primary/20 p-6 lg:p-12 rounded-3xl h-full flex items-center justify-center">
              <p className="italic text-lg">{t('about-us-quote')}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
