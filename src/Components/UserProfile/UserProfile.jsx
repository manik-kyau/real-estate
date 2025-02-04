import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const UserProfile = () => {

    const { user } = useContext(AuthContext);
    const { photoURL, displayName, email } = user;
    // console.log(user);
    return (
        <div className="w-full lg:w-[1280px] mx-auto px-5 lg:px-0">
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center py-4 my-8 bg-gray-100 rounded-md text-[#131313]"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
            >User Information</h2>
            <div className="mb-12">

                <div className="max-w-md border-2 p-2 dark:bg-gray-50 dark:text-gray-800  rounded-xl mx-auto"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >
                    <div className="w-full mb-6 h-44 sm:h-60 sm:mb-0">
                        <img src={photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4 pl-0">
                        <div className="mt-4">
                            <h2 className="text-2xl font-semibold text-[#3d3c3c]">Name: {displayName}</h2>

                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="dark:text-gray-600 text-base font-medium text-[#686767]">{email}</span>
                            </span>
                            <div className="flex justify-center gap-8 py-4">
                                <Link>
                                    <FaGithubSquare className="text-3xl"></FaGithubSquare>
                                </Link>
                                <Link>
                                    <FaFacebookSquare className="text-3xl"></FaFacebookSquare>
                                </Link>
                                <Link>
                                    <FaTwitterSquare className="text-3xl"></FaTwitterSquare>
                                </Link>
                            </div>
                            <div className="text-end">
                                <Link to='/updateprofile'>
                                    <button className="btn bg-[#23BE0A] text-base text-white font-semibold">Update Profile</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;