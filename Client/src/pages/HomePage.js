import Banner from '../components/Banner'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import axios from 'axios'
import { useEffect, useState } from "react";
import ScrollList from '../components/ScrollList'

const HomePage = () => {
    const [genres, setGenres] = useState([])

    const fetchGenre = async () => {
        try {
            let {data} =  await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US")
            setGenres(data.genres)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchGenre()
        console.log(genres);
    }, [])

    const scrollLeft = () => {
        var scroller = document.getElementById("scroll")
        scroller.scrollLeft = scroller.scrollLeft - 500
    }

    const scrollRight= () => {
        var scroller = document.getElementById("scroll")
        scroller.scrollLeft = scroller.scrollLeft + 500
    }

    return (
        <>
        <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-300 flex">
            <Banner/>
        </div>
        <p className="text-black text-4xl font-bold mb-1 text-center mt-2">My List</p>
        <div className='w-full flex relative items-center'>
            <MdChevronLeft onClick={scrollLeft} size={40}/>
            <div id="scroll" className="h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth">
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
                <img className="w-[220px] h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg" alt="/"/>
            </div>
            <MdChevronRight onClick={scrollRight} size={40}/>
        </div>
        {
            genres.map((el, idx) => <ScrollList el={el} key={idx}/>)
        }
        </>
    )
}
export default HomePage