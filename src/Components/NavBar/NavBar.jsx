import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import User from '../../assets/images/user.png'

const NavBar = () => {

    const {user,logOut} = useContext(AuthContext);
    // console.log(user);
    // const {photoURL,displayName} = user;

    const handleLogOut = ()=>{
        logOut()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>console.log(error))
    }

    const NavItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {
            user && <li><NavLink to='/userprofile'>UserProfile</NavLink></li>
        }
        {/* <li><NavLink to='/login'>Login</NavLink></li> */}
        {/* <li><NavLink to='/register'>Register</NavLink></li> */}
    </>
    return (
        <div>
            <div className="navbar bg-base-100 mt-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavItems}
                        </ul>
                    </div>
                    <a className="text-3xl font-bold">FactoryNexus</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavItems}
                    </ul>
                </div>
                <div className="navbar-end space-x-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        {/* <div className="w-10 rounded-full mr-">
                            <abbr title={displayName}><img alt="Tailwind CSS Navbar component" src={user ? photoURL : User} /></abbr>
                        </div> */}
                        <div className="w-10 rounded-full mr-">
                            <abbr title='sorkar saheb'><img alt="Tailwind CSS Navbar component" src={User} /></abbr>
                        </div>
                    </div>
                        {
                            user ? 
                            <button onClick={handleLogOut} className="btn bg-green-500 text-white hover:bg-green-500 text-lg font-semibold">LogOut</button>
                            :
                            <Link to='/login' className="btn bg-green-500 text-white hover:bg-green-500 text-lg font-semibold">Login
                            </Link>
                        }
                </div>
            </div>
        </div>
    );
};

export default NavBar;