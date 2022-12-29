import React from "react";

// Assets
import cait_sith from "../../../assets/images/cait.png";

const Home = () => {
  return (
    <>
      <div className="clearfix">
        <img
          src={cait_sith}
          className="col-md-3 float-md-end md-3 ms-md-3"
          alt="..."
        />
        <h1>Welcome to WingsXI!</h1>
        <div>
          <p>
            Wings is a level 75 capped Wings of the Goddess server focused on
            providing a fun, feature rich gaming experience with common sense
            quality of life improvements.
          </p>
          <p>Our server includes all of the following:</p>
          <ul>
            <li>
              Wings of the Goddess era skill up rates and experience rates.
            </li>
            <li>All jobs thru Wings of the Goddess expansion.</li>
            <li> Unrestricted Level Sync. </li>
            <li>Fully fleshed out Fishing.</li>
            <li> Once-per Vana'diel day Fields of Valor. </li>
            <li>
              Mog Wardrobe and Mog Sack access unlocks via storyline content.
            </li>
            <li>A completely player-run economy. </li>
            <li>
              Absolutely no multiboxing, enforced by the server software. (If
              you have multiple players in your household, please reach out via
              Discord to have an exception made for your home.)
            </li>
            <li>
              A completely open-sourced code base that is actively developed by
              multiple other servers.
            </li>
          </ul>
          For more information, please join our Discord.
        </div>
      </div>
    </>
  );
};

export default Home;
