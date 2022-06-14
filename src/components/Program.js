import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDepartment, getProgram } from "../actions/actionGetDepartment";
import "./Offline.css";

export default function Program() {
  const dispatch = useDispatch();
  useEffect(() => {
    getDepartment(dispatch);
    getProgram(dispatch);
  }, []);
  const dataDepartment = useSelector(
    (state) => state.departmentReducer.dataDepartment
  );
  const dataProgram = useSelector((state) => state.programReducer.dataProgram);

  const length = dataDepartment?.length + dataProgram?.length;
  let newLength;
  if (length % 2 === 1) {
    newLength = Math.round(length / 2);
  } else newLength = length / 2;

  let count = 0;
  let newIndex = null;
  dataDepartment?.forEach((dep, index) => {
    //   console.log(count, index)
    let tmpPro = dataProgram?.filter((pro) => pro.departmentCode === dep.code);
    count = count + 1 + tmpPro?.length;
    // console.log(count, newLength);
    if (count >= newLength && newIndex == null) {
      newIndex = index;
    }
  });
  const dataLeft = dataDepartment?.slice(0, newIndex);
  const dataRight = dataDepartment?.slice(newIndex, dataDepartment?.length);
//fasdfsdafasfasdfsafasdfasfafafsadf
  return (
    <div className="bound_container">
      <div className="container_left">
        {dataLeft?.map((dep) => {
          let tmpProgram = dataProgram?.filter(
            (pro) => pro.departmentCode === dep.code
          );
          return (
            <>
              <p>
                <b>{dep.name}</b>
              </p>
              {tmpProgram?.map((tmpPro) => {
                return (
                  <label className="container">
                    <p>{tmpPro.name}</p>
                    <input
                      type="checkbox"
                      value={tmpPro.code}
                      //   onClick={countSelect}
                      name={dep.code}
                      className="checkbox"
                      //   checked={
                      //     props.arrayProgram.indexOf(tmpPro.code) !== -1
                      //   }
                    ></input>
                    <span className="checkmark"></span>
                  </label>
                );
              })}
            </>
          );
        })}
      </div>
      <div className="container_right">
        {dataRight?.map((dep) => {
          let tmpProgram = dataProgram?.filter(
            (pro) => pro.departmentCode === dep.code
          );
          return (
            <>
              <p>
                <b>{dep.name}</b>
              </p>
              {tmpProgram?.map((tmpPro) => {
                return (
                  <label className="container">
                    <p>{tmpPro.name}</p>
                    <input
                      type="checkbox"
                      value={tmpPro.code}
                      //   onClick={countSelect}
                      name={dep.code}
                      //   checked={
                      //     props.arrayProgram.indexOf(tmpPro.code) !== -1
                      //   }
                      className="checkbox"
                    ></input>
                    <span className="checkmark"></span>
                  </label>
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
}
