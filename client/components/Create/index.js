import React from "react";

// https://www.svgrepo.com/show/503851/upgrade.svg

const Create = () => {
  return (
    <div>
      <section className="about">
        <div className="container">
          <h2 className="h2 about-title">Create and sell your NFTs</h2>

          <ol className="about-list">
            <li className="about-item">
              <div className="about-card">
                <div className="card-number">01</div>

                <div className="card-icon">
                  <img
                  style={{"width": "50px", "height": "50px"}}
                    src="https://www.svgrepo.com/show/503851/upgrade.svg"
                    alt="wallet icon"
                  />
                </div>

                <h3 className="h3 about-card-title">Set up Your Wallet</h3>

                <p className="about-card-text">customise later</p>
              </div>
            </li>

            <li className="about-item">
              <div className="about-card">
                <div className="card-number">02</div>

                <div className="card-icon">
                  <img style={{width: "60px", height: "60px" }} src="https://www.svgrepo.com/show/475239/add-to.svg " alt="collection icon" />
                </div>

                <h3 className="h3 about-card-title">Create Your Collection</h3>

                <p className="about-card-text">customise later</p>
              </div>
            </li>

            <li className="about-item">
              <div className="about-card">
                <div className="card-number">03</div>

                <div className="card-icon">
                  <img
                  style={{width: "60px", height: "60px" }}
                    src="https://www.svgrepo.com/show/484633/mito-komon-inro.svg"
                    alt="folder icon"
                  />
                </div>

                <h3 className="h3 about-card-title">Add Your NFT's</h3>

                <p className="about-card-text">customise later</p>
              </div>
            </li>

            <li className="about-item">
              <div className="about-card">
                <div className="card-number">04</div>

                <div className="card-icon">
                  <img
                  style={{width: "60px", height: "60px" }}

                    src="https://www.svgrepo.com/show/28714/deal.svg"
                    alt="diamond icon"
                  />
                </div>

                <h3 className="h3 about-card-title">Sell Your NFT's</h3>

                <p className="about-card-text">customise later</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Create;
