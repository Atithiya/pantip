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

export function Hero() {
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
      className="p-5 mt-20 container z-10 bg-slate-100 text-lg lg:text-base"
      id="hero"
    >
      <div className="border border-solid border-zinc-300 rounded-lg ">
        <div className="text-white bg-indigo-950 ps-5 p-2 rounded-t-lg">
          <p className="lg:text-xl">เลือกห้อง</p>
        </div>
        {/* box */}
        <div className="p-5 rounded-b-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-slate-800">
          {/* Mapping over roomInfo and rendering each room */}
          {roomInfo.map((room, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-2 hover:bg-gray-200"
            >
              {/* Icon */}
              <div className="text-4xl mb-2">{room.logo}</div>
              {/* Rooms' name */}
              <div>
                <p>{room.roomName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
