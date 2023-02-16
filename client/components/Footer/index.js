import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="./assets/images/logo.png" alt="NAFT logo" />
              </a>

              <h3 className="h4 social-title">Join the community</h3>

              <ul className="social-list">
                <li>
                  <a
                    href="https://github.com/chotapathak"
                    className="social-link"
                  >
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-link-box"></div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2022 <a href="https://github.com/chotapathak">@PAthak</a>{" "}
              all rights reserved
            </p>

            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer