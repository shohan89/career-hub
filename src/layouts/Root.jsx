import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Root = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Nav />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;