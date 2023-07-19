import React from "react";
import "./sentiment.css";
import SideBar from "../../components/sideBar/SideBar";

const Sentiment = () => {
  return (
    <div>
      <SideBar />
      <div className="sentiment-container">
        <div className="sentiment-text">
          <h2>Sentiment</h2>
          <p>
            Her algoritma farklı değer sonuçları vermektedir. İlgili algoritmaya
            istenilen bilgileri girerek sogulama yapabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
