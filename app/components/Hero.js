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
    <div className="container w-full lg:flex bg-white text-gray-500 hidden lg:block">
      <div style={{ width: "70%" }}>
        <div className="carousel w-full ">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="p-5 rounded-b-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4  px-24">
              {/* box */}
              <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-2 hover:bg-gray-200">
                <div className="lg:text-xl mb-2">
                  <FaRegHeart />
                </div>
                <div>
                  <p className="text-xs font-bold">สวนลุมพินี</p>
                </div>
              </div>
              {/* End of box */}
              {/* box */}
              <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-2 hover:bg-gray-200">
                <div className="lg:text-xl mb-2">
                  <GrRestroomWomen />
                </div>
                <div>
                  <p className="text-xs font-bold">โต๊ะเครื่องแป้ง</p>
                </div>
              </div>
              {/* End of box */}
              {/* box */}
              <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-2 hover:bg-gray-200">
                <div className="lg:text-xl mb-2">
                  <IoChatbubblesOutline />
                </div>
                <div>
                  <p className="text-xs font-bold">สยามสแควร์</p>
                </div>
              </div>
              {/* End of box */}
              {/* box */}
              <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-2 hover:bg-gray-200">
                <div className="lg:text-xl mb-2">
                  <GiBlindfold />
                </div>
                <div>
                  <p className="text-xs font-bold">ดิโอลด์สยาม</p>
                </div>
              </div>
              {/* End of box */}
              {/* box */}
              <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-2 hover:bg-gray-200">
                <div className="lg:text-xl mb-2">
                  <LiaWindowMaximizeSolid />
                </div>
                <div>
                  <p className="text-xs font-bold">สินธร</p>
                </div>
              </div>
              {/* End of box */}
              {/* box */}
              <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-2 hover:bg-gray-200">
                <div className="lg:text-xl mb-2">
                  <PiTelevisionBold />
                </div>
                <div>
                  <p className="text-xs font-bold">บางขุนพรหม</p>
                </div>
              </div>
              {/* End of box */}
              {/* box */}
              <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-2 hover:bg-gray-200">
                <div className="lg:text-xl mb-2">
                  <FaMicrophone />
                </div>
                <div>
                  <p className="text-xs font-bold">กรุงโซล</p>
                </div>
              </div>
              {/* End of box */}
              {/* box */}
              <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-2 hover:bg-gray-200">
                <div className="lg:text-xl mb-2">
                  <TbChristmasTree />
                </div>
                <div>
                  <p className="text-xs font-bold">ศาสนา</p>
                </div>
              </div>
              {/* End of box */}
              {/* box */}
              <div className=" text-center flex flex-col items-center rounded-lg hover:cursor-pointer p-2 hover:bg-gray-200">
                <div className="lg:text-xl mb-2">
                  <IoMusicalNotes />
                </div>
                <div>
                  <p className="text-xs font-bold">เฉลิมกรุง</p>
                </div>
              </div>
              {/* End of box */}
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "30%" }} className="p-5 pt-10 flex">
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
