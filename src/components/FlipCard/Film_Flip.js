import React from "react";
import "./Film_Flip.css";

const Film_Flip = (props) => {
  const { item } = props;

  return (
    <div className="flip-card mt-2">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={item.hinhAnh}
            alt={item.tenPhim}
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div
          className="flip-card-back"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <h1 className="mt-16 font-bold text-2xl text-black ">{item.tenPhim}</h1>
          <div className="bg-indigo-500 text-center cursor-pointer py-2 my-2 text-white font-bold">ĐẶT VÉ</div>
        </div>
      </div>
    </div>
  );
};

export default Film_Flip;
