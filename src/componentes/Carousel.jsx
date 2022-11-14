import datos from '../datos.json'

export function Carousel() {
  return <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {
        datos.carousel.map((i, index)=>
          <div className={"carousel-item " + (index == 0 ? "active" : " ")}>
            <div className="d-flex justify-content-center align-items-center position-absolute w-100 h-100">
              <h1 key={index} className="bg-secondary text-primary p-3">{i.texto}</h1>
            </div>
            <img key={index} src={i.url} className="d-block w-100" alt={i.alt}/>
    </div>
        )
      }
    </div>
    
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
}

