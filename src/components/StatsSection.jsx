import { FaTrophy, FaBriefcase, FaCrown } from "react-icons/fa";
import { PiCirclesFour } from "react-icons/pi";

const StatsSection = () => {
  return (
    <div className="bg-[#140C1C] text-right p-8 rounded-xl  border-[#2A1454] border  text-white mx-2 mt-10 flex flex-wrap justify-between gap-6 md:gap-0">
      <div className=" text-left">
        <FaTrophy className="text-[#834FF7] text-3xl  mb-2" />
        <h2 className="text-6xl font-bold">14%</h2>
        <p className="mt-1 text-gray-400">Job achievements</p>
      </div>
      <div className=" text-left">
        <FaBriefcase className="text-[#834FF7] text-3xl mb-2" />
        <h2 className="text-6xl font-bold">3+</h2>
        <p className="mt-1 text-gray-400">Years of Experience</p>
      </div>
      <div className=" text-left">
        <PiCirclesFour className="text-[#834FF7] text-4xl mb-2" />
        <h2 className="text-6xl font-bold">3</h2>
        <p className="mt-1 text-gray-400">Happy Clients</p>
      </div>
      <div className=" text-left">
        <FaCrown className="text-[#834FF7] text-3xl mb-2" />
        <h2 className="text-6xl font-bold">14+</h2>
        <p className="mt-1 text-gray-400">Project Completed</p>
      </div>
    </div>
  );
};

export default StatsSection;
