import Layout from '@/components/Layout/Layout.tsx';
import { useTranslation } from 'react-i18next';

const HomePage = () => {

const { t } = useTranslation();

return (
    <Layout>
        <h2>Добро пожаловать в Tandem!</h2>
        <p>{t('welcome')}</p>
    </Layout>
);
};

export default HomePage;