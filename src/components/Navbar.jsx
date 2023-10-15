function Navbar () {
    return (
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./img/notion.png" alt="Nama Logo" />
            <span className="brand-text">Irsan R. Harahap - 120140043</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/kontak">
                  Kontak
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tentang">
                  Tentang
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    );
}

export default Navbar;