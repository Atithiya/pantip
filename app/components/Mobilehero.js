import { FaRegHeart } from "react-icons/fa";
import { GrRestroomWomen } from "react-icons/gr";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GiBlindfold } from "react-icons/gi";
import { LiaWindowMaximizeSolid } from "react-icons/lia";
import { PiTelevisionBold } from "react-icons/pi";
import { FaMicrophone } from "react-icons/fa";
import { TbChristmasTree } from "react-icons/tb";
import { IoMusicalNotes } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdFilterListAlt } from "react-icons/md";

export function Mobilehero() {
  const roomInfo = [
    { logo: <FaRegHeart />, roomName: "สวนลุมพินี" },
    { logo: <GrRestroomWomen />, roomName: "โต๊ะเครื่องแป้ง" },
    { logo: <IoChatbubblesOutline />, roomName: "สยามสแควร์" },
    { logo: <GiBlindfold />, roomName: "ดิโอลด์สยาม" },
    { logo: <LiaWindowMaximizeSolid />, roomName: "สินธร" },
    { logo: <PiTelevisionBold />, roomName: "บางขุนพรหม" },
    { logo: <FaMicrophone />, roomName: "กรุงโซล" },
    { logo: <TbChristmasTree />, roomName: "ศาสนา" },
    { logo: <IoMusicalNotes />, roomName: "เฉลิมกรุง" },
    { logo: <FaRegSmile />, roomName: "พันทิป" },
    { logo: <IoMdPhonePortrait />, roomName: "มาบุญครอง" },
    { logo: <FaHome />, roomName: "ชายคา" },
  ];

  return (
    <div className="py-5 bg-white lg:hidden ">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          {/* Topics */}
          <div className="rounded-b-lg grid grid-cols-3 md:grid-cols-4 w-full mx-16">
            {/* box */}
            <div className="text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-1  hover:bg-gray-200 w-20 ">
              <div className="lg:text-xl mb-2 ">
                <FaRegHeart />
              </div>
              <div>
                <p className="text-xs font-bold">สวนลุมพินี</p>
              </div>
            </div>
            {/* End of box */}
            {/* box */}
            <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-1  hover:bg-gray-200 w-20 ">
              <div className="lg:text-xl mb-2 ">
                <FaRegHeart />
              </div>
              <div>
                <p className="text-xs font-bold">สวนลุมพินี</p>
              </div>
            </div>
            {/* End of box */}
            {/* box */}
            <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-1  hover:bg-gray-200 w-20 ">
              <div className="lg:text-xl mb-2 ">
                <FaRegHeart />
              </div>
              <div>
                <p className="text-xs font-bold">สวนลุมพินี</p>
              </div>
            </div>
            {/* End of box */}
          </div>
          {/* Swipe */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-white text-slate-900 border border-gray-300 hover:bg-slate-300"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-white text-slate-900 border border-gray-300 hover:bg-slate-300"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          {/* Topics */}
          <div className="rounded-b-lg grid grid-cols-3 md:grid-cols-4 w-full mx-16">
            {/* box */}
            <div className="text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-1  hover:bg-gray-200 w-20 ">
              <div className="lg:text-xl mb-2 ">
                <FaRegHeart />
              </div>
              <div>
                <p className="text-xs font-bold">สวนลุมพินี</p>
              </div>
            </div>
            {/* End of box */}
            {/* box */}
            <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-1  hover:bg-gray-200 w-20 ">
              <div className="lg:text-xl mb-2 ">
                <FaRegHeart />
              </div>
              <div>
                <p className="text-xs font-bold">สวนลุมพินี</p>
              </div>
            </div>
            {/* End of box */}
            {/* box */}
            <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-1  hover:bg-gray-200 w-20 ">
              <div className="lg:text-xl mb-2 ">
                <FaRegHeart />
              </div>
              <div>
                <p className="text-xs font-bold">สวนลุมพินี</p>
              </div>
            </div>
            {/* End of box */}
          </div>
          {/* Swipe */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-white text-slate-900 border border-gray-300 hover:bg-slate-300"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-white text-slate-900 border border-gray-300 hover:bg-slate-300"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
