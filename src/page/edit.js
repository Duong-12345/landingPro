import React, { useState } from "react";
import "./edit.css";
import HeaderText from "./headerText";
import Type from "./type";
import Image from "./image";
import Helmet from "react-helmet";

export default function Edit() {
  const [title, setTitle] = useState({
    links: [
      {
        id: 1,
        name: "Header",
        nameLink: "header",
      },
      { id: 2, name: "Type", nameLink: "type" },
      { id: 3, name: "Image", nameLink: "image" },
    ],
    activeLink: 1,
  });
  const handleClick = (id) => {
    setTitle({
      ...title,
      activeLink: id,
    });
  };

  return (
    <div>
      <Helmet>
        <title>EDIT CAMPUS VISIT</title>
      </Helmet>
      <div class="topnav">
        {title.links?.map((link) => {
          return (
            <div>
              <a
                className={link.id === title.activeLink ? "active" : null}
                onClick={() => handleClick(link.id)}
              >
                {link.name}
              </a>
            </div>
          );
        })}
      </div>
      {(title.activeLink === 1 && <HeaderText />) ||
        (title.activeLink === 2 && <Type />) ||
        (title.activeLink === 3 && <Image />) ||
        (title.activeLink === null && <h2>Welcome to admin</h2>)}
    </div>
  );
}
