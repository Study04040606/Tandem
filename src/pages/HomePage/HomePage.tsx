import { useTranslation } from "react-i18next";
import Layout from '@/components/Layout/Layout.tsx';
import Hero from '@/components/Hero/Hero.tsx';
import AboutUs from '@/components/AboutUs/AboutUs.tsx';
import ForWhom from '@/components/ForWhom/ForWhom.tsx';
import OnlyText from '@/components/OnlyText/OnlyText';

const HomePage = () => {
     const { t } = useTranslation();

return (
    <Layout>
        <Hero />
        <AboutUs />
        <ForWhom />
        <OnlyText title={t('what-you-get-title')} text={[t('what-you-get-paragraph-1'), t('what-you-get-paragraph-2'), t('what-you-get-paragraph-3'), t('what-you-get-paragraph-4')]}/>
        <OnlyText title={t('idea-title')} text={[t('idea-paragraph-1'), t('idea-paragraph-2'), t('idea-paragraph-3')]}/>
    </Layout>
);
};

export default HomePage;