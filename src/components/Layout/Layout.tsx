function Layout ({ children }: {children: React.ReactNode})  { //children: React.ReactNode - тип переменной children, которая является props компонента
return (
    <div className="layout">
        <header>
        <h1>Моя классная программа123</h1>
        </header>
        <main>{children}</main>
        <footer>
        <p>&copy; 2023 Моя классная программа</p>
        </footer>
    </div>
);
};

export default Layout;