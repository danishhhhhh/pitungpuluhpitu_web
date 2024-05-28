import {MdGroups} from "react-icons/md";
import {FaAngleDoubleRight} from "react-icons/fa";

const TimCard = ({name}) => {

    return (
        <a href='/detail'
           className="w-60 h-50 p-1 bg-yellow rounded-xl flex-col justify-start items-center gap-1 inline-flex mr-4">
            <div className="w-full bg-white rounded-lg py-3 flex flex-col justify-start items-center gap-2">
                <MdGroups className="w-14 h-14 text-yellow"/>
                <div className="text-center text-gray-800 text-xl font-bold font-poppins">
                    {name}
                </div>
                <div className="text-center text-gray-800 text-sm font-medium font-poppins mb-2">
                    Danish Ardiyanta
                </div>
            </div>
            <div className="w-20 py-1 justify-between items-center inline-flex">
                <a className="text-center text-gray-800 text-xs font-normal font-poppins leading-snug flex justify-center w-52">
                    Detail Tim
                    <FaAngleDoubleRight className=" ml-1 mt-0.5"/>
                </a>
            </div>
        </a>
    );
}

export default TimCard;
