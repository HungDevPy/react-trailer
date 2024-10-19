import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import { MovieProvider } from "./context/MovieProvider";
function App() {
  const [movie, setMovie] = useState([]);
  const [movieRated, setMovieRated] = useState([]);
  const [movieDay, setMovieDay] = useState([]);
  const [movieNew, setMovieNew] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const heandleSearch = async (search) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fechMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1";
      const url3 =
        "https://api.themoviedb.org/3/trending/movie/day?language=vi";
      const url4 = "https://phim.nguonc.com/api/films/phim-moi-cap-nhat?page=1";
      const [res1, res2, res3, res4] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
        fetch(url3, options),
        fetch(url4, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      const data3 = await res3.json();
      const data4 = await res4.json();

      setMovie(data1.results);
      setMovieRated(data2.results);
      setMovieDay(data3.results);
      setMovieNew(data4.items);
    };
    fechMovie();
  }, []);

  return (
    <>
      <MovieProvider> 
      <div className="bg-black pb-10">
        <Header onsearch={heandleSearch} />
        <Banner />
        {movieSearch.length > 0 ? (
          <MovieSearch title={"Ket qua tim Kiem"} data={movieSearch} />
        ) : (
          <>
            <MovieList title={"Phim Hot"} data={movie} />
            <MovieList title={"Phim Moi"} data={movieRated} />
            <MovieList title={"Phim Hot Trong Ngay"} data={movieDay} />
            <MovieList title={"Phim moi cap nhat"} data={movieNew} />
          </>
        )}
      </div>
        </MovieProvider> 
    </>
  );
}

export default App;
