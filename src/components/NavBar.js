
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
                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Categorias
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    Acción
                                </a>
                                <a className="navbar-item">
                                    Rol
                                </a>
                                <a className="navbar-item">
                                    Estrategia
                                </a>
                                <a className="navbar-item">
                                    Simulación
                                </a>
                                <a className="navbar-item">
                                    Deportes
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Reportar un problema
                                </a>
                            </div>
                        </div>
                        <CartWidget/>
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-secondary">
                                    <strong>Registrarse</strong>
                                </a>
                                <a className="button is-primary">
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
