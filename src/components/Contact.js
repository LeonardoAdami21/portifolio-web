import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
export const Contact = () => {
  const formInitailDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitailDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      },
    );
    setButtonText("Send");
    if (response.status === 201) {
      setStatus({ succes: true, message: "Email sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact" className="img-fluid" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form method="POST">
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Phone No."
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    placeholder="Message"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit" onClick={handleSubmit}>
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
