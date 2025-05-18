import React, { useEffect, useRef } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";

import "./toaster.css";
import { ToasterProps } from "./types";

const iconStyles: React.CSSProperties = { marginRight: "10px" };
const icons: Record<string, JSX.Element> = {
  success: <AiOutlineCheckCircle style={iconStyles} />,
  info: <AiOutlineInfoCircle style={iconStyles} />,
  warning: <AiOutlineWarning style={iconStyles} />,
  error: <AiOutlineCloseCircle style={iconStyles} />,
};

const animations: Record<string, string> = {
  fade: "fadeIn",
  pop: "popup",
  slide: "slideIn",
};

const Toaster: React.FC<ToasterProps> = ({
  type = "info",
  message,
  onClose,
  animation = "slide",
}) => {
    
  // A11y
  const toasterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toasterRef.current) {
      toasterRef.current.focus();
    }
  }, []);

  const ariaRole = type === "error" || type === "warning" ? "alert" : "status";
  const ariaLive =
    type === "error" || type === "warning" ? "assertive" : "polite";
  // A11y

  return (
    <div
      className={`toaster ${type} ${animations[animation]}`}
      // A11y
      role={ariaRole}
      aria-live={ariaLive}
      tabIndex={-1}
      ref={toasterRef}
      // A11y
    >
      {icons[type]} {message}
      <button className="closeBtn" onClick={() => onClose()}>
        <AiOutlineClose color="white" />
      </button>
    </div>
  );
};

export default Toaster;