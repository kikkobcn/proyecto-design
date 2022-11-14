import datos from "../datos.json"

export function Header() {
  return <div className="mt-6 d-flex justify-content-between">
              <div>
              <p>Logo</p>
                <p className="fs-4">{datos.header.name}</p>
              </div>
    <div>
      {
        datos.header.link.map((i, index)=>
          <a key={index} href={i.url}>{i.text}</a>
        )
      }
              
                </div>
        </div>
}