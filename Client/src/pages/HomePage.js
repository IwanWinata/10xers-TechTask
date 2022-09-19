import Banner from "../components/Banner";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import ScrollList from "../components/ScrollList";
import Footer from "../components/Footer";

const HomePage = () => {
  const [genres, setGenres] = useState([]);
  const [myList, setMyList] = useState([]);

  const fetchGenre = async () => {
    try {
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US"
      );
      setGenres(data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMyList = () => {
    let data = localStorage.getItem("myList");
    setMyList(JSON.parse(data));
  };

  const deleteHandler = (id) => {
    let myList = localStorage.getItem("myList");
    myList = JSON.parse(myList);
    let filtered = myList.filter((el) => el.id !== id);
    localStorage.setItem("myList", JSON.stringify(filtered));
    fetchMyList()
  }

  useEffect(() => {
    fetchGenre();
    fetchMyList();
  }, []);

  const scrollLeft = () => {
    var scroller = document.getElementById("scroll");
    scroller.scrollLeft = scroller.scrollLeft - 500;
  };

  const scrollRight = () => {
    var scroller = document.getElementById("scroll");
    scroller.scrollLeft = scroller.scrollLeft + 500;
  };

  return (
    <>
      <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-300 flex">
        <Banner />
      </div>
      <p className="text-orange-500 text-4xl font-bold mb-1 text-center mt-2">
        My List
      </p>
      <div className="w-full flex relative items-center rounded-lg">
        <MdChevronLeft onClick={scrollLeft} size={40} />
        <div
          id="scroll"
          className="h-full w-full overflow-hidden border shadow-lg whitespace-nowrap scroll-smooth rounded-lg"
        >
          {(!myList || myList.length === 0) ? 
          <p className="text-center font-bold text-xl text-black">Nothing here! Scroll to discover more</p>
          :
           myList.map((el) => (
            <div className="w-[220px] h-[300px] inline-block p-2 group perspective">
              <div className="w-full h-full object-contain cursor-pointer group-hover:my-rotate-y-180 preserve-3d ease-in-out duration-1000">
                <img
                  className="absolute w-full h-full backface-hidden border-2 rounded-lg"
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.backdrop_path}`}
                  alt="/"
                />
                <div className="absolute my-rotate-y-180 w-full h-full backface-hidden bg-gray-200">
                  <div className="text-center flex flex-col items-center justify-center text-orange-500 h-full">
                    <p className="text-sm font-bold mb-1">{el.original_title}</p>
                    <button onClick={() => deleteHandler(el.id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      Remove From List
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight onClick={scrollRight} size={40} />
      </div>
      {genres.map((el, idx) => (
        <ScrollList el={el} key={idx} fetchMyList={fetchMyList} />
      ))}
      <Footer/>
    </>
  );
};
export default HomePage;
