import React from "react";

const Footer = () => {
  const years = new Date().getFullYear();
  return (
    <footer
      style={{
        backgroundColor: "#1c1c1c",
        padding: "1.5rem",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#b3b3b3", margin: 0 }}>
        &copy; {years} Milind Kulgod. Powered by React. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
