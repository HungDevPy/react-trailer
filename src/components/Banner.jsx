import IconReting from "../assets/rating.png";
import IconRetingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";
const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-30" />
      <div className="h-full w-full flex items-center justify-center space-x-[30px] p-4">
        <div className="flex flex-col space-y-5 items-baseline z-10 w-[50%] p-10">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-400 py-1 px-3 text-md relative">
            Tv Show
          </p>
          <div className="flex flex-col space-y-4 text-white">
            <h2 className="text-[40px] font-bold">Nghe Noi Em Thich Toi</h2>
            <div className="flex items-center space-x-3">
              <img src={IconReting} alt="rating" className="w-8 h-8" />
              <img src={IconReting} alt="rating" className="w-8 h-8" />
              <img src={IconReting} alt="rating" className="w-8 h-8" />
              <img src={IconRetingHalf} alt="rating" className="w-8 h-8" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting,
            </p>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-black font-medium">
                Chi tiết
              </button>
              <button className="px-4 py-2 bg-red-700 font-medium ">
                Xem Phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img src={ImgTemp} alt="" className="w-full h-full object-cover" />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={IconPlay} alt="Play" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
