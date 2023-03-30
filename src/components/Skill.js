import React from "react";
import { Link } from "react-router-dom";
export default function Skills() {
  return (
    <div>
      <div className="container py-5 my-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="Text-skill">Học vấn:</h1>
            <ul className="skill">
              <li>09/2017 - 07/2022</li>
              <p>
                Đại học Mỏ-Địa Chất
                <br />
                Khoa công nghệ thông tin
                <br />
                Tốt nghiệp loại khá
              </p>
            </ul>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="./img/humg.jpg"
              alt="Information Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="./img/anh1.jpg"
              alt="Information Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="row1">
            <div className="col-md-12">
              <h1 className="Text-skill-1">Các Kỹ Năng:</h1>
              <ul className="skill-1">
                <li>Làm việc nhóm :</li>
                <p>Có khả năng làm việc và quản lý công việc</p>
                <li>Tự học :</li>
                <p>khả năng tự tìm hiểu và nghiên cứu tài liệu</p>
                <li>Tiếng Anh :</li>
                <p>khả năng đọc hiểu và tìm hiểu tài liệu tiếng anh</p>
                <li>Ngôn Ngữ lập trình :</li>
                <p>
                  - HTML (HyperText Markup Language) là ngôn ngữ đánh dấu siêu
                  văn bản được sử dụng để tạo ra nội dung trên các trang web.
                </p>
                <br />
                <p>
                  - CSS (Cascading Style Sheets) là một ngôn ngữ phong cách được
                  sử dụng để định dạng và trình bày nội dung trên các trang web
                </p>
                <br />
                <p>
                  - JavaScript (JS) là ngôn ngữ lập trình dùng để tạo ra các
                  hiệu ứng tương tác trên trang web.
                </p>
                <li>Library :</li>
                <p>React.js , Boostrap 5</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Link to="/blogs" className="btn btn-outline-primary px-3">
        Blogs>>
      </Link>
    </div>
  );
}
