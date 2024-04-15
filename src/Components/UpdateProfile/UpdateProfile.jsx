import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateProfile = () => {

    const { updateUserProfile } = useContext(AuthContext);

    const handleUpdateProfile = e => {
        e.preventDefault();
        const name = e.target.fullName.value;
        const photo = e.target.photo.value;
        const phone = e.target.phone.value;
        // console.log(name, photo, phone);
        updateUserProfile(name, photo, phone)
    }

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className="w-full lg:w-[1180px] mx-auto">
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
                            <input type="text" name='fullName' placeholder="Your name" required="" className="block border w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </div>
                        <div>
                            <label className="text-lg font-semibold">Photo URL</label>
                            <input type="text" name="photo" placeholder="Your Photo" required="" className="block w-full p-2 rounded focus:outline-none focus:ring border focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </div>
                        <div>
                            <label className="text-lg font-semibold">Phone Number</label>
                            <input type="tel" name="phone" placeholder="Your Phone Number" required="" className="block w-full p-2 rounded focus:outline-none border focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
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