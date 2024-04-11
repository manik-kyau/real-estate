import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UserProfile = () => {

    const { user } = useContext(AuthContext);
    const {photoURL} = user;
    console.log(user);
    return (
        <div>
            <h2 className="text-5xl font-bold text-center py-4 my-8 bg-gray-100 rounded-md">User Information</h2>
            <div className="mb-12">
                <h2>Name: {user.displayName}</h2>
                <h2>Email: {user.email}</h2>
                <h2>Photo Url: {user.photoURL}</h2>
                <img className="w-[200px] h-[200px]" src={photoURL} alt="" />
            </div>
        </div>
    );
};

export default UserProfile;