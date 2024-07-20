import { React } from "react";
import "./Style.scss";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const NoPage = () => {
  return <>
    <Helmet>
      <title>Error 503!</title>
    </Helmet>

    <Container className="error-page">
      <div className="content">
        <h1 className="err_title">
          Oops, 503!
        </h1>
        <img
          src="https://cdn.syncfusion.com/content/images/common/popup/bolddesk-popup-animation.svg"
          alt="error-page"
          width='100%'
        />
        <p className="disc">
          Sorry<b>!</b> This page is under construction!
        </p>
        <a href="/" className="btn btn_err"><i className="fa fa-home"></i> Go Home</a>
      </div>
    </Container>

  </>
};

export default NoPage;