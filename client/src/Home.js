import React from 'react';
import Product from './Product';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://via.placeholder.com/1500x600?text=Header+Image" alt="" />

        <div className="home_row">
          <Product id="13534" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={4} />
          <Product id="" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={5} />
        </div>


        <div className="home_row">
          <Product id="56354" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={5} />
          <Product id="45234" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={3} />
          <Product id="58284" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={4} />
        </div>

        <div className="home_row">
          <Product id="98233" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={5} />
        </div>


      </div>
    </div>
  )
}

export default Home;