const Navbar = ({ screen }) => {
  
  return (
    <nav className={`navbar navbar-main navbar-expand-lg ${screen > 100 && 'navbar-change'}` }>
        <a className="navbar-brand" href="#">
          <img src="images/icons/coding.svg" alt="temp logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home</a>
            <a className="nav-item nav-link" href="#">Projetos</a>
            <a className="nav-item nav-link" href="#">Habilidades</a>
            <a className="nav-item nav-link" href="#">Métricas</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;

