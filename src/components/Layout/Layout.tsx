import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout ({ children }: LayoutProps)  { //children: React.ReactNode - тип переменной children, которая является props компонента
return (
    <>
      <Header />
      <main className='flex-1 m-8'>{children}</main>
      <Footer />
    </>
);
};

export default Layout;