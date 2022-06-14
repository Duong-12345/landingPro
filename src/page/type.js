
// export default function Type() {
//   return (
//     <div>
//       This is type
//     </div>
//   );
// }
import React, { useEffect, useReducer, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Editor } from "draft-js";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../actions/actionGetImg";
import parse from "html-react-parser";
import { Quill, quillEditor } from "react-quill";
import { getHeader, updateData } from "../actions/actionGetHeaderText";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import "./edit.css";

export default function Type() {
  const dispatch = useDispatch();
  // const dataText = useSelector(
  //   (state) => state.dataHeaderText.headerText.header
  // );
  // useEffect(() => {
  //   getHeader(dispatch);
  // }, []);
  // let demoText;
  // if (dataText !== undefined) {
  //   demoText = String(dataText);
  // }
  // const [content, setContent] = useState("loading");
  // const handleChange = (value) => {
  //   setContent(value);
  // };

  // useEffect(() => {
  //   if (demoText === undefined) {
  //     setContent("Loading ...");
  //   } else setContent(demoText);
  // }, [demoText]);

  // const onSubmit = () => {
  //   updateData("62666ec701bdcbb23f3591cc", content, dispatch);
  //   alert("Bạn đã đổi thay đổi thành công")
  // };

  return (
    <div>
      <h2> Edit Type</h2>
      <ReactQuill
        placeholder={"start posting something"}
        // value={content}
        // onChange={handleChange}
        modules={Editor.modules}
        formats={Editor.formats}
      />

      {/* <button type="submit" onClick={onSubmit}>
        Update
      </button> */}
      <Link to = '/'>
        <button>Trang chủ</button>
      </Link>

      <div>
        <h2>Contact</h2>
        <ReactQuill
        placeholder={"start posting something"}
        modules = {Editor.modules}
        formats = {Editor.formats}
        />
      </div>
    </div>
    
  );
}

Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      {
        color: [
          "#000000",
          "#e60000",
          "#ff9900",
          "#ffff00",
          "#008a00",
          "#0066cc",
          "#9933ff",
          "#ffffff",
          "#facccc",
          "#ffebcc",
          "#ffffcc",
          "#cce8cc",
          "#cce0f5",
          "#ebd6ff",
          "#bbbbbb",
          "#f06666",
          "#ffc266",
          "#ffff66",
          "#66b966",
          "#66a3e0",
          "#c285ff",
          "#888888",
          "#a10000",
          "#b26b00",
          "#b2b200",
          "#006100",
          "#0047b2",
          "#6b24b2",
          "#444444",
          "#5c0000",
          "#663d00",
          "#666600",
          "#003700",
          "#002966",
          "#3d1466",
          "#203370",
          "custom-color",
        ],
      },
    ],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
];
// Editor.propTypes = {
//     placeholder: React.PropTypes.string,
//   }
