import Layout from '@/components/Layout/Layout.tsx';
import Hero from '@/components/Hero/Hero.tsx';
import AboutUs from '@/components/AboutUs/AboutUs.tsx';
import ForWhom from '@/components/ForWhom/ForWhom.tsx';

const HomePage = () => {

return (
    <Layout>
        <Hero />
        <AboutUs />
        <ForWhom />
    </Layout>
);
};

export default HomePage;