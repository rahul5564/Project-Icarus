import React from "react";
import { Aisde } from "./Pages/sidebar/sidebar";
import { Content } from "./Pages/Components/Content";
import { Navbar } from "./Pages/Components/Navbar";
import { Data } from "./Data/db";

export const Main = () => {
  return (
    <div>
      <div>
        {/* <h1>Icarus</h1> */}
        {/* <p>
          Timeless Elegance, Precision Craftsmanship: Welcome to Icars Watch-Co
        </p>
        <p>Elevate Your Passion for Time Where Watch Enthusiasts Unite</p> */}
        <Navbar />
        <div className="info">
          <aside>
            <Aisde />
          </aside>
          <div className="box">
            <p>
              {" "}
              <Content Data={Data} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
