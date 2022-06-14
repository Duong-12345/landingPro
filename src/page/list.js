import React from "react";
import { Button, Card, Row, Col, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./list.css";
const Array = [
  {
    img: "https://phenikaa-uni.edu.vn:3600/md/vi/anhgv/screenshot-2022-02-23-at-214315.png",
    name: "GS.TS.BS. NGUT.Vương Tiến Hòa",
    currentPosition: "Trưởng Bộ môn Phụ Sản",
    highestPosition: "Nguyên giảng viên Bộ môn Phụ Sản, ĐH Y HN",
  },
  {
    img: "https://phenikaa-uni.edu.vn:3600/md/vi/anhgv/screenshot-2022-02-23-at-214315.png",
    name: "GS.TS.BS. NGUT.Vương Tiến Hòa",
    currentPosition: "Trưởng Bộ môn Phụ Sản",
    highestPosition: "Nguyên giảng viên Bộ môn Phụ Sản, ĐH Y HN",
  },
  {
    img: "https://phenikaa-uni.edu.vn:3600/md/vi/anhgv/screenshot-2022-02-23-at-214315.png",
    name: "GS.TS.BS. NGUT.Vương Tiến Hòa",
    currentPosition: "Trưởng Bộ môn Phụ Sản",
    highestPosition: "Nguyên giảng viên Bộ môn Phụ Sản, ĐH Y HN",
  },
  {
    img: "https://phenikaa-uni.edu.vn:3600/md/vi/anhgv/screenshot-2022-02-23-at-214315.png",
    name: "GS.TS.BS. NGUT.Vương Tiến Hòa",
    currentPosition: "Trưởng Bộ môn Phụ Sản",
    highestPosition: "Nguyên giảng viên Bộ môn Phụ Sản, ĐH Y HN",
  },
  {
    img: "https://phenikaa-uni.edu.vn:3600/md/vi/anhgv/screenshot-2022-02-23-at-214315.png",
    name: "GS.TS.BS. NGUT.Vương Tiến Hòa",
    currentPosition: "Trưởng Bộ môn Phụ Sản",
    highestPosition: "Nguyên giảng viên Bộ môn Phụ Sản, ĐH Y HN",
  },
  {
    img: "https://phenikaa-uni.edu.vn:3600/md/vi/anhgv/screenshot-2022-02-23-at-214315.png",
    name: "GS.TS.BS. NGUT.Vương Tiến Hòa",
    currentPosition: "Trưởng Bộ môn Phụ Sản",
    highestPosition: "Nguyên giảng viên Bộ môn Phụ Sản, ĐH Y HN",
  },
  {
    img: "https://phenikaa-uni.edu.vn:3600/md/vi/anhgv/screenshot-2022-02-23-at-214315.png",
    name: "GS.TS.BS. NGUT.Vương Tiến Hòa",
    currentPosition: "Trưởng Bộ môn Phụ Sản",
    highestPosition: "Nguyên giảng viên Bộ môn Phụ Sản, ĐH Y HN",
  },
  {
    img: "https://phenikaa-uni.edu.vn:3600/md/vi/anhgv/screenshot-2022-02-23-at-214315.png",
    name: "GS.TS.BS. NGUT.Vương Tiến Hòa",
    currentPosition: "Trưởng Bộ môn Phụ Sản",
    highestPosition: "Nguyên giảng viên Bộ môn Phụ Sản, ĐH Y HN",
  },
  {
    img: "https://phenikaa-uni.edu.vn:3600/md/vi/anhgv/screenshot-2022-02-23-at-214315.png",
    name: "GS.TS.BS. NGUT.Vương Tiến Hòa",
    currentPosition: "Trưởng Bộ môn Phụ Sản",
    highestPosition: "Nguyên giảng viên Bộ môn Phụ Sản, ĐH Y HN",
  },
  {
    img: "https://phenikaa-uni.edu.vn:3600/md/vi/anhgv/screenshot-2022-02-23-at-214315.png",
    name: "GS.TS.BS. NGUT.Vương Tiến Hòa",
    currentPosition: "Trưởng Bộ môn Phụ Sản",
    highestPosition: "Nguyên giảng viên Bộ môn Phụ Sản, ĐH Y HN",
  },
  {
    img: "https://phenikaa-uni.edu.vn:3600/md/vi/anhgv/screenshot-2022-02-23-at-214315.png",
    name: "GS.TS.BS. NGUT.Vương Tiến Hòa",
    currentPosition: "Trưởng Bộ môn Phụ Sản",
    highestPosition: "Nguyên giảng viên Bộ môn Phụ Sản, ĐH Y HN",
  },
  {
    img: "https://phenikaa-uni.edu.vn:3600/md/vi/anhgv/screenshot-2022-02-23-at-214315.png",
    name: "GS.TS.BS. NGUT.Vương Tiến Hòa",
    currentPosition: "Trưởng Bộ môn Phụ Sản",
    highestPosition: "Nguyên giảng viên Bộ môn Phụ Sản, ĐH Y HN",
  },
];
export const List = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="bound">
      <Row xs={1} md={3} lg={5} className="g-4">
        {Array.map((e) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={e.img} />
              <Card.Body>
                <Card.Text>
                  <p id="name">{e.name}</p>
                  <p id="current">{e.currentPosition}</p>
                  <p id="highest">{e.highestPosition}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="pagination">
        <Pagination>{items}</Pagination>
      </div>
    </div>
  );
};
