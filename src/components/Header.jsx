import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(true)

  return (
    <header>
      <img
        src="https://wallpapercave.com/wp/wp2675920.png"
        alt="x-men logo"
        style={{ width: "750px" }}
      />
      <nav>
        <ul>
          {
            user && <>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <button>Cerrar Sesion</button>
            </>
          }
          {
            !user && <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Registrate</Link></li>
            </>
          }
        </ul>
      </nav>
    </header>
  );
};

export { Header };
