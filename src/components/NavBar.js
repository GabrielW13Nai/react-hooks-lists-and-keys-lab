import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navs = links.map((link, index) =>
  {return link}
 
  );


return (
<nav>
  <a href="#home" key={navs[0]}>{navs[0]}</a>
  <a href="#about" key={navs[1]}>{navs[1]}</a>
  <a href="#projects" key={navs[2]}>{navs[2]}</a>
</nav>)

  
}

export default NavBar;

