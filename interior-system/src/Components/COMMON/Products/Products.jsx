import React from "react";
import chair from '../../../Assets/chairs.jpg'
// import door from '../../../Assets/door.jpg'
// import pairChair from '../../../Assets/vintage chairs.jpg'
// import tile from '../../../Assets/tile.jpg'
import './Products.css'

function Products() {
  return (
    <>
    <div className="container mt-5 mb-5">
      <div className="card-container">
        <div className="card-images">
          <img src={chair} alt="" className="card-image"  />
          <div className="card-data">
            <span className="card-description">CHAIR</span>
            <h2 className="card-title"></h2>
            <h5 className="card-price">Price:<span className="text-warning">$2000</span></h5>
            <div className="card-button">BUY</div>
          </div>
        </div>
        {/* <div className="card-images">
          <img src={door} alt="" className="card-image" />
          <div className="card-data">
            <span className="card-description">DOOR</span>
            <h2 className="card-title"></h2>
            <div className="card-button">BUY</div>
          </div>
        </div>
        <div className="card-images">
          <img src={pairChair} alt="" className="card-image" />
          <div className="card-data">
            <span className="card-description">TILE</span>
            <h2 className="card-title"></h2>
            <div className="card-button">BUY</div>
          </div>
        </div>
        <div className="card-images">
          <img src={tile} alt="" className="card-image" />
          <div className="card-data">
            <span className="card-description">TILE</span>
            <h2 className="card-title"></h2>
            <div className="card-button">BUY</div>
          </div>
        </div> */}
      </div>
    </div>
      
    </>
  )
}

export default Products
