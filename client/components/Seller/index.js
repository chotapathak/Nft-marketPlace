import React from 'react'

function Seller () {
  return (
    <div>
        <section className="top-seller">
        <div className="container">

          <h2 className="h2 top-seller-title">
            Top seller in <span>1</span> day
            <ion-icon name="chevron-down"></ion-icon>
          </h2>

          <ol className="top-seller-list">


            <li className="top-seller-item" tabIndex={0}>
              <a href="#" className="top-seller-card">

                <div className="card-number">12</div>

                <figure className="card-avatar">
                  <img
                  style={{"width": "60px", "height": "60px"}}
                   src="https://www.svgrepo.com/show/493093/person-who-gargles.svg" alt="Nikola tesla"/>
                </figure>

                <div className="card-content">
                  <h3 className="h5 card-title">Nikola tesla</h3>

                  <data value="2500000">$2500,000</data>
                </div>

              </a>
            </li>

          </ol>

        </div>
      </section>
    </div>
  )
}


export default Seller;