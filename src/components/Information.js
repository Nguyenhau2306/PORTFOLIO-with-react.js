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
              <li>Họ và Tên: Nguyễn Đình Hậu</li>
              <li>Ngày Sinh: 23/06/1999</li>
              <li>Giới Tình: Nam</li>
              <li>Điện Thoại: 0941445790</li>
              <li>Email: nguyenhau230699@gamil.com</li>
              <li>Địa chỉ: 100 Phố Viên, Bắc Từ Liêm, Hà Nội</li>
              <li>website: </li>
              <a
                href="https://www.facebook.com/nguyenhau230699/"
                target={"_blank"}
                rel="noreferrer"
              >
                facebook.com
              </a>
            </ul>
            <div className="link-information">
              <Link to="/skill" className="btn btn-outline-primary px-3">
                Skill>>
              </Link>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="./img/about.jpg"
              alt="Information Us"
              height="300px"
              width="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
