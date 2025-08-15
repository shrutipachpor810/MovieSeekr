import {useState, useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// 4ee6d629
const API_URL=process.env.REACT_APP_API_URL 

const movie1 = {
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg",
    "Title": "The Batman",
    "Type": "movie",
    "Year": "2022"
}
const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies,setMovies]=useState([]);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
      <div className="app">
        <h1>MovieSeekr</h1>
        <h2>Search made sleek.</h2>
        <div className="search">
            <input placeholder="Search for Movies"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}/>
             <img src={SearchIcon}
             alt="search"
             onClick={()=>searchMovies(searchTerm)}
             />   
        </div>

        {movies?.length>0
            ?(
                <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ):(
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )
        }
        </div>
    );
}   
export default App;