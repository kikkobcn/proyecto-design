import datos from '../datos.json'

function Seccion({data}) {
  return <div>
        <h5>{data.titulo}</h5>
        <ul className="nav flex-column">
      {
        data.links.map((item,index)=>
      <li key={index}><a  target="_blank" href={item.url}>{item.titulo}</a></li>
      )
      }
        </ul>
    </div>

}

export function Footer() {
  return <div className="d-flex justify-content-between mt-4">
      <div className="fs-4">{datos.header.name}</div>
  
    {
      datos.footer.map((i, index)=>
        <Seccion key={index} data={i}></Seccion>
      )
    }
    
    </div>
  
}

