
function Movie(props) {
        return(
            <>
            {props.movies.map((movie,index) => {
                return (
                    <>
                <li className="movie" id="movie" key={index} onClick = {props.OpenModal(props.ativar)} >{movie.title}</li>
                <seeDetails movie={movie} ativar = {props.ativar} />
                    </>
                // <li key = {index}> {item.results[0].title} </li>
                )
            })}
            
            </>
        )
    }

    function seeDetails(props){
        console.log("Detalhes: " + props.title);
        return(
            <>
            </>
        )
      }

    export default Movie;