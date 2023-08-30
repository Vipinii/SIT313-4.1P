import React from "react";

const backgroundStyle = {
  backgroundImage: `url(${require('./images/bg.webp')})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "400px",
  width: "100%",
  position: "relative",
};

const footerContentStyle = {
  position: "absolute",
  bottom: "10%",
  left: "10%", 
  color: "black",
};

const logoContainerStyle = {
  
  top: "-200%", 
  left: "200%", 
  marginBottom: "30px", 
  marginRight: "40%", 
};

const newstyle = {

  
  top: "0%", 
  left: "100%", 
  marginTop: "10px", 
  marginRight: "10%",
  
};

function Footer() {
  return (
    <div style={backgroundStyle}>
      <div style={footerContentStyle}>
        <div className="AD_B">
          <div style={newstyle}><h1>DEV@DEAKIN 2022</h1></div>
          
          <h2>
            Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;Terms&nbsp;&nbsp;&nbsp;&nbsp;Code of Conduct
          </h2>
        </div>
        
        <div style={logoContainerStyle}>
          
          <img src={require('./images/Facebook.png')} alt="Logo1" width="50" height="50" />
          <img src={require('./images/instagram.png')} alt="Logo2" width="50" height="60" />
          <img src={require('./images/Twitter.png')} alt="Logo3" width="50" height="30" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
