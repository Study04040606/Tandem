import Layout from '@/components/Layout/Layout.tsx';
import { useTranslation } from 'react-i18next';
import Button from '@/components/Button/Button';

const HomePage = () => {

const { t } = useTranslation();

return (
    <Layout>
        <h2>Добро пожаловать в Tandem!</h2>
        <p>{t('welcome')}</p>
        <Button />
    </Layout>
);
};

export default HomePage;