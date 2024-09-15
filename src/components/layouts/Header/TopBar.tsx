import Logo from "@/components/common/Logo";
import { Avatar, Button } from "antd";
import Input, { SearchProps } from "antd/es/input";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBell, FaRegUser } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import background from "@/assets/images/search-bg.webp";

const { Search } = Input;

const TopBar = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => console.log(info?.source, value);
  const isLogin = 0;
  return (
    <>
      <div className="relative">
        <img src={background} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="container flex min-h-[70px] items-center justify-between gap-10 py-3">
          <Logo />
          <div className="flex w-1/3 flex-col gap-2 max-[1080px]:w-1/2">
            {/* Contact info */}
            <div className="flex items-center justify-end gap-4 px-3">
              <div className="flex items-center gap-2 text-sm">
                <FaPhoneAlt />
                <a href="tel:0987654321" className="border-b-[.5px] border-white text-blue-500 hover:border-blue-500">
                  0987654321
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <IoMail />
                <a href="mailto:0987654321" className="border-b-[.5px] border-white text-blue-500 hover:border-blue-500">
                  contact@dauthau.asia
                </a>
              </div>
            </div>

            {/* Search - Login */}
            <div className="flex w-full items-center gap-5">
              <Search placeholder="Tìm kiếm thông tin đấu thầu" onSearch={onSearch} enterButton className="grow" size="large" />
              {isLogin ? (
                <div className="flex items-center gap-4">
                  <FaBell className="cursor-pointer text-lg text-gray-400 transition-colors hover:text-gray-500" />
                  <Avatar size="large" icon={<FaRegUser className="text-sm" />} className="bg-orange-700" />
                </div>
              ) : (
                <Button children="Đăng nhập" type="primary" size="large" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
