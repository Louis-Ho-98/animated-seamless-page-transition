import React from "react";
import Header from "../components/Header/Header";
import OrderSumInfo from "../components/OrderSumInfo/OrderSumInfo";
import PayForm from "../components/PayForm/PayForm";

export default function Payment() {
  const cancelAction = () => {
    alert("canceled");
  };
  let orderNo = "33127";
  let total_price = 22.25;
  return (
    <div className="bg-bgGray px-5 pt-1.5 pb-1.8 h-screen">
      <div>
        <Header cancelAction={cancelAction} />
      </div>
      <div className="mt-14">
        <OrderSumInfo orderNo={orderNo} total_price={total_price} />
      </div>
      <div className="mt-8">
        <PayForm />
      </div>
    </div>
  );
}
