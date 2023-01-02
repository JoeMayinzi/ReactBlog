import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={` ${styles.Header}`}>
            <nav className='container'>
            <ul>
                <a  data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
                  <i class="fa-solid fa-bars"></i>
                </a>
                <li className='logo'><strong>Comptable Entrepreuneur</strong></li>
            </ul>
            <ul>
                <Link to="/"><li className='navLink'>Accueil</li></Link>
                <Link><li className='navLink'>Catégorie</li></Link>
                <Link to="/services"><li className='navLink'>Services</li></Link>
                <Link to={"/about"}><li className='navLink'>A propos</li></Link>
                <Link><li className='navLink'>Contact</li></Link>
                <Link to="/admin"><li className='navLink'>Admin</li></Link>
                <i class="fa fa-search nav" aria-hidden="true"></i>
            </ul>
            </nav>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">Brand</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div className="dropdown mt-3">
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Header;