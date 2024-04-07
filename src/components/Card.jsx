import React from "react";
import headerImage from "../assets/images/illustration-hero.svg";
import musicIcon from "../assets/images/icon-music.svg";

function Card() {
  return (
    <div>
      <div className="item-image">
        <img src={headerImage} alt="hero image" />
      </div>
      <div className="first-item">
        <h2>Order Summary</h2>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      <div className="second-item">
        <div className="second-item-child">
          <img src={musicIcon} alt="music icon" className="music-icon" />
        </div>
        <div className="second-item-child">
          <h4>Annual Plan <span>$59.99/year</span></h4>
         
        </div>
        <div className="second-item-child">
          <a>Change</a>
        </div>
      </div>
      <div className="third-item">
        <button>Proceed to Payment</button>
        <p>Cancel order</p>
      </div>
    </div>
  );
}
export default Card;
