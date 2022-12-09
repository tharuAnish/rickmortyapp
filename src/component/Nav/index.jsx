import "./nav.style.css"

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <a href="#">Docs</a>
        <a href="#">About</a>
        <a target="_blank" href="https://rickandmortyapi.com/api/character">
          API
        </a>
      </div>
      <input className="search" type="text" placeholder="Search" />
    </div>
  )
}

export default Nav
