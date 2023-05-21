import React from "react";
import { Btn } from "./css/ButtonStyled";

const Button = ({ children, styles, onClick }) => {
  return (
    <Btn className={`btn ${styles}`} onClick={onClick}>
      {children}
    </Btn>
  );
};
export default Button;
