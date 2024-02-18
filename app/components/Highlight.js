export function Hightlight() {
  return (
    // Hightlight section is developing for mobile device
    <div className="p-5 bg-slate-100 text-lg lg:text-base container hidden lg:block">
      <div className="mb-5">
        <h3 className="text-orange-500 font-semibold lg:text-xl">Hightlight</h3>
      </div>
      {/* hightlight container */}
      <div className="carousel w-full ">
        <div
          id="slide1"
          className="carousel-item relative w-full flex justify-between "
        >
          <div className="card w-96 text-slate-800 bg-slate-100 hover:bg-gray-200 hover:cursor-pointer shadow-md m-2">
            <figure>
              <img
                src="https://f.ptcdn.info/102/083/000/s85jq621m8vDFqmyF0t2q-o.png"
                alt="hightlightphoto"
              />
            </figure>
            <div className="card-body ">
              {/*Title of hightlight */}
              <h2 className="card-title">
                [Pantip Point] วาเลนไทน์นี้ อยากควงน้องเพี้ยนไปเดตที่ไหนดี ?
                <div className="badge badge-secondary">NEW</div>
              </h2>
              {/* Member who created*/}
              <p>น้องเพี้ยนไง จะใครล่ะ</p>
            </div>
          </div>

          <div className="card w-96 text-slate-800 bg-slate-100 hover:bg-gray-200 hover:cursor-pointer shadow-md m-2">
            <figure>
              <img
                src="https://f.ptcdn.info/153/083/000/s8fdj0d9a1mFffFn8wIq-o.jpg"
                alt="pantip-point"
              />
            </figure>
            <div className="card-body">
              {/*Title of hightlight */}
              <h2 className="card-title">
                กิจกรรมแชร์ประสบการณ์ “จีบผ่านโซเชียลออนไลน์ VS
                จีบแบบเจอโดยบังเอิญ” ได้หรือโดนเท ตอบถูกใจ รับ Pantip point 150
                คะแนน
                <div className="badge badge-secondary">NEW</div>
              </h2>
              {/* Member who created*/}
              <p>The Tech Unicorn</p>
            </div>
          </div>

          <div className="card w-96 text-slate-800 bg-slate-100 hover:bg-gray-200 hover:cursor-pointer shadow-md m-2">
            <figure>
              <img
                src="https://f.ptcdn.info/236/083/000/s8w1c21mcn0IbrbPwn7Xg-o.jpg"
                alt="sunscreen"
              />
            </figure>
            <div className="card-body">
              {/*Title of hightlight */}
              <h2 className="card-title">
                พี่แป้งชวนรีวิว “ครีมกันแดดตัวเด็ด“ ภาค 4
                ลุ้นรับตุ๊กตาน้องเพี้ยนไซส์ใหญ่ ครีมกันแดด และพันทิปพอยท์
              </h2>
              {/* Member who created*/}
              <p>พี่แป้งแบ่งปัน</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {/* Slide to left */}
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            {/* Slide to right */}
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full flex justify-between"
        >
          <div className="card w-96 text-slate-800 bg-slate-100 hover:bg-gray-200 hover:cursor-pointer shadow-md m-2">
            <figure>
              <img
                src="https://f.ptcdn.info/617/082/000/s5jjj3hcfjr2Dof0812m-o.png"
                alt="Pantip Pick"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {/*Title of hightlight */}
                Pantip Pick of the Year 2023 - รวม 10 สุดยอดกระทู้แห่งปี 2566
                ที่ถูกใจทีมงาน Pantip
                <div className="badge badge-secondary">NEW</div>
              </h2>
              {/* Member who created*/}
              <p>PANTIP CREW</p>
            </div>
          </div>
          <div className="card w-96 text-slate-800 bg-slate-100 hover:bg-gray-200 hover:cursor-pointer shadow-md m-2">
            <figure>
              <img
                src="https://f.ptcdn.info/176/083/000/s8ja8u18fkoBZrQ8UG3Ou-o.jpg"
                alt="vacation"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {/*Title of hightlight */}
                สถานที่ท่องเที่ยวสุดโรแมนติกของคุณคือ … ❤ แชร์มาเลย ลุ้นรับ
                Pantip Point และของขวัญ
                <div className="badge badge-secondary">NEW</div>
              </h2>
              {/* Member who created*/}
              <p>บลูแพลนเที่ยว</p>
            </div>
          </div>
          <div className="card w-96 text-slate-800 bg-slate-100 hover:bg-gray-200 hover:cursor-pointer shadow-md m-2">
            <figure>
              <img
                src="https://f.ptcdn.info/007/082/000/s2nc191schy1n4uqopP3L-o.jpg"
                alt="income-pantip"
              />
            </figure>
            <div className="card-body">
              {/*Title of hightlight */}
              <h2 className="card-title">
                ข่าวดี! เพื่อนๆ สามารถสร้างรายได้ไปพร้อมกับใช้งาน Pantip
                ได้แล้วนะ
              </h2>
              {/* Member who created*/}
              <p>ฝ่ายสมาชิกสัมพันธ์</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {/* Slide to left */}
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            {/* Slide to Right */}
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
