import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className=''>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;