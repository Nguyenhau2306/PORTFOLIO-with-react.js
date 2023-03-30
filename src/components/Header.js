import React from "react";

export default function Header() {
  return (
    <div className="navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4 " href="/">
            PESONAL INFORMATION
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/information">
                  Information
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/skill">
                  Skill
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blogs">
                  Blogs
                </a>
              </li>
            </ul>
            <div className="icon">
              <a
                href="https://www.instagram.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
            <div className="icon">
              <a
                href="https://web.telegram.org/z/#5954787913"
                target={"_blank"}
                rel="noreferrer"
              >
                <i class="fa fa-telegram" aria-hidden="true"></i>
              </a>
            </div>
            <div className="icon">
              <a
                href="https://github.com/Nguyenhau2306/PORTFOLIO-with-react.js"
                target={"_blank"}
                rel="noreferrer"
              >
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
