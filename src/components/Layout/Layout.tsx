import Header from "@/components/Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout ({ children }: LayoutProps)  { //children: React.ReactNode - тип переменной children, которая является props компонента
return (
    <>
       <Header />
       <main className='m-8'>{children}</main>
       <footer className='m-8'>
            <p> &copy; 2026 Tandem</p>
       </footer>
    </>
);
};

export default Layout;