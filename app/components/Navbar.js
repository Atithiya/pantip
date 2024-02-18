import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlusCircle } from "react-icons/fa";

const Logo = "https://ptcdn.info/mobile/logo-mobile-pantip-white.png";

export function Navbar() {
  return (
    <div className="px-10 navbar bg-white fixed top-0 w-full z-10 py-3 text-slate-900">
      <div className="navbar-start">
        <div className="">
          {/* Desktop logo */}
          <a
            className="btn btn-primary text-xl hidden lg:block w-20"
            href="#hero"
          >
            <img
              src={Logo}
              className=" me-20 hover:cursor-pointer pt-3"
              alt="Logo"
            />
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <a>ตั้งกระทู้</a>
          </li>
          <li>
            <a>คอมมูนิตี้</a>
          </li>
          <li>
            <a>Explore</a>
          </li>
        </ul>
      </div>
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
  );
}
