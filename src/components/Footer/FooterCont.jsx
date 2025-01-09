import React from "react";
import FooterStyle from "../../scss/footer.module.scss";

function FooterCont() {
  return (
    <div className={FooterStyle.container}>
      <div className={FooterStyle.copyright}>
        <h6>Designed by Dzelal | 2025</h6>
        <h6>&reg; All Rights Reserved</h6>
      </div>
      <div className={FooterStyle.brand}>Luxury Real Estate</div>
      <div className={FooterStyle.address}>
        <h6>Get Contact</h6>
        <p>1234 Budapest, Andrássy Avenue 99, Hungary</p>
        <p>+36 1 234 5678</p>
        <p>info@luxuryrealestate.com</p>
      </div>
    </div>
  );
}

export default FooterCont;
