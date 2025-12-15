import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();

  const sessionId = searchParams.get("session_id");
  console.log(sessionId);

  const axiosSecure = useAxiosSecure();
  const calledRef = useRef(false);

  useEffect(() => {
    if (!sessionId || calledRef.current) return;

    calledRef.current = true;

    axiosSecure
      .patch(`/payment-success?session_id=${sessionId}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <h1>Payment Sucess</h1>
    </div>
  );
};

export default PaymentSuccess;
