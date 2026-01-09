import { Trans, useTranslation } from 'react-i18next';
import Layout from '@/components/Layout/Layout.tsx';
import Hero from '@/components/Hero/Hero.tsx';
import AboutUs from '@/components/AboutUs/AboutUs.tsx';
import HalfImgAndText from '@/components/HalfImgAndText/HalfImgAndText';
import OnlyText from '@/components/OnlyText/OnlyText';
import Programs from '@/components/Programs/Programs';
import BigImgAndText from '@/components/BigImgAndText/BigImgAndText.tsx';

const HomePage = () => {
  const { t } = useTranslation();
  //TODO: почему не появляется <0> элемент?
  const SucsessParagraph1 = (
    <Trans
      i18nKey="sucsess-paragraph-1"
      components={{
        0: <p />,
        1: <p />,
        2: <p />,
        3: <p />,
      }}
    />
  );

  return (
    <Layout>
      <Hero />
      <AboutUs />
      <HalfImgAndText
        isButtonVisible={true}
        isReverse={false}
        title={t('for-whom-title')}
        text={[t('for-whom-paragraph-1'), t('for-whom-paragraph-2')]}
        subtitles={[]}
        picture={{
          sources: [
            {
              media: '(min-width: 1440px)',
              src: './images/ForWhom/ForWhom-desktop.webp',
              type: 'image/webp',
            },
            {
              media: '(min-width: 1440px)',
              src: './images/ForWhom/ForWhom-desktop.jpg',
              type: 'image/jpeg',
            },
            {
              media: '(min-width: 360px)',
              src: './images/ForWhom/ForWhom-tablet-mobile.webp',
              type: 'image/webp',
            },
            {
              media: '(min-width: 360px)',
              src: './images/ForWhom/ForWhom-tablet-mobile.jpg',
              type: 'image/jpeg',
            },
          ],
          imgSrc: './images/ForWhom/ForWhom-desktop.jpg',
          imgAlt: t('for-whom-image-alt'),
        }}
      />
      <OnlyText
        title={t('what-you-get-title')}
        text={[
          t('what-you-get-paragraph-1'),
          t('what-you-get-paragraph-2'),
          t('what-you-get-paragraph-3'),
          t('what-you-get-paragraph-4'),
        ]}
      />
      <Programs />
      <OnlyText
        title={t('idea-title')}
        text={[t('idea-paragraph-1'), t('idea-paragraph-2'), t('idea-paragraph-3')]}
      />
      <BigImgAndText
        title={t('sucsess-title')}
        text={[SucsessParagraph1, t('sucsess-paragraph-2'), t('sucsess-paragraph-3')]}
        picture={{
          sources: [
            {
              media: '(min-width: 1440px)',
              src: './images/Sucsess/sucsess-desktop.webp',
              type: 'image/webp',
            },
            {
              media: '(min-width: 1440px)',
              src: './images/Sucsess/sucsess-desktop.jpg',
              type: 'image/jpeg',
            },
            {
              media: '(min-width: 768px)',
              src: './images/Sucsess/sucsess-tablet.webp',
              type: 'image/webp',
            },
            {
              media: '(min-width: 768px)',
              src: './images/Sucsess/sucsess-tablet.jpg',
              type: 'image/jpeg',
            },
            {
              media: '(min-width: 360px)',
              src: './images/Sucsess/sucsess-mobile.webp',
              type: 'image/webp',
            },
            {
              media: '(min-width: 360px)',
              src: './images/Sucsess/sucsess-mobile.jpg',
              type: 'image/jpeg',
            },
          ],
          imgSrc: './images/Sucsess/sucsess-desktop.jpg',
          imgAlt: t('programs-foreign-languages-image-alt'),
        }}
        isSubtitle={false}
      />
    </Layout>
  );
};

export default HomePage;
