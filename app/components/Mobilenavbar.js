import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export function Mobilenavbar() {
  return (
    <div className="p-5 bg-white text-slate-900  container block lg:hidden fixed top-0 w-full z-10">
      {/* Search , input and hamburger box */}
      <div className="flex items-center lg:mx-44 w-full">
        {/* Search bar */}
        <div
          className="btn bg-white btn-ghost text-slate-900"
          style={{ borderRadius: "50%", width: "50px", height: "50px" }}
        >
          <div className="text-2xl font-extrabold">
            <IoSearchOutline />
          </div>
        </div>
        {/* Input */}
        <input
          type="text"
          placeholder="ค้นหาบน Pantip"
          style={{
            height: "55px",
            borderRadius: "50px",
            background: "white",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
          className="text-center input input-bordered placeholder:text-slate-900 mx-1 w-full"
        />
        {/* Hamburger logo */}
        <div>
          <div className="navbar-end">
            <a className="">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar text-2xl border border-gray-300
                "
                >
                  <div className="">
                    <GiHamburgerMenu />
                  </div>
                </div>
                {/* mobile navbar option */}
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-slate-800 bg-slate-200 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">เข้าสู่ระบบ</a>
                  </li>
                  <li>
                    <a>สมัครสมาชิก</a>
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
    </div>
  );
}
