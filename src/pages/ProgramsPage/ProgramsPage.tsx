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
        lead={t('programs-foreign-languages-lead')}
        text={[
          t('programs-foreign-languages-paragraph-1'),
          t('programs-foreign-languages-paragraph-2')
        ]}
        subtitles={[
          {
            subtitleTitle: t('programs-foreign-languages-subtitle-1-title'),
            subtitleText: [
              t('programs-foreign-languages-subtitle-1-paragraph-1'),
              t('programs-foreign-languages-subtitle-1-paragraph-2')
            ]
          }
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
        isSubtitle={true}
      />

      <HalfImgAndText
        isReverse={true}
        title={t('programs-it-title')}
        lead={t('programs-it-lead')}
        text={[
          t('programs-it-paragraph-1')
        ]}
        subtitles={[
          {
            subtitleTitle: t('programs-it-subtitle-1-title'),
            subtitleText: [
              t('programs-it-subtitle-1-paragraph-1'),
              t('programs-it-subtitle-1-paragraph-2')
            ],
          },
          {
            subtitleTitle: t('programs-it-subtitle-2-title'),
            subtitleText: [
              t('programs-it-subtitle-2-paragraph-1'),
              t('programs-it-subtitle-2-paragraph-2'),
              t('programs-it-subtitle-2-paragraph-3')
            ],
          }
        ]}
        picture={{
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
            },
          ],
          imgSrc: './images/Programs/IT/Programs-it-desktop.jpg',
          imgAlt: t('programs-it-image-alt'),
        }}
      />

      <HalfImgAndText
        isReverse={false}
        title={t('programs-business-education-title')}
        lead={t('programs-business-education-lead')}
        text={[t('programs-business-education-paragraph-1')]}
        subtitles={[
          {
            subtitleTitle: t('programs-business-education-subtitle-1-title'),
            subtitleText: [
              t('programs-business-education-subtitle-1-paragraph-1'),
              t('programs-business-education-subtitle-1-paragraph-2')
            ]
          }
        ]}
        picture={{
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
            },
          ],
          imgSrc: './images/Programs/BusinessEducation/Programs-business-education-desktop.jpg',
          imgAlt: t('programs-business-education-image-alt'),
        }}
      />

      <HalfImgAndText
        isReverse={true}
        title={t('programs-social-education-title')}
        lead={t('programs-social-education-lead')}
        text={[t('programs-social-education-paragraph-1')]}
        subtitles={[
          {
            subtitleTitle: t('programs-social-education-subtitle-1-title'),
            subtitleText: [
              t('programs-social-education-subtitle-1-paragraph-1'),
              t('programs-social-education-subtitle-1-paragraph-2'),
              t('programs-social-education-subtitle-1-paragraph-3')
            ]
          }
        ]}
        picture={{
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
            },
          ],
          imgSrc: './images/Programs/SocialEducation/Programs-social-education-desktop.jpg',
          imgAlt: t('programs-social-education-image-alt'),
        }}
      />
      <HalfImgAndText
        isReverse={false}
        title={t('programs-academic-education-title')}
        lead={t('programs-academic-education-lead')}
        text={[t('programs-academic-education-paragraph-1')]}
        subtitles={[
          {
            subtitleTitle: t('programs-academic-education-subtitle-1-title'),
            subtitleText: [
              t('programs-academic-education-subtitle-1-paragraph-1'),
              t('programs-academic-education-subtitle-1-paragraph-2'),
            ]
          }
        ]}
        picture={{
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
            },
          ],
          imgSrc: './images/Programs/AcademicEducation/Programs-academic-education-desktop.jpg',
          imgAlt: t('programs-academic-education-image-alt'),
        }}
      />
      <HalfImgAndText
        isReverse={true}
        title={t('programs-science-creativity-title')}
        lead={t('programs-science-creativity-lead')}
        text={[t('programs-science-creativity-paragraph-1')]}
        subtitles={[
          {
            subtitleTitle: t('programs-science-creativity-subtitle-1-title'),
            subtitleText: [
              t('programs-science-creativity-subtitle-1-paragraph-1'),
              t('programs-science-creativity-subtitle-1-paragraph-2'),
            ]
          }
        ]}
        picture={{
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
            },
          ],
          imgSrc: './images/Programs/ScienceCreativity/Programs-science-creativity-desktop.jpg',
          imgAlt: t('programs-science-creativity-image-alt'),
        }}
      />
    </Layout>
  );
};

export default ProgramsPage;
