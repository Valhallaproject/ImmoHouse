import React, { PropsWithChildren } from "react";
import "./estimation.css"

interface EstimationProps {
  img: string;
}
const Estimation = ({ img }: PropsWithChildren<EstimationProps>) => (
  <div
    className="estimation"
    style={{
        backgroundImage: `url(" ${img} ")`,
        backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
  </div>
);

export default Estimation;
