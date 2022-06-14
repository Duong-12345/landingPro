import "./main.css";

export default function ChildImg(props) {
  return (
    <>
      {!!props.src && (
        <img
          src={props.src}
          alt={props.name}
          id={props.id}
          width="100%"
          height="auto"
        ></img>
      )}
    </>
  );
}
