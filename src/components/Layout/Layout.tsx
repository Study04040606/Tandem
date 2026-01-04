import { useEffect } from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout ({ children }: LayoutProps)  { //children: React.ReactNode - тип переменной children, которая является props компонента

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);  

return (
    <>
      <Header />
      <main className='flex flex-col flex-1'>{children}</main>
      <Footer />
    </>
);
};
