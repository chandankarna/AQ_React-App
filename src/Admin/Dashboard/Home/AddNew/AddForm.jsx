import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

function AddForm() {
  
  // State variables to store form input data and messages
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [upload, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send form data, including the file
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("upload", upload);
    console.log(upload);

    // Replace with your backend URL where the form data will be sent
    const submitUrl = "http://loacalhost:8001/server";

    // Send a POST request to the backend with the form data
    fetch(submitUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())

      .then((data) => console.log(data));
  };

  return (
    <div>
      <Container className="form-Container">
        <Row className="justify-content-center">
          <Col md={8}>
            {/* Display success and error messages if available */}
            {successMessage && (
              <Alert variant="success">{successMessage}</Alert>
            )}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            {/* Form for user input */}
            <Form onSubmit={handleSubmit} className="form">
              <Form.Group controlId="formTitle" className="form-group">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter document title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formCategory" className="form-group">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select category</option>
                  <option value="1">category 1</option>
                  <option value="2">category 2</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formFile" className="form-group">
                <Form.Label>Upload Document</Form.Label>
                <Form.Control
                  type="file"
                  id="upload"
                  accept=".pdf, .doc, .docx" // Define accepted file types
                  onChange={handleFileChange}
                />
              </Form.Group>

              {/* Submit button to trigger form submission */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddForm;
