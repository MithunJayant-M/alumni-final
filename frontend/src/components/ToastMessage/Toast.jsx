import React, { useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import '../../App.css' // Import the CSS file

const Toast = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div className={`toast-container ${isShown ? "show" : "hide"}`}>
      <div className={`toast-box ${type === "delete" ? "error" : "success"}`}>
        <div className="icon">
          {type === "delete" ? (
            <MdDeleteOutline className="icon-style error-icon" />
          ) : (
            <LuCheck className="icon-style success-icon" />
          )}
        </div>
        <p className="message">{message}</p>
      </div>
    </div>
  );
};

export default Toast;
