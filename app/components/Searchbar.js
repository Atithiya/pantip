import { IoSearchOutline } from "react-icons/io5";

export function Searchbar() {
  return (
    <div className="w-full bg-white container border-b border-solid border-zinc-200 hidden lg:block">
      <div className="px-5 pt-24 flex items-center lg:mx-44 text-slate-900 p-5 ">
        <input
          type="text"
          placeholder="ค้นหาบน Pantip"
          style={{
            width: "calc(100% - 40px)",
            height: "60px",
            borderRadius: "50px",
            background: "white",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
          className="text-center input input-bordered  placeholder:text-gray-500 "
        />
        <div
          className="btn btn-primary ms-2 "
          style={{ borderRadius: "50%", width: "50px", height: "50px" }}
        >
          <div className="text-2xl font-extrabold text-white">
            <IoSearchOutline />
          </div>
        </div>
      </div>
    </div>
  );
}
