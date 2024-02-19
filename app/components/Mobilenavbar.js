import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlusCircle } from "react-icons/fa";

const Logo = "https://ptcdn.info/mobile/logo-mobile-pantip-white.png";

export function Mobilenavbar() {
  return (
    <div className="p-5 bg-white text-slate-900 flex justify-between">
      <div>
        {/* Search bar */}
        <div className="flex items-center lg:mx-44 text-slate-900">
          <div
            className="btn btn-primary  "
            style={{ borderRadius: "50%", width: "50px", height: "50px" }}
          >
            <div className="text-2xl font-extrabold text-white">
              <IoSearchOutline />
            </div>
          </div>
          {/* input */}
          <input
            type="text"
            placeholder="ค้นหาบน Pantip"
            style={{
              width: "calc(100% - 40px)",
              height: "50px",
              borderRadius: "50px",
              background: "white",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            className="text-center input input-bordered placeholder:text-slate-900 mx-1 "
          />
        </div>
      </div>
      {/* profile logo */}
      <div>
        <div className="navbar-end">
          <a className="">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar text-2xl"
              >
                <div className="">
                  <GiHamburgerMenu />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-slate-800 bg-slate-200 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">เข้าสู่ระบบ / สมัครสมาชิก</a>
                </li>
                <li>
                  <a>ช่วยเหลือ</a>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
