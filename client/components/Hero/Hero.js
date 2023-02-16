import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {

  const exploreNft = () => {
    return (
      <div>
        <h1>Explore</h1>
        <Link href='/explore'>
          <a>Explore</a>
        </Link>
      </div>
    );
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">Discover digital art sell your specific <span>NFT</span></h1>
          <p className="hero-text">
            Upload Some of your Art Items
          </p>
          <div className="btn-group">
            <Link to="/explore">
              <button className="btn btn-primary">Explore more</button>
            </Link>
            <Link to="/create">
              <button className="btn btn-secondary">Create NFT</button>
            </Link>
          </div>
        </div>

        <figure className="hero-banner">
          <img src="https://png.pngtree.com/png-clipart/20220207/ourlarge/pngtree-bitcoin-skull-png-image_4380783.png" alt="nft art"/>
        </figure>

      </div>
    </section>
  );
}

export default Hero;
