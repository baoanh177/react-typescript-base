import Hashtag from "@/components/common/Hashtag";
import background from "@/assets/images/search-bg.webp";
import SearchForm from "./SearchForm";
import { FaCaretRight } from "react-icons/fa";
import bidIcon from "@/assets/images/bid-icon.svg";
import dollar from "@/assets/images/dollar-bg.webp";
import { FaCheck } from "react-icons/fa6";

const Search = () => {
  const hashtags = ["đấu thầu mua sắm công", "đấu thầu đầu tư công", "đấu giá tài sản"];
  return (
    <>
      <section className="container relative p-5 overflow-hidden">
        <img src={background} alt="" className="absolute bottom-0 left-0 right-0 -z-10 w-full" />
        <div className="flex gap-8 max-[1200px]:flex-col-reverse">
          {/* Col Left - 2/3 */}
          <div className="w-2/3 max-[1200px]:w-full">
            <div className="text-2xl font-bold tracking-wide">Tìm kiếm thông tin</div>
            <div className="flex gap-2">
              {hashtags.map((hashtag) => (
                <Hashtag children={hashtag} />
              ))}
            </div>
            <p className="mt-1 font-semibold">
              Dữ liệu được cập nhật liên tục, hỗ trợ tìm kiếm nhanh chóng, chính xác và không hạn chế thời gian.
            </p>
            <SearchForm />
            <div className="mt-5 flex items-center gap-4">
              <div className="flex cursor-pointer items-center gap-1 text-blue-500 transition-colors hover:text-blue-600">
                <FaCaretRight /> <span>Thiết lập lại</span>
              </div>
              <div className="flex cursor-pointer items-center gap-1 text-blue-500 transition-colors hover:text-blue-600">
                <FaCaretRight /> <span>Hướng dẫn tra cứu</span>
              </div>
              <div className="flex cursor-pointer items-center gap-1 text-blue-500 transition-colors hover:text-blue-600">
                <FaCaretRight /> <span>Hướng dẫn săn thầu chủ động</span>
              </div>
            </div>
          </div>
          {/* Col Right - 1/3 */}
          <div className="w-1/3 max-[1200px]:w-full">
            <div className="relative w-full overflow-hidden rounded-lg">
              <div className="absolute inset-0 -z-10 h-full w-full bg-blue-500"></div>
              <img src={dollar} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
              <div className="z-10 px-4 py-5 text-white">
                <div className="text-2xl font-bold">Cơ hội cho bạn</div>
                <ul className="mt-4 flex flex-col gap-3">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-xl" />
                    <div className="flex gap-2">
                      <strong>7550</strong>
                      <span>dự án đang đợi nhà thầu</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-xl" />
                    <div className="flex gap-2">
                      <strong>116</strong>
                      <span>TBMT được đăng trong 24 giờ qua</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-xl" />
                    <div className="flex gap-2">
                      <strong>134</strong>
                      <span>KHLCNT được đăng trong 24 giờ qua</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-xl" />
                    <div className="flex gap-2">
                      <strong>21002</strong>
                      <span>TBMT được đăng trong tháng qua</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-xl" />
                    <div className="flex gap-2">
                      <strong>32874</strong>
                      <span>KHLCNT được đăng trong tháng qua</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-xl" />
                    <div className="flex gap-2">
                      <strong>204988</strong>
                      <span>TBMT được đăng trong năm qua</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="w-20 border-t border-gray-400"></div>
          <img src={bidIcon} alt="" className="h-8 w-8" />
          <div className="w-20 border-t border-gray-400"></div>
        </div>
      </section>
    </>
  );
};

export default Search;
