import React from "react";
import { Link } from "react-router-dom";
export default function Information() {
  return (
    <div>
      <div className="container py-5 my-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-information">Thông tin cá nhân:</h1>
            <ul className="information">
              <li>Họ và tên: Nguyễn Đình Hậu</li>
              <li>Ngày Sinh: 23/06/1999</li>
            </ul>
            <Link to="/skill" className="btn btn-outline-primary px-3">
              Skill>>
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="./img/about.jpg"
              alt="Information Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
