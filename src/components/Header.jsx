const Header = () => {
  return (
    <header style={{ background:"gray"}}>
      <img src="https://wallpapercave.com/wp/wp2675920.png" alt="x-men logo" style={{ width:"750px" }}/>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Registrate</a></li>
          <button>Cerrar Sesion</button>
        </ul>
      </nav>
    </header>
  )
}

export { Header }