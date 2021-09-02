import React from "react";

const SideBar = () => {
  return (
    <div>
      <ul class="nav flex-column mb-auto">
        <br></br>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">
            Introduction
          </a>
        </li>
        <li>
          <a class="nav-link link-dark">
            Search Companies
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
