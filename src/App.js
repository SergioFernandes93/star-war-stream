
import './App.css';
import Movie from './components/Movie';
import { useState } from 'react';

function filmes(setMovies){
  return(
    fetch("https://swapi.dev/api/films/")
  .then(response =>  response.json())
  .then(jsonData => jsonData.results)
  .then(setMovies)
  .catch(erro => console.log(erro))
  )

}   
function App() {

  const [movies, setMovies] = useState([]);
  //  movies = [{film:"React"},{film:"Vue"} , {film:"Angular"}];
  filmes(setMovies);
    return (
      <div className="App">
        <ul className="moviesList">
          <Movie movie={movies}/>
        </ul>
      </div>
    );
  }

export default App;
