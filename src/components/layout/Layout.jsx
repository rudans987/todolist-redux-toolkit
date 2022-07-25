import React from "react";
import "./style.css";

const Layout = (props) => {
  return <div className="layout">{props.children}</div>; //레이아웃에 둘러싸므로 children을 통해 가져와야 한다.
};

export default Layout;
