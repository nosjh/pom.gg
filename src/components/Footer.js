import React from "react";
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <img
        className="footer-logo"
        src={process.env.PUBLIC_URL + "/img/logo_pog.svg"}
        alt="logo"
      />
      <p className="Poppins-Light font-11-10">
        POM.GG isn’t endorsed by Riot Games and doesn’t reflect the views or
        opinions of Riot Games or anyone officially involved in producing or
        managing League of Legends. League of Legends and Riot Games are
        trademarks or registered trademarks of Riot Games, Inc. League of
        Legends © Riot Games, Inc.
      </p>
    </div>
  );
}

export default Footer;
