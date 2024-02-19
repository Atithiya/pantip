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

export function Hero() {
  const typeInfo = [
    { icon: <FaRegHeart />, name: "สวนลุมพินี" },
    { icon: <GrRestroomWomen />, name: "โต๊ะเครื่องแป้ง" },
    { icon: <IoChatbubblesOutline />, name: "สยามสแควร์" },
    { icon: <GiBlindfold />, name: "ดิโอลด์สยาม" },
    { icon: <LiaWindowMaximizeSolid />, name: "สินธร" },
    { icon: <PiTelevisionBold />, name: "บางขุนพรหม" },
    { icon: <FaMicrophone />, name: "กรุงโซล" },
    { icon: <TbChristmasTree />, name: "ศาสนา" },
    { icon: <IoMusicalNotes />, name: "เฉลิมกรุง" },
  ];

  return (
    <div className="container w-full lg:flex bg-white text-gray-500 hidden ">
      <div style={{ width: "70%" }}>
        <div className="carousel w-full ">
          <div className="carousel-item relative w-full">
            <div className="p-5 rounded-b-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4  px-24 place-items-center pt-5 place-content-between">
              {/* mapping typeInfo */}
              {typeInfo.map((item) => (
                <div
                  className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-2 hover:bg-gray-200 h-20"
                  style={{ width: "70px" }}
                >
                  <div className="lg:text-xl mb-2">{item.icon}</div>
                  <div>
                    <p className="text-xs font-bold ">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "30%" }} className="p-5 pt-6 flex">
        <button className="btn btn-outline me-5 text-slate-900 border-gray-300">
          <MdFilterListAlt />
          ตัวกรอง
        </button>
        <button className="btn btn-outline me-5 text-slate-800 border-gray-300">
          My Feed
          <div className="toggle"></div>
        </button>
      </div>
    </div>
  );
}
