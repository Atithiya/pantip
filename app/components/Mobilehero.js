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
    <div
      className="px-5 py-3 bg-white lg:hidden text-gray-500  border-solid border-zinc-300 shadow-md pt-24 container"
      style={{
        boxShadow: "inset 2px 5px -10px -5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          {/* Topics */}
          <div className="rounded-b-lg grid grid-cols-4 md:grid-cols-4 w-full ">
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
                <GrRestroomWomen />
              </div>
              <div>
                <p className="text-xs font-bold">โต๊ะเครื่องแป้ง</p>
              </div>
            </div>
            {/* End of box */}
            {/* box */}
            <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-1  hover:bg-gray-200 w-20 ">
              <div className="lg:text-xl mb-2 ">
                <IoChatbubblesOutline />
              </div>
              <div>
                <p className="text-xs font-bold">สยามสแควร์</p>
              </div>
            </div>
            {/* End of box */}
            {/* box */}
            <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-1  hover:bg-gray-200 w-20 ">
              <div className="lg:text-xl mb-2 ">
                <GiBlindfold />
              </div>
              <div>
                <p className="text-xs font-bold">ดิโอลด์สยาม</p>
              </div>
            </div>
            {/* End of box */}
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          {/* Topics */}
          <div className="rounded-b-lg grid grid-cols-4 md:grid-cols-4 w-full ">
            {/* box */}
            <div className="text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-1  hover:bg-gray-200 w-20 ">
              <div className="lg:text-xl mb-2 ">
                <LiaWindowMaximizeSolid />
              </div>
              <div>
                <p className="text-xs font-bold">สินธร</p>
              </div>
            </div>
            {/* End of box */}
            {/* box */}
            <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-1  hover:bg-gray-200 w-20 ">
              <div className="lg:text-xl mb-2 ">
                <PiTelevisionBold />
              </div>
              <div>
                <p className="text-xs font-bold">บางขุนพรหม</p>
              </div>
            </div>
            {/* End of box */}
            {/* box */}
            <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-1  hover:bg-gray-200 w-20 ">
              <div className="lg:text-xl mb-2 ">
                <FaMicrophone />
              </div>
              <div>
                <p className="text-xs font-bold">กรุงโซล</p>
              </div>
            </div>
            {/* End of box */}
            {/* box */}
            <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-1  hover:bg-gray-200 w-20 ">
              <div className="lg:text-xl mb-2 ">
                <TbChristmasTree />
              </div>
              <div>
                <p className="text-xs font-bold">ศาสนา</p>
              </div>
            </div>
          </div>
          {/* End of box */}
        </div>
      </div>
    </div>
  );
}
