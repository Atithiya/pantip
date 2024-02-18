import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export function Footer() {
  // Array of footer links
  const footerLinks = [
    ["กฎ กติกาและมารยาท", "คำแนะนำการโพสต์", "นโยบายเกี่ยวกับข้อมูลส่วนบุคคล"],
    ["สิทธิ์การใช้งานของสมาชิก", "ติดต่อทีมงาน Pantip", "ติดต่อลงโฆษณา"],
    ["ร่วมงานกับ Pantip", "Download App Pantip", "Pantip Certified Developer"],
  ];

  const socialIcons = [
    { icon: FaFacebook, link: "https://www.facebook.com/pantipdotcom/" },
    { icon: FaTwitter, link: "https://twitter.com/Pantip1996" },
    { icon: FaYoutube, link: "https://www.youtube.com/@pantipchannel" },
    { icon: FaInstagram, link: "https://www.instagram.com/pantipdotcom" },
    { icon: FaTiktok, link: "https://www.tiktok.com/@pantip1996" },
  ];

  return (
    <footer className="bg-gray-200 text-slate-800 text-lg lg:text-base">
      <div className="p-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {/* Mapping over the footerLinks array and rendering each column */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              {/* Mapping over each item in the column and rendering each link */}
              {column.map((link, i) => (
                <p
                  key={i}
                  className="hover:cursor-pointer hover:text-slate-500 mt-2 lg:mb-2"
                >
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Copyright */}
      <div className="p-5 border-t border-solid border-zinc-300 lg:flex lg:justify-between">
        <div>
          <p>© 2024 Internet Marketing co., ltd</p>
        </div>
        <div>
          <div className="flex mt-5 lg:mt-0 justify-between lg:justify-self-auto ">
            <p>ติดตาม</p>
            {/* Mapping over social icons and rendering each icon */}
            {socialIcons.map((item, index) => (
              <a href={item.link} key={index} target="_blank" rel="">
                <item.icon className="hover:cursor-pointer hover:text-slate-500 text-xl ms-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
