import "./styles.scss"
import React, { useState } from "react";
import ReactDOM from "react-dom";


export const Modal = ({ children }:any) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="modal">
      <button onClick={() => setIsVisible(true)}>Abrir modal</button>
      {isVisible && (
        <div className="modalContent">
          {children}
          <button onClick={() => setIsVisible(false)}>Fechar modal</button>
        </div>
      )}
    </div>
  );
};
