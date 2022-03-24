import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegisterCalander } from "../actions/actionGetRegisterCalander";
import "./main.css";

export default function RegisterCalander() {
  const dispatch = useDispatch();
  useEffect(() => {
    getRegisterCalander(dispatch);
  }, []);
  const dataRegisterCalander = useSelector(
    (state) => state.dataRegisterCalanderReducer.dataRegisterCalander
  );
  return (
    <div className="form_register">
      {/* <div className="left_block">
        <div className="top_child_left">Offline:</div>
        <div className="bottom_child_left">
          <span className="bound_img_p">
            <img src="./img/clock.svg" alt="logo1" className="phone_icon"></img>
            <p>
              09:00 buổi sáng/ 15:00 buổi chiều <br></br>Thứ Ba và Thứ Năm hàng
              tuần
            </p>
          </span>
          <span className="bound_img_p">
            <img
              src="./img/address.svg"
              alt="logo1"
              className="phone_icon"
            ></img>
            <p>
              Phòng Tuyển sinh & truyền thông,<br></br> 103 nhà A2, Trường Đại
              học Phenikaa.
            </p>
          </span>
        </div>
      </div> */}
      {dataRegisterCalander.map((e) => {
        return (
          <div className="left_block">
            <div className="top_child_left">{e.title}</div>
            <div className="bottom_child_left">
              <span className="bound_img_p">
                <img
                  src="./img/clock.svg"
                  alt="logo1"
                  className="phone_icon"
                ></img>
                <p>{e.time}</p>
              </span>
              <span className="bound_img_p">
                <img
                  src="./img/address.svg"
                  alt="logo1"
                  className="phone_icon"
                ></img>
                <p>{e.address}</p>
              </span>
            </div>
          </div>
        );
      })}
      {/* <div className="right_block">
        <div className="top_child_left">Online:</div>
        <div className="bottom_child_left">
          <span className="bound_img_p">
            <img
              // src="./img/clock.png"
              src="./img/clock.svg"
              alt="logo1"
              className="phone_icon"
            ></img>
            <p>09:00 - 10:00 sáng Chủ Nhật hàng tuần.</p>
          </span>
          <span className="bound_img_p">
            <img
              // src="./img/address.png"
              src="./img/address.svg"
              alt="logo1"
              className="phone_icon"
            ></img>
            <p>Online trên nền tảng Zoom</p>
          </span>
        </div>
      </div> */}
    </div>
  );
}
