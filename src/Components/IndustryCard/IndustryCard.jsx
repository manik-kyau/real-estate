import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const IndustryCard = ({ data }) => {

    const { id, estate_title, description, price, status, facilities, image } = data;

    return (
        <div className='w-full'>
            <div className="w-full rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 border p-5">
                <img src={image} alt="" className="object-cover h-[200px] object-center w-full rounded-md dark:bg-gray-500" />
                <div className="flex flex-col justify-between pt-6 pb-4 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold tracking-wide">{estate_title.slice(0, 16)}</h2>
                        <p className="dark:text-gray-800 text-base font-normal">{description.slice(0, 187)}</p>
                        <div className='flex gap-7 pt-4'>
                            <h2 className='space-x-1'>
                                <span className="text-base font-bold">Price: </span>
                                <span className="text-base font-semibold text-[#23BE0A] ml-1">{price}</span>
                            </h2>
                            <h2 className="text-base font-bold text-[#23BE0A]">For {status}</h2>
                        </div>
                        <div className='flex gap-2'>
                            <span className="text-base font-bold">Facilities:</span>
                            <div className='flex gap-3 md:gap-5 lg:gap-3'>
                                
                                {
                                    facilities.map((facility, idx) => <p key={idx} className="text-base font-semibold rounded-[50px] ">#{facility.slice(0,17)}</p>)
                                }
                            </div>
                        </div>
                    </div>
                    <Link to={`/industry/${id}`}>
                        <button type="button" className="btn bg-[#23BE0A] text-white hover:bg-[#23BE0A] text-lg font-semibold w-full">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
IndustryCard.propTypes ={
    data:PropTypes.object.isRequired,
}

export default IndustryCard;