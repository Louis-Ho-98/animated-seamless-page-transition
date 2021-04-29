import React from "react";

export default function OrderSumInfo({ orderNo, total_price }) {
  return (
    <div>
      <div>
        <text className="text-xs text-gray3">{`Order #${orderNo}`}</text>
      </div>
      <div>
        <text className="text-sm text-gray1">{`$${total_price}`}</text>
      </div>
    </div>
  );
}
