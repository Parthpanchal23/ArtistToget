import React from "react";

const CopyRight = () => {
  return (
    <div className="footer-bottom-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            © {new Date().getFullYear()}{" "}
            <strong>{import.meta.env.VITE_PUBLIC_APP}</strong>. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
