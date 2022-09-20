import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useEffect, useState } from "react";

const ScrollList = ({ el, fetchMyList }) => {
  let [movies, setMovies] = useState([]);

  const scrollLeft = () => {
    var scroller = document.getElementById(`scrollGenre${el.id}`);
    scroller.scrollLeft = scroller.scrollLeft - 500;
  };

  const scrollRight = () => {
    var scroller = document.getElementById(`scrollGenre${el.id}`);
    scroller.scrollLeft = scroller.scrollLeft + 500;
  };

  const fetchMovies = async () => {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${el.id}&with_watch_monetization_types=flatrate`
      );
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const findMovie = async (id) => {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const addHandler = async (id) => {
    try {
      let myList = localStorage.getItem("myList");
      if (!myList) {
        let foundMovie = await findMovie(id);
        localStorage.setItem("myList", JSON.stringify([foundMovie]));
        fetchMyList();
      } else {
        myList = JSON.parse(myList);
        let foundMovie = await findMovie(id);
        myList.push(foundMovie);
        localStorage.setItem("myList", JSON.stringify(myList));
        fetchMyList();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <p className="text-orange-500 text-4xl font-bold mb-1 text-center mt-10">
        {el.name}
      </p>
      <div className="w-5/6 flex relative items-center m-auto shadow-lg border mb-10 rounded-lg">
        <MdChevronLeft onClick={scrollLeft} size={40} />
        <div
          id={`scrollGenre${el.id}`}
          className="h-full w-full whitespace-nowrap overflow-hidden scroll-smooth"
        >
          {movies || movies.length !== 0 ? (
            movies.map((el, idx) => (
              <div
                key={idx}
                className="w-[220px] h-[300px] inline-block p-2 group perspective"
              >
                <div className="w-full h-full object-contain cursor-pointer group-hover:my-rotate-y-180 preserve-3d ease-in-out duration-1000">
                  <img
                    className="absolute w-full h-full backface-hidden border-2 rounded-lg"
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.backdrop_path}`}
                    alt="/"
                  />
                  <div className="absolute my-rotate-y-180 w-full h-full backface-hidden bg-gray-200 rounded-lg">
                    <div className="text-center flex flex-col items-center justify-center text-orange-500 h-full">
                      <p className="text-sm font-bold">{el.original_title}</p>
                      <button
                        onClick={() => addHandler(el.id)}
                        className="mt-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Add To My List
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center font-bold text-xl text-black">
              Nothing here! Scroll to discover more
            </p>
          )}
        </div>
        <MdChevronRight onClick={scrollRight} size={40} />
      </div>
    </>
  );
};
export default ScrollList;
