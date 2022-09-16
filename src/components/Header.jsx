import React from "react";


function Header(){
    return(
        <div id="Menu-bar">
            {/* Nav bar */}
          <nav className="navib navbar  navbar-expand-lg navbar-light" >
      
            <span className="ctimer1" >
              <h2 className="time"></h2>
              <h6 className="greeting"></h6>
            </span>
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-bar" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse sidenav" id="nav-bar">
              <div className="sidenav">        
                <ul className="navbar-nav ml-auto sidenav">
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/JohnChizzy">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#work">Works</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact-me">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Note</a>
                </li>
              </ul>
              </div>
        
            </div>
          </nav>
        </div>
    );
}

export default Header;