import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlusCircle } from "react-icons/fa";
const Logo = "https://ptcdn.info/mobile/logo-mobile-pantip-white.png";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-solid border-zinc-700 z-10 container">
      <div className="navbar p-5 bg-indigo-950  ">
        <div className="">
          {/* Desktop logo */}
          <a className="text-xl hidden lg:block " href="#hero">
            <img
              src={Logo}
              className=" me-20 hover:cursor-pointer"
              alt="Logo"
            />
          </a>
        </div>
        <div className="flex justify-between gap-2 lg:mx-72 w-full">
          {/* Search Input */}
          <label className="input input-bordered flex items-center gap-2 bg-indigo-950 ">
            <input
              type="text"
              className="grow w-full lg:w-96  "
              placeholder="ค้นหาบน Pantip"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70 hover:text-slate-900 hover:cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          {/* Create topic (for desktop) */}
          <div className="hidden lg:block mx-32 hover:cursor-pointer hover:text-slate-500">
            <a href="#">
              <div className="flex w-24">
                <FaPlusCircle className="text-2xl" />
                &nbsp;ตั้งกระทู้
              </div>
            </a>
          </div>

          {/* Hamburger Icon*/}
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
        </div>
      </div>
    </nav>
  );
}
