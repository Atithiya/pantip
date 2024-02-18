import { FaRegComment } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";

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

    // Add more topics here if needed
  ];

  return (
    <div className="p-5 container bg-slate-100 text-lg lg:text-base">
      <div className="mb-5">
        <h3 className="text-orange-500 font-semibold">Pantip Realtime</h3>
        <p className="text-slate-800">
          กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
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
                  <FaRegComment className="text-blue-500" />
                  <p>{topic.commentsCount}</p>
                  <CiSquarePlus className="text-green-500" />
                  <p>{topic.plusCount}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center ">
        <p className="my-5 text-slate-800 font-bold">สำรวจกระทู้พันทิปต่อ</p>
        <button className="btn btn-outline btn-primary ">
          ดูทั้งหมด <FaExternalLinkAlt />
        </button>
      </div>
    </div>
  );
}
