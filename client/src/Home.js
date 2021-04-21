import React from 'react';
import Product from './Product';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

        <div className="home_row">
          <Product id="13534" title="The Lean Startup" price={30.12} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={4} />
          <Product id="" title="The Lean Startup" price={30.12} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
        </div>


        <div className="home_row">
          <Product id="56354" title="The Lean Startup" price={30.12} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
          <Product id="45234" title="The Lean Startup" price={30.12} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={3} />
          <Product id="58284" title="The Lean Startup" price={30.12} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={4} />
        </div>

        <div className="home_row">
          <Product id="98233" title="The Lean Startup" price={30.12} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
        </div>


      </div>
    </div>
  )
}

export default Home;