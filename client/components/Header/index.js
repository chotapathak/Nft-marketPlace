import React from "react";
import { useConnect, useAccount } from "wagmi";
import { Link } from "react-router-dom";

const Header = () => {
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount({ fetchEns: true });
  const connected = connectData.connected;

  return (
      <div>
        <header>
          <div className="container">
            <Link to="/" className="logo">
            <a href="#" className="logo">
              <img style={{width: '60px', height: '60px'}} src="https://www.svgrepo.com/show/503705/leaves.svg" alt="NFT logo" />
            </a>
            </Link>

            <div className="header-right">
              <div className="header-nav-wrapper">
                <button className="navbar-toggle-btn" data-navbar-toggle-btn>
                  <ion-icon name="menu-outline"></ion-icon>
                </button>
              
                <nav className="navbar" data-navbar>
                  <ul className="navbar-list">
                    <li>
                      <Link to="/" className="navbar-link">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/create" className="navbar-link">
                        Create
                      </Link>
                    </li>
                    <li>
                      <Link to="/explore" className="navbar-link">
                        Explore
                      </Link>
                    </li>
                    <li>
                      <Link to="/collections" className="navbar-link">
                        Collections
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="navbar-link">
                        About
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header-actions">
                <input
                  type="search"
                  placeholder="Search"
                  className="search-field"
                />
                <button className="btn btn-primary" onClick={disconnect}>{connected ? "disconnect" :"Sign in"}</button>
              </div>
            </div>
          </div>
        </header>
      </div>
  );
};

export default Header;
