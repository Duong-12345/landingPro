import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../actions/actionGetImg";
import ChildImg from "./childImg";
import "./main.css";

export default function Image() {
    const dispatch = useDispatch()
    useEffect(()=>{
        getImage(dispatch)
    },[])
    const dataImage = useSelector(state=> state.dataImageReducer.img)
    // console.log(dataImage)
    return(
        <div className="img_head">
            {/* <span className="img_head_left">
              <img
                src="./img/logo1.png"
                alt="logo1"
                width="100%"
                height="auto"
              ></img>
            </span>
            <span className="img_head_right">
              <img
                src="./img/logo2.png"
                alt="logo2"
                width="100%"
                height="auto"
              ></img>
            </span> */}
            {dataImage.map(e=>(
                <span className="img_head_right">
                <ChildImg
                src={e.src}
                name={e.name}
                id={e.id}
                />
                </span>
            ))}
          </div>
    )
}