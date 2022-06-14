import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType, updateType } from "../actions/actionGetType";
import "./main.css";

export default function Type() {
  const dispatch = useDispatch();
  useEffect(() => {
    getType(dispatch);
  }, []);
  const dataType = useSelector((state) => state.dataTypeReducer.dataType);
  const dataUpdate = useSelector((state) => state.dataTypeReducer.dataUpdate);
//   console.log(dataUpdate);
  const [initSelect1, setInitSelect1] = useState(() => {
    return {
      value: "numberType 1",
    };
  });
  const change1 = (e) => {
    setInitSelect1({
      value: e.target.value,
    });
    dispatch(updateType(e.target.value));
  };
  return (
    <>
      <div className="type-experience">
        <p className="title_text_child">HÌNH THỨC TRẢI NGHIỆM</p>
        {/* <select onChange={change} value={initSelect.value}>
                <option value="tour_ofline">
                  In person Campus Tour-1h(Campus Tour Offline + Tour guide)
                </option>
                <option value="tour_online">
                  Virtual Campus Tour-30p(Tour Online + Tour guide)
                </option>
              </select> */}
        <select onChange={change1}>
          {dataType.map((e) => (
            <option value={e.id}>{e.nameType}</option>
          ))}
        </select>
      </div>
      <p id="note_message1" style={{ textAlign: "left" }}>
        Bạn có thể chọn hình thức trải nghiệm online bằng cách chọn ở ô phía
        trên
      </p>
     
      <p id="tittle_off">
          <b>{dataUpdate.nameType}</b>
          <br></br>
          {dataUpdate.numberType}
        </p>
    </>
  );
}
