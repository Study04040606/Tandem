import Layout from '@/components/Layout/Layout.tsx';
import Hero from '@/components/Hero/Hero.tsx';
import AboutUs from '@/components/AboutUs/AboutUs';

const HomePage = () => {

return (
    <Layout>
        <Hero />
        <AboutUs />
    </Layout>
);
};

export default HomePage;