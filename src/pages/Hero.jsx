import React from "react";
import ProductAll from "./ProductAll";
import Header from "../components/Navbar";
const Hero = () => {
  return (
  <>
  <Header/>
    <div className="pic">
      <div className="hoover">
        <div className="pp">
          <h2 className=" mb-4">Welcome To Store </h2>
          <p className=" fw-medium fs-5">
         
            Welcome to our online store! We offer you a unique shopping
            experience that combines quality, affordable prices, and great
            variety. Browse our carefully selected collection of products, enjoy
            exclusive offers, and provide customer service that cares about your
            comfort every step of the way. Shop with confidence—everything you
            need is at your fingertips!
          </p>
        </div>
      </div>
      <ProductAll />
    </div>
    </>
  );
};

export default Hero;
