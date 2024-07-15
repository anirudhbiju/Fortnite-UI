import React from "react";
import "../assets/styles/Home.css";
import banner from "../assets/images/banner.png";
import feature1Img from "../assets/images/feature_1_img.png";
import feature2Img from "../assets/images/feature_2_img.png";
import feature3Img from "../assets/images/feature_3_img.png";
import closeIcon from "../assets/images/close_icon.svg";

export const Home = () => {
  const handleClick = () => {
    window.location.href = "https://www.fortnite.com/";
  };

  return (
    <div className="container">
      <img className="close-icon" alt="close-icon" src={closeIcon} />

      <div className="header">
        Epic Games : An American Video Game And Software Developer And Publisher
        Based in Cary, North Carolina.
      </div>

      <div className="main-content-section">
        <img className="banner" alt="banner" src={banner} />
        <p className="description">
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>
        <button className="visit-button" onClick={handleClick}>
          Visit Website
        </button>
      </div>
      <div className="features-section">
        <div className="feature">
          <img className="feature-image" alt="feature-1" src={feature1Img} />
          <p className="description">
            Explore Large, Destructible Environments Where No Two Games Are Ever
            The Same.
          </p>
        </div>

        <div className="feature">
          <img className="feature-image" alt="feature-2" src={feature2Img} />
          <p className="description">
            Team Up With Friends By Sprinting, Climbing And Smashing Your Way To
            Earn Your Victory Royale
          </p>
        </div>

        <div className="feature">
          <img className="feature-image" alt="feature-3" src={feature3Img} />
          <p className="description">
            Discover Even More Ways To Play Across Thousands of creator-made
            game genres
          </p>
        </div>
      </div>
      <div className="contributions-section">
        <div className="contributions">
          <div className="contributions-title">Our Contribution</div>
          <p className="description">
            Our core offering extends beyond mere profit generation; we
            emphasize the growth and active involvement of our user community.
            Collaborating with us represents an investment, rather than a mere
            expenditure. Our dedication to providing distinctive digital
            interactions guarantees unparalleled benefits for our clientele.
          </p>
        </div>

        <div className="metrics-section">
          <div className="metrics">
            <div>5M</div>
            <p className="metrics-description">Daily User Engagements</p>
          </div>
          <div className="metrics">
            <div>$500K</div>
            <p className="metrics-description">Revenue Surge for an Platform</p>
          </div>
          <div className="metrics">
            <div>10X</div>
            <p className="metrics-description">
              ROAS on all our marketing campaigns
            </p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-title">
          Interested In Delving Deeper Into The Project?
        </div>
        <p className="contact-description">
          If you'd like to explore further details about our initiatives or any
          of our affiliated brands, don't hesitate to connect. You can reach out
          to us via email at <span>hello@abc.com</span> or give us a call at{" "}
          <span>+91 480 20802730</span>.
        </p>
        <div className="contact-buttons">
          <button className="skype-button">Ring us on Skype</button>
          <button className="contact-us-button">Contact Us</button>
        </div>
      </div>

      <div className="footer">
        © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
      </div>
    </div>
  );
};
