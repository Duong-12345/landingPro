import "./main.css";
import { renderToString } from "react-dom/server";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getImage } from "../actions/actionGetImg";
import parse from "html-react-parser";
import { getHeader } from "../actions/actionGetHeaderText";

export const Text = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // getImage(dispatch)
    getHeader(dispatch);
  }, []);
  // const dataText = useSelector(state=> state.dataImageReducer.img);
  const dataText = useSelector(
    (state) => state.dataHeaderText.headerText.header
  );
  const demoText = String(dataText);

  // const demoText = String(dataText[0]?.html)
  // const test = "<div class='title'><p class='title_text'>ĐĂNG KÝ TRẢI NGHIỆM</p><p class='title_text'>PHENIKAA CAMPUS VISIT 2022</p></div><p>Trường Đại học Phenikaa gửi lời chào trân trọng tới Quý vị phụ huynh và các em học sinh!</p><p>Với mục tiêu giới thiệu, cung cấp thông tin tới Quý vị phụ huynh và các em học sinh về Trường Đại học Phenikaa, <br/>các ngành nghề đang được đào tạo tại Trường, giúp các em có quyết định lựa chọn ngành nghề đúng đắn,<br/> Trường Đại học Phenikaa tổ chức chương trình trải nghiệm &quot;Phenikaa Campus Visit 2022&quot;.</p><p>Chương trình được hỗ trợ<b style='color:#f05e22'>HOÀN TOÀN MIỄN PHÍ.</b></p>";
  return <>{parse(demoText)}</>;
};

export const Text1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getImage(dispatch);
  }, []);
  const dataText = useSelector((state) => state.dataImageReducer.img);
  const demoText = String(dataText[0]?.name);
  console.log(demoText)

  return <>{parse(demoText)}</>;
};
// const a = renderToString(<><p>
//     Chương trình được hỗ trợ
//     <b style={{ color: "#f05e22" }}>HOÀN TOÀN MIỄN PHÍ.</b>
//   </p>
//   <p>Lịch đăng ký thời gian tham quan (dự kiến):</p></>)
// console.log(a)
