import Container from '@/components/Container/Container.tsx';
import { useTranslation } from 'react-i18next';
import Button from '@/components/Button/Button.tsx';

export default function ForWhom() {
    const { t } = useTranslation();

  return (
    <section>
      <Container>
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 lg:m-8">
          <div className="flex-1 p-4 lg:p-8">
            <picture>
                <source media="(min-width: 1440px)" srcSet="./images/ForWhom/ForWhom-desktop.webp" type="image/webp" />
                <source media="(min-width: 1440px)" srcSet="./images/ForWhom/ForWhom-desktop.jpg" type="image/jpeg" />
                <source media="(min-width: 768px)" srcSet="./images/ForWhom/ForWhom-tablet-mobile.webp" type="image/webp" />
                <source media="(min-width: 768px)" srcSet="./images/ForWhom/ForWhom-tablet-mobile.jpg" type="image/jpeg" />
                <img src="./images/ForWhom/ForWhom-tablet-mobile.jpg" alt={t('for-whom-image-alt')} className="w-full h-auto rounded-3xl" loading="lazy" decoding="async"/>
            </picture>
          </div>
          <div className="flex flex-1 flex-col justify-center p-4 lg:p-8">
            <h2 className='text-2xl font-bold mb-4'>{t('for-whom-title')}</h2>
            <p className='mb-2 md:mb-4'>{t('for-whom-paragraph-1')}</p>
            <p className='mb-2'>{t('for-whom-paragraph-2')}</p>
            <Button />
          </div>
        </div>
      </Container>
    </section>
  );
}
