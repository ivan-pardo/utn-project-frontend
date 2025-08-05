import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <img src="https://wallpapercave.com/wp/wp2675920.png" alt="x-men logo" style={{ width:"750px" }}/>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Registrate</Link></li>
          <button>Cerrar Sesion</button>
        </ul>
      </nav>
    </header>
  )
}

export { Header }