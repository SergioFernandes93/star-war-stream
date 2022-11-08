function Modal(item){
    console.log("Detalhes: " + item);
    return(
        <section className="modal">
        <div className="backdrop"/>
        <div className="divContent">
                <span>Título: {item.title}</span> 
                <span>Diretor: {item.director}</span>
                <span>Sinopse: {item.opening_crawl}</span>
        </div>
    </section>
    )
  }
  export default Modal;