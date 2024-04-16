import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    

    
    const { displayName,photoURL
    } = user;

    const handleUpdateProfile = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        console.log(name,photo);

        updateProfile(user,{
            displayName: name,
            photoURL: photo,
        })
        .then(()=>{
            console.log('Profile updated!----1');
        })
        .catch(error=>{
            console.log('An error occurred---',error);
        })
    }

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className="w-full lg:w-[1280px] mx-auto px-5 lg:px-0">
                <section className="dark:text-gray-800 my-8 lg:my-12"
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                >
                    <form onSubmit={handleUpdateProfile} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-xl dark:bg-gray-50 border  ">
                        <h2 className="w-full text-3xl font-bold leading-tight">Update Your Profile</h2>
                        <div>
                            <label className="text-lg font-semibold">Full Name</label>
                            <input 
                            type='text' 
                            value={displayName}
                            name='name' 
                            placeholder="Your name" 
                            required="" 
                            className="block border w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </div>
                        <div>
                            <label className="text-lg font-semibold">Photo URL</label>
                            <input 
                            type="text" 
                            name="photo" 
                            value={photoURL} 
                            placeholder="Your Photo" 
                            required="" 
                            className="block w-full p-2 rounded focus:outline-none focus:ring border focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </div>
                        <div>
                            <input type="submit" value='Update' className="w-full font-medium px-3 py-2 border rounded-md dark:border-gray-300 focus:dark:border-violet-600 bg-[#23BE0A] text-white text-lg cursor-pointer" />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default UpdateProfile;