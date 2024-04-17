import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const { user,updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo);
        
        updateUserProfile(name,photo)
        .then(()=>{
            console.log('Profile Update SuccessFully');
            toast.success('Profile Update Successfully Done.')
            navigate('/')
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className="">
            <Helmet>
                <title>FactoryNexus | Update Profile</title>
            </Helmet>
            <div className="w-full lg:w-[1280px] mx-auto px-5 lg:px-0 mt-5 lg:gap-14"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
            >
                <div className="flex flex-col justify-center items-center space-y-5">
                    <h1 className="text-3xl font-bold">Hi <span className="text-[#23BE0A]">{user?.displayName}</span> !</h1>
                    <h3 className="text-xl font-bold text-[#363636]">Update Your Profile</h3>
                    <div className="flex justify-center items-center border-4 border-[#23BE0A] w-[208px] rounded-full">
                        <img className="rounded-full h-[200px] w-[200px]" src={user?.photoURL} alt="" />
                    </div>

                    <p className="text-lg font-semibold text-[#5e5d5d]">{user?.email}</p>
                </div>
                <section className="dark:text-gray-800 my-8 lg:my-12 flex justify-center items-center">
                    {/*  */}
                    <form onSubmit={handleUpdateProfile} className=" w-[400px] space-y-4">

                        <div>
                            <input
                                type='text'
                                name='name'
                                placeholder={user?.displayName}
                                required
                                className="block border-2 w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="photo"
                                placeholder={user?.photoURL}
                                required
                                className="block w-full p-2 rounded focus:outline-none focus:ring border-2 focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </div>
                        <div className="flex">
                            <div className="w-1/2">
                                <input type="submit" value='Update' className="w-full font-medium px-3 py-2 border rounded-l-md dark:border-gray-300 focus:dark:border-violet-600 bg-[#23BE0A] text-white text-lg cursor-pointer" />
                            </div>
                            <Link to='/' className="w-1/2 text-center font-medium px-3 py-2 border rounded-r-md dark:border-gray-300 focus:dark:border-violet-600 bg-green-600 text-white text-lg cursor-pointer ">
                                <button >Cancel</button>
                            </Link>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default UpdateProfile;