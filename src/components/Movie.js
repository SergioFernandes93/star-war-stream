
function Movie({movie}) {
        return(
            <>
            {movie.map((item,index) => {
                return (
                    <>
                <li className="movie" id="movie" key={index} onClick = {seeDetails(item)} >{item.title}</li>
                <seeDetails/>
                    </>
                // <li key = {index}> {item.results[0].title} </li>
                )
            })}
            
            </>
        )
    }

    function seeDetails(item){
        console.log("Detalhes: " + item.title);
        return(
            
        )
      }

    export default Movie;