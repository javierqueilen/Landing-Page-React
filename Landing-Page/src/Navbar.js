import React from "react";

const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/#">BootstrapNavbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Test-query
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/#">Action</a>
                            <a className="dropdown-item" href="/#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/#">Something else here</a>
                        </div>
                    </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/#" tabindex="-1" aria-disabled="true">Contact</a>
                        </li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default Navbar;