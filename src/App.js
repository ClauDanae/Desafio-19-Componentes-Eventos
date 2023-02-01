import { useState } from "react"
import { BaseColaboradores } from "./colaboradores"
import Button from 'react-bootstrap/Button';

function App() {
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [nombreBusqueda, setNombreBusqueda] = useState("")
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const agregarColaborador = (e) => {
    e.preventDefault()
    if (nombre === "" || correo === "") {
      alert("Debe ingresar un nombre y correo")
      return
    }
    setListaColaboradores([...listaColaboradores, { nombre: nombre, correo: correo }])
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary justify-content-between p-3">
        <h2 className="navbar-brand">Buscador de Colaboradores</h2>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" onChange={(e) => setNombreBusqueda(e.target.value)} placeholder="Busca un colaborador" aria-label="Search"></input>
        </form>
      </nav>
      <div className="container">
        <form onSubmit={agregarColaborador} className="form">
          <div className="form-group">
            <label className="mt-3" htmlFor="name">Nombre</label>
            <input id="name" className="form-control" placeholder="Ingresa el nombre del colaborador" name="Nombre" onChange={(e) => setNombre(e.target.value)} />

            <label className="mt-3" htmlFor="pass">Correo</label>
            <input id="pass" className="form-control" placeholder="Ingresa el correo del colaborador" type="email" name="Contraseña" onChange={(e) => setCorreo(e.target.value)} />
          </div>
          <Button className="my-3" disabled={nombre === "" || correo === ""} type="submit">Agregar colaborador</Button>

        </form>
        <h1>Listado de colaboradores</h1>
        <ul>
          {listaColaboradores.filter(c => c.nombre.includes(nombreBusqueda) ).map(col => <li key={col.nombre}>
            {col.nombre} - {col.correo} </li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
