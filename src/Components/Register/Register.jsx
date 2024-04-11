import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();

    const handleRegistrationForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        // Reset error message
        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer.');
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase and some lowercase latter.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase and some lowercase latter.');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : '/login');
                // Update Profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => console.log('profile updated'))
                    .catch(error => console.log(error))
                    toast.success("User Create uccessfully.");
            })
            .catch(error => {
                // setRegisterError(error.message);
                console.log(error.message);
                toast.error('User already Created.');
            })
    }

    return (
        <div className="">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <section className="p-6 dark:text-gray-800">
                <form onSubmit={handleRegistrationForm} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow-2xl dark:bg-gray-50 border border-red-600">
                    <h2 className="w-full text-3xl font-bold leading-tight">Registration Now</h2>
                    <div>
                        <label className="block text-lg font-semibold">Name</label>
                        <input type="text" name='name' placeholder="Your name" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100 border" />
                    </div>
                    <div>
                        <label className="block text-lg font-semibold">Email</label>
                        <input type="email" name='email' placeholder="Your email" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100 border" />
                    </div>
                    <div>
                        <label className="block text-lg font-semibold">PhotoURL</label>
                        <input type="text" name='photo' placeholder="Your email" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100 border" />
                    </div>
                    <div>
                        <label className="block text-lg font-semibold">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"}
                                name='password'
                                placeholder="Your Password" required
                                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100 border" />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-[10px] right-4 cursor-pointer text-2xl">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        {
                            registerError && <p className="font-semibold text-red-600">{registerError}</p>
                        }
                    </div>

                    <div>
                        <input type="submit" value='Register' className="block w-full p-2 rounded cursor-pointer bg-green-500 text-lg text-white font-semibold" />
                    </div>
                    <p className="text-base dark:text-gray-600">Already have an account? Please <Link to='/login' className="focus:underline hover:underline font-bold ml-1">Log In</Link></p>

                </form>
            </section>
        </div>
    );
};

export default Register;