
import './App.css';
import Movie from './components/Movie';
import { useState, useEffect } from 'react';

// function filmes(setMovies) {
//   return (
//     <>
//     </>
//     )

// }
function App() {
  const [movies, setMovies] = useState([]);
  const [ativar,setAtivar] = useState(false)
  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then(response => response.json())
      .then(jsonData => jsonData.results)
      .then(setMovies)
      .catch(erro => console.log(erro))

  },[])

  function OpenModal(ativo){
    setAtivar(!ativo);
  }
  //  movies = [{film:"React"},{film:"Vue"} , {film:"Angular"}];
  // filmes(setMovies);
  return (
    <div className="App">
      <ul className="moviesList">
        <Movie ativar={ativar} openModal= {OpenModal} movie={movies} />
      </ul>
    </div>
  );
}

export default App;
