import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div>
                <section className="p-6 dark:text-gray-800">
                    <form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50 border border-red-600">
                        <h2 className="w-full text-3xl font-bold leading-tight">Update Your Profile</h2>
                        <div>
                            <label className="text-lg font-semibold">Full Name</label>
                            <input type="text" name='fullName' placeholder="Your name" required="" className="block border w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </div>
                        <div>
                            <label className="text-lg font-semibold">Photo URL</label>
                            <input type="text"  name="photo" placeholder="Your Photo" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </div>
                        <div>
                            <label className="text-lg font-semibold">Phone Number</label>
                            <input type="tel"  name="pnone" placeholder="Your Phone Number" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </div>
                        <div><input type="submit" value='Update' className="w-full font-medium px-3 py-2 border rounded-md dark:border-gray-300 focus:dark:border-violet-600 bg-green-500 text-white text-lg cursor-pointer" />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default UpdateProfile;