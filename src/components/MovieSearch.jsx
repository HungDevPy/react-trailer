import PropType from "prop-types";
import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";
  
const MovieSearch = ({ title, data }) => {
  const { handleTrailer } = useContext(MovieContext);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className=" uppercase text-xl font-bold mb-4 leading-5">{title}</h2>
      <div className=" grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2  gap-4">
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-[200px] h-[300px] bg-red-600 mb-4 relative group"
            onClick={() => handleTrailer(item.id)}
          >
            <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 px-1" />
              <img
                src={
                  item.thumb_url ||
                  `${import.meta.env.VITE_IMG_URL}${item.poster_path}`
                }
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-3">
                <p className="uppercase text-md ">
                  {item.title || item.original_title || item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
  
};
MovieSearch.propTypes = {
  title: PropType.string,
  data: PropType.array,
};

export default MovieSearch;
