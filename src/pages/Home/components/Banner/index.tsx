import { Carousel } from "antd";
import banner1 from "@/assets/images/banner-1.jpg";
import banner2 from "@/assets/images/banner-2.png";
import banner3 from "@/assets/images/banner-3.jpg";

const Banner = () => {
  const banners = [banner1, banner2, banner3];
  return (
    <Carousel autoplay touchMove draggable className="h-[320px] bg-red-50 container select-none cursor-grab active:cursor-grabbing">
      {banners.map((banner) => (
        <div>
          <img src={banner} alt="" className="w-full h-[320px] object-cover"/>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
