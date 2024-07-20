import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./Style.scss";

function DashView() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your API here and set it to the data state
    // For this example, I'll assume you have an API endpoint that returns an array of categories
    fetch("your-api-endpoint")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleCardClick = (action) => {
    // Handle the click event based on the action (e.g., navigate to a new page)
    console.log(`Clicked on ${action}`);
  };

  return (
    <>
      <section className="dashviewContainer">
        <Container>
          <div className={`dashboard ${isLoading ? "loading" : ""}`}>
            <Row>
              <Col lg={3} md={6}>
                <Card
                  className="dashboard-card"
                  onClick={() => handleCardClick("Add New Data")}
                >
                  <a href="upload-document">
                    <Card.Body>
                      <i className="fa fa-plus-circle fa-2x"></i>
                      <h4>Add Document</h4>
                      <p>{isLoading ? "Loading..." : data.length}</p>
                    </Card.Body>
                  </a>
                </Card>
              </Col>
              <Col lg={3} md={6}>
                <Card
                  className="dashboard-card"
                  onClick={() => handleCardClick("Categories")}
                >
                  <a href="category">
                    <Card.Body>
                      <i className="fa fa-list fa-2x"></i>
                      <h4>Categories</h4>
                      <p>{isLoading ? "Loading..." : data.length}</p>
                    </Card.Body>
                  </a>
                </Card>
              </Col>
              <Col lg={3} md={6}>
                <Card
                  className="dashboard-card"
                  onClick={() => handleCardClick("Documents")}
                >
                  <a href="documents">
                    <Card.Body>
                      <i className="fa fa-file fa-2x"></i>
                      <h4>Documents</h4>
                      <p>{isLoading ? "Loading..." : data.length}</p>
                    </Card.Body>
                  </a>
                </Card>
              </Col>
              <Col lg={3} md={6}>
                <Card
                  className="dashboard-card"
                  onClick={() => handleCardClick("Media Gallery")}
                >
                  <a href="media-gallery">
                    <Card.Body>
                      <i className="fa fa-image fa-2x"></i>
                      <h4>Media Gallery</h4>
                      <p>{isLoading ? "Loading..." : data.length}</p>
                    </Card.Body>
                  </a>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default DashView;
