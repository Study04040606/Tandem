import { Link } from 'react-router-dom';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout ({ children }: LayoutProps)  { //children: React.ReactNode - тип переменной children, которая является props компонента
return (
    <div className="layout">
        <header>
        <h1 className='m-8'>Tandem</h1>
        <nav>
            <ul className="list-none">
                <li className='m-3'><Link to="/">Home</Link></li>
                <li className='m-3'><Link to="/programs">programs</Link></li>
                <li className='m-3'><Link to="/participate">participate</Link></li>
            </ul>
      </nav>
        </header>
        <main className='m-8'>{children}</main>
        <footer className='m-8'>
        <p> &copy; 2026 Tandem</p>
        </footer>
    </div>
);
};

export default Layout;