import React from "react";
import "./Projects.css";
import { Carousel, Col, Container, Nav, Row, Tab } from "react-bootstrap";

export const Projects = () => {
  const myProjects = [
    {
      title: "Task Manager Api",
      description: "API for task manager",
      link: "https://github.com/LeonardoAdami/task-manager-api",
    },
    {
      title: "Personal Portfolio",
      description: "My personal portfolio",
      link: "https://task-manager-web-gilt.vercel.app/",
    },
    {
      title: "Task Manager",
      description: "Task manager web app",
      link: "https://github.com/LeonardoAdami/task-manager-web",
    },
  ];
  return (
    <section className="project1" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              I have made some projects using different technologies and
              languages.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {myProjects.map((project, index) => {
                      return (
                        <Col key={index} sm={6}>
                          <div className="proj-imgbx">
                            <img src={project.link} alt="Image" />
                            <div className="proj-txtx">
                              <h4>{project.title}</h4>
                              <span>{project.description}</span>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
