import React from "react";
const Footer = props => {
  const startYear = new Date("2019").getFullYear();
  const currentYear = new Date().getFullYear();
  const year =
    currentYear === startYear ? (
      <h3>Copyright &copy; {startYear}. Linas Mackonis</h3>
    ) : (
      <h3>
        Copyright &copy; {startYear} - {currentYear}. Linas Mackonis
      </h3>
    );
  return (
    <footer className="footer">
      <div className="copyright">{year}</div>
    </footer>
  );
};
export default Footer;
