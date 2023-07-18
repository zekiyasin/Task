import React from "react";
import "./heroSection.css";
import hero from "../../images/hero.png";
import Button from '@atlaskit/button';
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <h1>Portala Hoşgeldiniz</h1>
          <p>
            Basit, sezgisel ve güzel deneyimler oluşturmak için Portal'ın evrensel yazılım dilini kullanın.

          </p>
          <Button appearance="primary">Hadi Başlayalım</Button>
        </div>
        <img src={hero} alt="hero" height={375}/>
      </div>
    </section>
  );
};

export default HeroSection;
