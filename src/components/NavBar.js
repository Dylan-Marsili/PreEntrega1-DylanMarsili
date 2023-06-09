
import logo from "../img/logo.png";
import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img
                            src={logo}
                            width="60"
                            height="88"
                        />
                        <span className="navbar-item-text">GameStore</span>
                    </a>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Categorias
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    Acción
                                </a>
                                <a class="navbar-item">
                                    Rol
                                </a>
                                <a class="navbar-item">
                                    Estrategia
                                </a>
                                <a class="navbar-item">
                                    Simulación
                                </a>
                                <a class="navbar-item">
                                    Deportes
                                </a>
                                <hr class="navbar-divider" />
                                <a class="navbar-item">
                                    Reportar un problema
                                </a>
                            </div>
                        </div>
                        <CartWidget/>
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-secondary">
                                    <strong>Registrarse</strong>
                                </a>
                                <a class="button is-primary">
                                    Ingresar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
