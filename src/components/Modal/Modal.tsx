import React from "react";
import "./styles.css";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export default function Modal({ title, children }: Props) {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">{title}</div>
          {children}
        </div>
      </div>
    </div>
  );
}
