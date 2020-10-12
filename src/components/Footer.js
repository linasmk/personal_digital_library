import React from "react";
const Footer = props => {
  const currentYear = new Date().getFullYear();
  
      
  
  return (
    <footer className="footer">
      <div className="footer__overlay">
        <h3 className="footer__copyright">
          &copy; {currentYear}. Linas Mackonis
        </h3>
      </div>
    </footer>
  );
};
export default Footer;
