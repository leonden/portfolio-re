import React, { ReactNode } from "react";
import "./ErrorPage.scss";

class ErrorPage extends React.Component {
  render(): ReactNode {
    return (
      <section id="error-page">
        <div className="page-container">
          <h1>404</h1>
        </div>
        <div className="background-container">
          <div className="semi-circle"></div>
        </div>
      </section>
    );
  }
}

export default ErrorPage;
