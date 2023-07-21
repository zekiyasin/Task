import React from "react";
import "./heroSection.css";
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
        <img className="hero-image" src="https://atlassian.design/static/43b3a69216eac32c2ba8799f74e5e128/homepage@2x.png" alt="hero" height={375}/>
      </div>
    </section>
  );
};

export default HeroSection;
