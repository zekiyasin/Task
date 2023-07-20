import React from "react";
import "./products.css";
import ArrowRightIcon from "@atlaskit/icon/glyph/arrow-right";
import { Box } from "@atlaskit/primitives";

const Products = () => {
  const data = [
    {
      name: "Block Explorer",
      description:
        "Search for real-time and historical information about the blockchain.",
      link: "/",
    },
    {
      name: "Data Index",
      description:
        "Search for real-time and historical information about the blockchain.",
      link: "/",
    },
    {
      name: "Bridge",
      description:
        "Search for real-time and historical information about the blockchain.",
      link: "/",
    },
    {
      name: "Portal Sentiment ",
      description:
        "Search for real-time and historical information about the blockchain.",
      link: "/hizmetler/sentiment",
    },
    {
      name: "Portal Network",
      description:
        "Search for real-time and historical information about the blockchain.",
      link: "/",
    },
    {
      name: "Bots Explorer",
      description:
        "Search for real-time and historical information about the blockchain.",
      link: "/hizmetler/bots",
    },
    {
      name: "Translate EV",
      description:
        "Search for real-time and historical information about the blockchain.",
      link: "/",
    },
    {
      name: "Block Explorer",
      description:
        "Search for real-time and historical information about the blockchain.",
      link: "/",
    },
  ];

  return (
    <section className="products">
      <div className="container">
        <div className="description">
          <h1>Portal Live Products</h1>
          <p>
            Basit, sezgisel ve güzel deneyimler oluşturmak için Portal'ın
            evrensel yazılım dilini kullanın.
          </p>
        </div>
        <div className="content">
          <div>
            {data.map((item, index) => (
              <li className="card" key={index}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a href={item.link}>
                  Hizmetleri Keşfedin{" "}
                  <Box>
                    <ArrowRightIcon size="medium" label="" />
                  </Box>{" "}
                </a>
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
