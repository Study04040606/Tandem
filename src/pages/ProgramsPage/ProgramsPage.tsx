import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout/Layout.tsx';
import BigImgAndText from '@/components/BigImgAndText/BigImgAndText.tsx';
import Container from '@/components/Container/Container.tsx';
import HalfImgAndText from '@/components/HalfImgAndText/HalfImgAndText';

const ProgramsPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <div className="flex flex-col p-4 pb-0 lg:px-8 lg:mx-8 lg:-mb-8"> 
            <h1 className="text-3xl font-bold text-center my-4">{t('programs-title')}</h1>
            <p>{t('programs-paragraph-1')}</p>  
        </div>
      </Container>
      <BigImgAndText
        title={t('programs-foreign-languages-title')}
        text={[
          t('programs-foreign-languages-paragraph-1'),
          t('programs-foreign-languages-paragraph-2'),
        ]}
        picture={{
          sources: [
            {
              media: '(min-width: 1440px)',
              src: './images/Programs/ForeignLanguages/Programs-foreign-languages-desktop.webp',
              type: 'image/webp',
            },
            {
              media: '(min-width: 1440px)',
              src: './images/Programs/ForeignLanguages/Programs-foreign-languages-desktop.jpg',
              type: 'image/jpeg',
            },
            {
              media: '(min-width: 768px)',
              src: './images/Programs/ForeignLanguages/Programs-foreign-languages-tablet.webp',
              type: 'image/webp',
            },
            {
              media: '(min-width: 768px)',
              src: './images/Programs/ForeignLanguages/Programs-foreign-languages-tablet.jpg',
              type: 'image/jpeg',
            },
            {
              media: '(min-width: 360px)',
              src: './images/Programs/ForeignLanguages/Programs-foreign-languages-mobile.webp',
              type: 'image/webp',
            },
            {
              media: '(min-width: 360px)',
              src: './images/Programs/ForeignLanguages/Programs-foreign-languages-mobile.jpg',
              type: 'image/jpeg',
            },
          ],
          imgSrc: './images/Programs/ForeignLanguages/Programs-foreign-languages-desktop.jpg',
          imgAlt: t('programs-foreign-languages-image-alt'),
        }}
      />

      <HalfImgAndText isReverse={true} title={t('programs-it-title')} text={[t('programs-it-paragraph-1'), t('programs-it-paragraph-2'), t('programs-it-paragraph-3')]} picture={{
                sources: [
                  {
                    media: '(min-width: 1440px)',
                    src: './images/Programs/IT/Programs-it-desktop.webp',
                    type: 'image/webp',
                  },
                  {
                    media: '(min-width: 1440px)',
                    src: './images/Programs/IT/Programs-it-desktop.jpg',
                    type: 'image/jpeg',
                  },
                  {
                    media: '(min-width: 360px)',
                    src: './images/Programs/IT/Programs-it-tablet-mobile.webp',
                    type: 'image/webp',
                  },
                  {
                    media: '(min-width: 360px)',
                    src: './images/Programs/IT/Programs-it-tablet-mobile.jpg',
                    type: 'image/jpeg',
                  }
                ],
                imgSrc: './images/Programs/IT/Programs-it-desktop.jpg',
                imgAlt: t('programs-it-image-alt'),
              }}/>

      <HalfImgAndText isReverse={false} title={t('programs-business-education-title')} text={[t('programs-business-education-paragraph-1')]} picture={{
                sources: [
                  {
                    media: '(min-width: 1440px)',
                    src: './images/Programs/BusinessEducation/Programs-business-education-desktop.webp',
                    type: 'image/webp',
                  },
                  {
                    media: '(min-width: 1440px)',
                    src: './images/Programs/BusinessEducation/Programs-business-education-desktop.jpg',
                    type: 'image/jpeg',
                  },
                  {
                    media: '(min-width: 360px)',
                    src: './images/Programs/BusinessEducation/Programs-business-education-tablet-mobile.webp',
                    type: 'image/webp',
                  },
                  {
                    media: '(min-width: 360px)',
                    src: './images/Programs/BusinessEducation/Programs-business-education-tablet-mobile.jpg',
                    type: 'image/jpeg',
                  }
                ],
                imgSrc: './images/Programs/BusinessEducation/Programs-business-education-desktop.jpg',
                imgAlt: t('programs-business-education-image-alt'),
              }}/>

      <HalfImgAndText isReverse={true} title={t('programs-social-education-title')} text={[t('programs-social-education-paragraph-1')]} picture={{
                sources: [
                  {
                    media: '(min-width: 1440px)',
                    src: './images/Programs/SocialEducation/Programs-social-education-desktop.webp',
                    type: 'image/webp',
                  },
                  {
                    media: '(min-width: 1440px)',
                    src: './images/Programs/SocialEducation/Programs-social-education-desktop.jpg',
                    type: 'image/jpeg',
                  },
                  {
                    media: '(min-width: 360px)',
                    src: './images/Programs/SocialEducation/Programs-social-education-tablet-mobile.webp',
                    type: 'image/webp',
                  },
                  {
                    media: '(min-width: 360px)',
                    src: './images/Programs/SocialEducation/Programs-social-education-tablet-mobile.jpg',
                    type: 'image/jpeg',
                  }
                ],
                imgSrc: './images/Programs/SocialEducation/Programs-social-education-desktop.jpg',
                imgAlt: t('programs-social-education-image-alt'),
              }}/>
      <HalfImgAndText isReverse={false} title={t('programs-academic-education-title')} text={[t('programs-academic-education-paragraph-1')]} picture={{
                sources: [
                  {
                    media: '(min-width: 1440px)',
                    src: './images/Programs/AcademicEducation/Programs-academic-education-desktop.webp',
                    type: 'image/webp',
                  },
                  {
                    media: '(min-width: 1440px)',
                    src: './images/Programs/AcademicEducation/Programs-academic-education-desktop.jpg',
                    type: 'image/jpeg',
                  },
                  {
                    media: '(min-width: 360px)',
                    src: './images/Programs/AcademicEducation/Programs-academic-education-tablet-mobile.webp',
                    type: 'image/webp',
                  },
                  {
                    media: '(min-width: 360px)',
                    src: './images/Programs/AcademicEducation/Programs-academic-education-tablet-mobile.jpg',
                    type: 'image/jpeg',
                  }
                ],
                imgSrc: './images/Programs/AcademicEducation/Programs-academic-education-desktop.jpg',
                imgAlt: t('programs-academic-education-image-alt'),
              }}/>
      <HalfImgAndText isReverse={true} title={t('programs-science-creativity-title')} text={[t('programs-science-creativity-paragraph-1')]} picture={{
                sources: [
                  {
                    media: '(min-width: 1440px)',
                    src: './images/Programs/ScienceCreativity/Programs-science-creativity-desktop.webp',
                    type: 'image/webp',
                  },
                  {
                    media: '(min-width: 1440px)',
                    src: './images/Programs/ScienceCreativity/Programs-science-creativity-desktop.jpg',
                    type: 'image/jpeg',
                  },
                  {
                    media: '(min-width: 360px)',
                    src: './images/Programs/ScienceCreativity/Programs-science-creativity-tablet-mobile.webp',
                    type: 'image/webp',
                  },
                  {
                    media: '(min-width: 360px)',
                    src: './images/Programs/ScienceCreativity/Programs-science-creativity-tablet-mobile.jpg',
                    type: 'image/jpeg',
                  }
                ],
                imgSrc: './images/Programs/ScienceCreativity/Programs-science-creativity-desktop.jpg',
                imgAlt: t('programs-science-creativity-image-alt'),
              }}/>
    </Layout>
  );
};

export default ProgramsPage;
