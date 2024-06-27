import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency Marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form>
          <input type="text" placeholder="Search cryptos" />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
            <p>#</p>
            <p>Coins</p>
            <p>Prices</p>
            <p className="h-change">24H Change</p>
            <p className="market-cap">Market Cap</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
