import { FaRegComment } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";

export function Topic() {
  // Array of topic information objects
  const topics = [
    {
      title: "ทุกวันนี้เพื่อนๆ ยังฟังวิทยุกันอยู่ไหมครับ ?",
      member: "สมาชิกหมายเลข 6479264",
      creationDate: "14 ก.พ. 2567",
      commentsCount: 95,
      plusCount: 3,
      image:
        "https://i.pinimg.com/564x/43/11/77/43117731a4ea5663142e709762f053f1.jpg",
    },
    {
      title: "เที่ยวอุดรธานี..รำลึกความหลังแบบ สว. สไตล์ (20-21 ม.ค. 67)",
      member: "สมาชิกหมายเลข 8282822",
      creationDate: "16 ก.พ. 2567",
      commentsCount: 10,
      plusCount: 3,
      image: "https://f.ptcdn.info/202/083/000/s8p2rv26m5mj4QVeaT1VL-o.jpg",
    },
    {
      title: "เค้กกล้วยหอมข้าวโอ้ต",
      member: "Jenny B.",
      creationDate: "16 ก.พ. 2567",
      commentsCount: 30,
      plusCount: 0,
      image: "https://f.ptcdn.info/249/083/000/s8yfv82oz5zrq1G0g2qE-o.jpg",
    },
    {
      title: "แอบหลงรักแมวจร จนเก็บมาเลี้ยง",
      member: "สมาชิกหมายเลข 6985734",
      creationDate: "16 ก.พ. 2567",
      commentsCount: 40,
      plusCount: 0,
      image:
        "https://i.pinimg.com/564x/9a/1c/3c/9a1c3cc349cd465e5625df3bffbfe8bf.jpg",
    },
    {
      title:
        "มาทำข้าวคลุกกะปิกันครับ สูตรนี้เครื่องเคียงจัดเต็ม แบบจุกๆ ไปเลยครับ",
      member: "Mr.Telephoneman ",
      creationDate: "15 ก.พ. 2567",
      commentsCount: 20,
      plusCount: 1,
      image: "https://f.ptcdn.info/238/083/000/s8wi3ojwddv0rBM5NcOv-o.jpg",
    },
    {
      title:
        "รีวิวการ์ตูนชีวิตวัยรุ่น Saru lock หนุ่มเอ๊าะ สะเดาะล๊อค ช่างทำกุญแจ เด็ก ม ปลาย คลั่งไคล้ไอดอล",
      member: "สมาชิกหมายเลข 6425776",
      creationDate: "14 ก.พ. 2567",
      commentsCount: 33,
      plusCount: 2,
      image: "https://f.ptcdn.info/192/083/000/s8mjj31iuixkbRd34DNNh-o.jpg",
    },
    {
      title:
        "ขาหมู-สามชั้นกับเอ็นตุ๋นลำไย ใส่รากบัว-เห็ดหอม นุ่มๆ กรุบๆ คอลลาเจนละลายในปากเลยครับ เมนูเพื่อสุขภาพ(จิต)",
      member: "ผมชอบทำอาหาร",
      creationDate: "14 ก.พ. 2567",
      commentsCount: 23,
      plusCount: 80,
      image:
        "https://f.btwcdn.com/store-45927/product/d36f8f98-40d2-b8a0-ce1c-608f9300fdb7.jpg",
    },
    {
      title: "aespa ในงานเปิดตัวภาพยนตร์ aespa: MY First page",
      member: "Ningning",
      creationDate: "14 ก.พ. 2567",
      commentsCount: 20,
      plusCount: 0,
      image: "https://f.ptcdn.info/234/083/000/s8vspw1egia7j3sw0jBYs-o.jpg",
    },
    {
      title: "ขนมเข่งถั่วเหลืองทอด เมนูควันหลงวันตรุษจีน",
      member: "Nekkojung",
      creationDate: "13 ก.พ. 2567",
      commentsCount: 50,
      plusCount: 2,
      image: "https://f.ptcdn.info/223/083/000/s8ttg2ipe1wur7ZtB7GQ-o.jpg",
    },
    {
      title:
        "[CR] Beijing Winter Trip 2024 ปักกิ่ง ก็มีเทศกาลน้ำแข็งนะ Longqingxia Ice Lantern Festival",
      member: "สมาชิกหมายเลข 6249955",
      creationDate: "13 ก.พ. 2567",
      commentsCount: 22,
      plusCount: 0,
      image: "https://f.ptcdn.info/209/083/000/s8qhmo1glv1CG50jYATjy-o.jpg",
    },
    {
      title: "Orlando Magic จัดงานรีไทร์เบอร์เสื้อครั้งเเรก",
      member: "Hana007",
      creationDate: "13 ก.พ. 2567",
      commentsCount: 42,
      plusCount: 1,
      image:
        "https://fadeawayworld.net/.image/t_share/MjAwODg0MjI3NTQ4NDU2MTQw/378220994_1030826757949222_1313125244398475813_n.jpg",
    },
    {
      title: "แผ่นใต้ฝาน้ำอัดลม",
      member: "Red_Team22",
      creationDate: "12 ก.พ. 2567",
      commentsCount: 38,
      plusCount: 4,
      image: "https://f.ptcdn.info/207/083/000/s8q9992pzyPLLv8KkIsS-o.jpg",
    },
  ];

  return (
    <div className="p-5 lg:px-10 container bg-white text-lg lg:text-base">
      {/* Realtime Topics */}
      <div className="mb-5">
        <h3 className="text-orange-500 font-semibold lg:text-xl">
          Pantip Realtime
        </h3>
        <p className="text-slate-800">
          กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* Mapping over the topics array and rendering each topic */}
        {topics.map((topic, index) => (
          <div
            key={index}
            className=" rounded-2xl hover:cursor-pointer hover:bg-gray-200 hover:border-none lg:mb-5"
          >
            {/* Image of Topic */}
            <div className="">
              <img
                src={topic.image}
                className="w-full rounded-2xl lg:h-64 h-96"
                alt="Topic Image"
              />
            </div>
            {/* Topic Information */}
            <div className="p-5">
              {/* Topic */}
              <h3 className="font-semibold text-slate-800">{topic.title}</h3>
              <div className="text-gray-500">
                {/* Member */}
                <p>{topic.member}</p>
                {/* Creation Date */}
                <p>{topic.creationDate}</p>
                {/* Comments Count and Plus Count */}
                <div className="flex gap-2 items-center">
                  <FaRegComment className="text-indigo-950" />
                  <p>{topic.commentsCount}</p>
                  <CiSquarePlus className="text-green-700" />
                  <p>{topic.plusCount}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* More Topic */}
      <div className="text-center my-5 ">
        <p className=" text-xl text-slate-900 font-bold mb-5">
          สำรวจกระทู้พันทิปต่อ
        </p>
        <button className="btn btn-neutral text-white text-base bg-black">
          แสดงมากขึ้น
        </button>
      </div>
    </div>
  );
}
