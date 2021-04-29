import React from "react";
import cancleIcon from "../../assets/images/Cancel.png";

export default function Header({ cancelAction }) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <text className="text-4xl text-black">Payment</text>
      </div>

      <button
        onClick={() => {
          cancelAction();
        }}
      >
        <img src={cancleIcon} />
      </button>
    </div>
  );
}
