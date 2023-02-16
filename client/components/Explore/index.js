
const svgData = [
  {
    image: "https://png.pngtree.com/png-vector/20190721/ourmid/pngtree-one-eye-badge-vector-illustration-png-image_1570355.jpg",
  }
  ,{
    image: "https://www.svgrepo.com/show/493093/person-who-gargles.svg"
  }
]

function ExploreProduct({products}) {
    return (
      <section className="explore-product">
          <div className="container">
  
            <div className="section-header-wrapper">
  
              <h2 className="h2 section-title">Explore Product</h2>
  
              <button className="btn btn-primary">Explore</button>
  
            </div>
  
            <ul className="product-list">
              {products?.map((product, i) => (
              <li className="product-item" key={i}>
                <div className="product-card" tabIndex="0">
                  <figure className="product-banner">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWAwRJ6fVYEWF1al73uu87hmakoKyiA0XXZQ71ntZRC3DfkzP-K62M002iD8-xMywkW8&usqp=CAU" alt="Blue Bird in the Ocean"/>
                    <div className="product-actions">
                      <button className="product-card-menu">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>
                      <button className="add-to-whishlist" data-whishlist-btn>
                        <ion-icon name="heart"></ion-icon>
                      </button>
                    </div>
                    <button className="place-bid-btn">Place bid</button>
                  </figure>
                  <div className="product-content">
                    <a href="#" className="h4 product-title">{product.name}</a>
                    <div className="product-meta">
                      <div className="product-author">
                        <figure className="author-img">
                          <img
                          style={{"width": "40px", "height": "40px"}}
                           src={'https://www.svgrepo.com/show/493093/person-who-gargles.svg'} alt="Vikash Pathak" />
                        </figure>
                        <div className="author-content">
                          <h4 className="h5 author-title">Vikash Pathak</h4>
                          <a href="#" className="author-username">@Pathak</a>
                        </div>
                      </div>
                      <div className="product-price">
                        <data value="0.568">{product.price}</data>
                        <p className="label">{product.currentBid}</p>
                      </div>
                    </div>
                    <div className="product-footer">
                      <p className="total-bid">{product.totalBid}</p>
                      <button className="tag">{product.tag}</button>
                    </div>
                  </div>
                </div>
              </li>
              ))}
            </ul>
          </div>
        </section>
    )
  }

  export default ExploreProduct;