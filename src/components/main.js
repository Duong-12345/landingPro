import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDataForm } from "../actions/actionSend";
import { getProvince, getDistrict } from "../actions/actionGetProvince";
import "./main.css";
import Offline from "./Offline";
import registerCalander from "./registerCalander";
import { getSchool } from "../actions/actionGetSchool";
import { getDepartment, getProgram } from "../actions/actionGetDepartment";
import { Helmet } from "react-helmet";
import moment from "moment";
import RegisterCalander from "./registerCalander";

const Main = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    province: "",
    provinceCode: "",
    school: "",
    day: null,
    amount: "",
    department: {
      val: "",
      checked: null,
    },
    program: {
      val: "",
      checked: null,
    },
    arrayProgram: [],
    arrayDepartment: [],
    time: "",
    district: "",
  });
  const handleName = (e) => {
    e.persist();
    setValue((value) => ({
      ...value,
      name: e.target.value,
    }));
  };
  const handlePhone = (e) => {
    e.persist();
    setValue((value) => ({
      ...value,
      phone: e.target.value,
    }));
  };
  const handleEmail = (e) => {
    e.persist();
    setValue((value) => ({
      ...value,
      email: e.target.value,
    }));
  };
  const handleProvince = (e) => {
    e.persist();
    setValue((value) => ({
      ...value,
      province: e.target.value,
      district:'',
      school:''
    }));
  };
  const handleDistrict = (e) => {
    e.persist();
    setValue((value) => ({
      ...value,
      district: e.target.value,
      school:''
    }));
  };
  const handleSchool = (e) => {
    e.persist();
    setValue((value) => ({
      ...value,
      school: e.target.value,
    }));
  };
  const handleDay = (e, time) => {
    setValue({
      ...value,
      day: e,
      time,
    });
  };
  const handleAmount = (e) => {
    e.persist();
    setValue((value) => ({
      ...value,
      amount: e.target.value,
      arrayProgram: [],
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  // const dataProvince = useSelector(
  //   (state) => state.provinceReducer.dataProvince
  // );
  const dataProvince = useSelector(
    (state) => state.provinceReducer.dataProvince.data
  );
  // const dataDistrict = useSelector(
  //   (state) => state.districtReducer.dataDistrict
  // );
  const dataDistrict = useSelector(
    (state) => state.districtReducer.dataDistrict.data
  );
  // const dataSchool = useSelector(
  //   (state) => state.schoolReducer.dataSchool
  // );
  const dataSchool = useSelector(
    (state) => state.schoolReducer.dataSchool.data
  );
  useEffect(() => {
    getProvince(dispatch);
    getSchool(dispatch);
    getDistrict(dispatch);
    getDepartment(dispatch);
    getProgram(dispatch);
  }, []);
  const arrayDepartmentFix = [...new Set(value.arrayDepartment)];
  const date = moment(value.day).format("YYYY-MM-DDThh:mm:ssZ");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scroll(0, 0);
    const data = {
      name: value.name,
      email: value.email,
      phone: value.phone,
      provinceCode: processText(inputText),
      schoolCode: processText3(inputText3),
      date: date,
      numberOfParticipant: Number(value.amount),
      time: value.time,
      type: initSelect.value,
      districtCode: processText1(inputText1),
      programCodes: value.arrayProgram,
      departmentCodes: arrayDepartmentFix,
    };
    postDataForm(data, dispatch);
  };
  const [initSelect, setInitSelect] = useState(() => {
    return {
      value: "tour_offline",
      // value: "",
    };
  });
  const [on, setOn] = useState({
    status: false,
  });
  const change = (e) => {
    if(e.target.value==='tour_online'){
      setValue({
        ...value,
        amount:'',
        arrayProgram:[]
      })
    }
    
    setInitSelect({
      value: e.target.value,
    });
    setOn((on) => ({
      status: !on.status,
    }));
    return on;
  };
  const handleProgram = (e) => {
    console.log(e.target.checked);

    e.persist();
    if (!e.target.checked) {
      console.log("0");
      let tmp = value.arrayProgram;
      let index = tmp.indexOf(e.target.value);
      if (index !== -1) {
        tmp.splice(index, 1);
      }
      setValue({
        ...value,
        program: {
          val: e.target.val,
          checked: e.target.checked,
        },
        arrayProgram: tmp,
      });
    } else {
      setValue({
        ...value,
        program: {
          val: e.target.value,
          checked: e.target.checked,
        },
        arrayProgram: [...value.arrayProgram, e.target.value],
      });
    }
  };
  const handleDepartment = (e) => {
    e.persist();
    if (!e.target.checked) {
      let tmp = value.arrayDepartment;
      let index = tmp.indexOf(e.target.name);
      if (index !== -1) {
        tmp.splice(index, 1);
      }
      setValue({
        ...value,
        department: {
          val: e.target.val,
          checked: e.target.checked,
        },
        arrayDepartment: tmp,
      });
    } else {
      setValue({
        ...value,
        department: {
          val: e.target.name,
          checked: e.target.checked,
        },
        arrayDepartment: [...value.arrayDepartment, e.target.name],
      });
    }
  };
  const messageSuccess = (a) => {
    if (
      submitted &&
      (!value.name ||
        !value.email ||
        !value.phone ||
        !value.province ||
        !value.school ||
        !value.arrayProgram.length ||
        !value.day
        )
      // !initSelect.value
    ) {
      return (
        <div className="false-message">
          B???n thi???u m???t tr?????ng th??ng tin ch??a ??i???n
        </div>
      );
    } else if (!submitted) {
      return null;
    } else {
      return (
        <>
          {modal === false ? (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <h2>????ng k?? th??nh c??ng!</h2>
                <p>
                  H???n g???p l???i c??c b???n t???i Tr?????ng ?????i h???c Phenikaa v??o th???i gian
                  ???? ????ng k??!
                </p>
                <button className="close-modal" onClick={toggleModal}>
                  &times;
                </button>
              </div>
            </div>
          ) : null}
          <div className="success-message">B???n ???? ????ng k?? th??nh c??ng</div>
        </>
      );
    }
    // <div className="success-message">B???n ???? g???i th??nh c??ng</div>
  };
  var inputText = value.province;
  const processText = (inputText) => {
    var output = [];
    var json = inputText.split(" ");
    json.forEach(function (item) {
      output.push(item.replace(/\'/g, "").split(/(\d+)/).filter(Boolean));
    });
    if (output !== []) {
      var newProvince = Number(output[3]);
    }
    return newProvince;
  };
  var inputText1 = value.district;
  const processText1 = (inputText1) => {
    var output = [];
    var json = inputText1.split(" ");
    json.forEach(function (item) {
      output.push(item.replace(/\'/g, "").split(/(\d+)/).filter(Boolean));
    });
    if (output !== []) {
      var newDistrict = Number(output.pop());
    }
    return newDistrict;
  };
  var inputText3 = value.school;
  const processText3 = (inputText3) => {
    var output = [];
    var json = inputText3.split(" ");
    json.forEach(function (item) {
      output.push(item.replace(/\'/g, "").split(/(\d+)/).filter(Boolean));
    });
    if (output !== []) {
      var newDistrict = Number(output.pop());
    }
    return newDistrict;
  };

  const filterDistrict = dataDistrict?.filter(
    (dis) => dis.provinceCode == processText(inputText)
  );
  const filterSchool = dataSchool?.filter(
    (sch) =>
      sch.districtCode == processText1(inputText1) &&
      sch.provinceCode == processText(inputText)
  );

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const showTitle = () => {
    if (on.status === false) {
      return (
        <>
          <p id="tittle_off">
            <b>In person Campus Tour-1h</b>
            <br></br>
            (Campus Tour Offline + Tour guide)
          </p>
        </>
      );
    } else
      return (
        <p id="tittle_off">
          <b>Virtual Campus Tour-30p</b>
          <br></br>
          (Tour Offline + Tour guide)
        </p>
      );
  };
  return (
    <div className="background">
      <span className="img_bottom">
        <img
          // src="./img/smt.png"
          id="imgBottom1"
          src="./img/imgBottom1.png"
          alt="logo1"
          width="100%"
          height="auto"
          style={{ position: "absolute", left: 0, bottom: 0, zIndex: -1 }}
        ></img>
        <img
          id="smt"
          src="./img/smt.png"
          // src="./img/imgBottom1.png"
          alt="logo1"
          width="100%"
          height="auto"
          style={{ position: "absolute", left: 0, bottom: 0, zIndex: -1 }}
        ></img>
      </span>
      <span className="img_bottom">
        <img
          src="./img/imgTop.png"
          alt="logo1"
          width="100%"
          height="auto"
          style={{ position: "absolute", left: 0, top: 0, zIndex: -1 }}
        ></img>
      </span>
      <div className="main">
        <Helmet>
          <title>PHENIKAA CAMPUS VISIT</title>
        </Helmet>
        <div className="body">
          <div className="img_head">
            <span className="img_head_left">
              {/* <img
                src="./img/logo1.png"
                alt="logo1"
                width="100%"
                height="auto"
              ></img> */}
            </span>
            <span className="img_head_right">
              <img
                src="./img/logo2.png"
                alt="logo2"
                width="100%"
                height="auto"
              ></img>
            </span>
          </div>
          {messageSuccess()}
          <div className="title">
            <p className="title_text">????NG K?? TR???I NGHI???M</p>
            <p className="title_text">PHENIKAA CAMPUS VISIT 2022</p>
          </div>
          <p>
            Tr?????ng ?????i h???c Phenikaa g???i l???i ch??o tr??n tr???ng t???i Qu?? v??? ph??? huynh
            v?? c??c em h???c sinh!
          </p>
          <p>
            V???i m???c ti??u gi???i thi???u, cung c???p th??ng tin t???i Qu?? v??? ph??? huynh v??
            c??c em h???c sinh v??? Tr?????ng ?????i h???c Phenikaa, <br></br>c??c ng??nh ngh???
            ??ang ???????c ????o t???o t???i Tr?????ng, gi??p c??c em c?? quy???t ?????nh l???a ch???n
            ng??nh ngh??? ????ng ?????n,<br></br> Tr?????ng ?????i h???c Phenikaa t??? ch???c ch????ng
            tr??nh tr???i nghi???m "Phenikaa Campus Visit 2022".
          </p>
          <p>
            Ch????ng tr??nh ???????c h??? tr???
            <b style={{ color: "#f05e22" }}>HO??N TO??N MI???N PH??.</b>
          </p>
          <p>L???ch ????ng k?? th???i gian tham quan (d??? ki???n):</p>
              <RegisterCalander/>
          <p>
            H??y li??n h??? v???i ch??ng t??i khi c???n h??? tr??? th??m th??ng tin<br></br>
            <b>Ph??ng Tuy???n sinh v?? Truy???n th??ng</b>
          </p>
          <span className="bound_img_p">
            <img src="./img/phone.svg" alt="logo1" className="phone_icon"></img>
            <p>0946.906.552 (Ms H???ng)</p>
          </span>
          <span className="bound_img_p">
            <img src="./img/email.svg" alt="logo1" className="phone_icon"></img>
            <p>truyenthong@phenikaa-uni.edu.vn</p>
          </span>

          <p className="title_text_child">TH??NG TIN ????NG K??</p>
          <form onSubmit={handleSubmit} autoComplete='off'>
            <div className="form_res_inf">
              {/* <div className="form_res_name">
                <div className="form_res_name_input">
                  <label>H??? v?? t??n:</label>
                  <input
                    type="text"
                    placeholder="Nguy???n V??n A"
                    name="name"
                    value={value.name}
                    onChange={handleName}
                    required
                  ></input>
                  {submitted && !value.name && (
                    <p id="note_message">Please enter a name</p>
                  )}
                </div>
                <p>(N???u nh??m 2 ng?????i tr??? l??n ch??? ????? t??n m???t ?????i di???n)</p>
              </div> */}
              <div className="res_inf">
                <span>
                  <label>H??? v?? t??n:</label>
                  <input
                    type="text"
                    placeholder="N???u nh??m 2 ng?????i tr??? l??n ch??? ????? t??n m???t ng?????i ?????i di???n"
                    name="name"
                    value={value.name}
                    onChange={handleName}
                    required
                  ></input>
                  {submitted && !value.name && (
                    <p id="note_message">Please enter a name</p>
                  )}
                </span>
                <span>
                  <label>S??? ??i???n tho???i li??n h???:</label>
                  <input
                    type="text"
                    placeholder="Nh???p s??? ??i???n tho???i li??n h???"
                    name="phone"
                    value={value.phone}
                    onChange={handlePhone}
                    required
                  ></input>
                  {submitted && !value.phone && (
                    <p id="note_message">Please enter a phone number</p>
                  )}
                </span>
              </div>
              <div className="res_inf">
                <span>
                  <label className="res_inf_email">Email:</label>
                  <input
                    type="email"
                    placeholder="v?? d???: abc@gmail.com"
                    name="email"
                    value={value.email}
                    onChange={handleEmail}
                    required
                  ></input>
                  {submitted && !value.email && (
                    <p id="note_message">Please enter a email</p>
                  )}
                </span>
                <span name={value.provinceCode}>
                  <label>T???nh:</label>
                  <>
                    {
                      <datalist id="province">
                        {dataProvince?.map((e) => (
                          <option
                            value={e.name + " - " + e.code}
                            name={e.code}
                          ></option>
                        ))}
                      </datalist>
                    }
                  </>
                  <input
                    className="res_inf_input"
                    type="text"
                    list="province"
                    placeholder="Ch???n t??n T???nh"
                    // name={}
                    value={value.province}
                    onChange={(val) => handleProvince(val)}
                    required
                  ></input>
                  {/* <Select
                  value={{
                    value: value.province,
                    label: value.province,
                  }}
                  options={dataProvince?.map(e=>({
                    label: e,
                    value: e
                  }))}
                  /> */}

                  {submitted && !value.province && (
                    <p id="note_message">Please enter a province</p>
                  )}
                </span>
              </div>
              <div className="res_inf">
                <span>
                  <label className="res_inf_district">Qu???n/Huy???n:</label>
                  <>
                    {
                      <datalist id="district">
                        {filterDistrict?.map((e) => (
                          <option value={e.name + " - " + e.code}></option>
                        ))}
                      </datalist>
                    }
                  </>
                  <input
                    className="res_inf_input"
                    type="text"
                    list="district"
                    placeholder="Ch???n t??n Qu???n/Huy???n"
                    name="district"
                    value={value.district}
                    onChange={(val) => handleDistrict(val)}
                    required
                  ></input>

                  {submitted && !value.district && (
                    <p id="note_message">Please enter a province</p>
                  )}
                </span>
                <span>
                  <label>Tr?????ng:</label>
                  <>
                    {
                      <datalist id="school">
                        {filterSchool?.map((e) => (
                          <option value={e.name + " - " + e.code}></option>
                        ))}
                      </datalist>
                    }
                  </>
                  <input
                    type="text"
                    list="school"
                    placeholder="Ch???n t??n Tr?????ng"
                    name="school"
                    value={value.school}
                    onChange={handleSchool}
                    required
                  ></input>
                  {submitted && !value.school && (
                    <p id="note_message">Please enter a high school</p>
                  )}
                </span>
              </div>
            </div>
            <div className="type-experience">
              <p className="title_text_child">H??NH TH???C TR???I NGHI???M</p>
              <select onChange={change} value={initSelect.value}>
                {/* <option disabled >B???n ch???n h??nh th???c tr???i nghi???m n??o ?</option> */}
                <option value="tour_ofline">
                  In person Campus Tour-1h(Campus Tour Offline + Tour guide)
                </option>
                <option value="tour_online">
                  Virtual Campus Tour-30p(Tour Online + Tour guide)
                </option>
              </select>
            </div>
            <p id="note_message1" style={{ textAlign: "left" }}>
              B???n c?? th??? ch???n h??nh th???c tr???i nghi???m online b???ng c??ch ch???n ??? ??
              ph??a tr??n
            </p>
      {showTitle()}

            {/* {submitted && !initSelect.value && (
                    <p id="note_message">Please choose the form you want to experience
                    </p>
                  )} */}
            {
              // !initSelect.value ? <div className="select_message">B???n h??y ch???n h??nh th???c tr???i nghi???m</div> :
              <Offline
                handleDay={handleDay}
                handleAmount={handleAmount}
                amount={value.amount}
                day={value.day}
                submitted={submitted}
                handleProgram={handleProgram}
                handleDepartment={handleDepartment}
                program={value.program}
                department={value.department}
                change={change}
                arrayProgram={value.arrayProgram}
                arrayDepartment={value.arrayDepartment}
                status={on.status}
                time={value.time}
              />
            }
            <input type="submit" name="" value="G???i" className="send" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Main;
