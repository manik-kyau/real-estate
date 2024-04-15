import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import User from '../../assets/images/user.png'

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    // const {photoURL,displayName} = user;

    const NavItems = <>
        <li><NavLink to='/'
            className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-white" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
        >Home</NavLink></li>
        <li><NavLink to='/about'
            className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-white" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
        >About Us</NavLink></li>
        {
            user && <li><NavLink to='/userprofile'
                className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-white" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
            >UserProfile</NavLink></li>
        }
        {
            user && <li><NavLink to='/updateprofile'
                className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-white" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
            >UpdateProfile</NavLink></li>
        }
        <li><NavLink to='/contact'
            className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-white" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
        >Contact</NavLink></li>
        {/* <li><NavLink to='/register'>Register</NavLink></li> */}
    </>

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="w-full lg:w-[1180px] mx-auto">
            <div className="navbar bg-base-100 mt-8 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavItems}
                        </ul>
                    </div>
                    <a className="text-3xl font-bold">Factory<span className="text-[#23BE0A]">Nexus</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavItems}
                    </ul>
                </div>
                <div className="navbar-end space-x-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full mr-">
                                <abbr title={user?.displayName}><img alt="Tailwind CSS Navbar component" src={user ? user?.photoURL : User} /></abbr>
                            </div>
                        {/* <div className="w-10 rounded-full mr-">
                            <abbr title='sorkar saheb'><img alt="Tailwind CSS Navbar component" src={User} /></abbr>
                        </div> */}
                    </div>
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn bg-[#23BE0A] text-white hover:bg-[#23BE0A] text-lg font-semibold">LogOut</button>
                            :
                            <Link to='/login' className="btn bg-[#23BE0A] text-white hover:bg-[#23BE0A] text-lg font-semibold">Login
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;