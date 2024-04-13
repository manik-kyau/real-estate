import { Link } from 'react-router-dom';
import Banner1 from '../../assets/images/banner1.jpg';
const IndustryCard = ({data}) => {
    const {id,estate_title,segment_name,description,price,status,arealocation,facilities,image} = data;
    return (
        <div className='w-full'>
            <div className="w-full rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 border">
                <img src={image} alt="" className="object-cover h-[200px] object-center w-full rounded-t-md dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold tracking-wide">{estate_title.slice(0,16)}</h2>
                        <p className="dark:text-gray-800">{description.slice(0,50)}</p>
                    </div>
                    <Link to={`/industry/${id}`}>
                        <button type="button" className="btn bg-green-500 text-white hover:bg-green-500 text-lg font-semibold">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default IndustryCard;