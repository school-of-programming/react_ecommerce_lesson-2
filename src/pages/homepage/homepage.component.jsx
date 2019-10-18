import React from "react";
import "./homepage.style.scss";
// import MenuItem from "../../components/menu-item/menu-item.component";
import Directory from "../../components/directory/directory.component";
const HomePage = () => {
  return (
    <div className="hompage">
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
};

export default HomePage;
