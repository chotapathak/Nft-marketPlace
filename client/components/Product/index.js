import React, {useState} from "react";

function NewProduct({ products }) {
  const [nft, setNft] = useState({});

  const handleClick = () => {
    setNft({
      name: "Blue Bird in the Ocean",
      image:
        "https://png.pngtree.com/png-vector/20190721/ourmid/pngtree-one-eye-badge-vector-illustration-png-image_1570355.jpg",
      author: {
        name: "Vikash Pathak",
        username: "@Pathak",
        image: "https://www.svgrepo.com/show/493093/person-who-gargles.svg",
      },
      price: "0.568ETH",
      currentBid: "Current Bid",
      totalBid: "3+ Place Bid",
      tag: "New",
    });
  }

  return (
    <section className="new-product">
      <div className="container">
        <div className="section-header-wrapper">
          <h2 className="h2 section-title">Newest Items</h2>
          <button className="btn btn-primary">View all</button>
        </div>
        <ul className="product-list">
          {products?.map((product, i) => (
            <li className="product-item" key={i}>
              <div className="product-card" tabIndex="0">
                <figure className="product-banner">
                  <img src={product.image} alt="Blue Bird in the Ocean" />
                  <div className="product-actions">
                    <button className="product-card-menu">
                      <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </button>

                    <button className="add-to-whishlist" data-whishlist-btn>
                      <ion-icon name="heart"></ion-icon>
                    </button>
                  </div>

                  <button className="place-bid-btn" onClick={handleClick}>Place bid</button>
                </figure>

                <div className="product-content">
                  <a href="#" className="h4 product-title">
                    Blue Bird in the Ocean
                  </a>

                  <div className="product-meta">
                    <div className="product-author">
                      <figure className="author-img">
                        <img
                        style={{"width": "40px", "height": "40px"}}
                          src="https://www.svgrepo.com/show/493093/person-who-gargles.svg"
                          alt="Vikash Pathak"
                        />
                      </figure>

                      <div className="author-content">
                        <h4 className="h5 author-title">Vikash Pathak</h4>

                        <a href="#" className="author-username">
                          @Pathak
                        </a>
                      </div>
                    </div>

                    <div className="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p className="label">Current Bid</p>
                    </div>
                  </div>

                  <div className="product-footer">
                    <p className="total-bid">3+ Place Bid.</p>

                    <button className="tag">New</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


export default NewProduct;
