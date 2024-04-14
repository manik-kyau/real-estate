import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='w-full lg:w-[1180px] mx-auto px-5 lg:px-0'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;