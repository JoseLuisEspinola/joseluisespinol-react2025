function Nav() {
    return (
      <nav class="navbar fixed-top navbar-expand-lg bg-primary-subtle" style={{ zIndex: '10' }}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="/vite.svg" alt="Bootstrap" width="30" height="24" style={{ marginRight: "10px" }} />
                    E-Commerce
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#somos">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#preguntas">Preguntas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#galeria">Galería</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Carrito</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
    );
};

export default Nav;
