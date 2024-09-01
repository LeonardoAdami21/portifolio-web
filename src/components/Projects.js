import React from "react";
import "./Projects.css";
import { Carousel, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projectImg1 from "../assets/img/project-img1.png";
import projectImg2 from "../assets/img/project-img2.png";
import projectImg3 from "../assets/img/project-img3.png";
import colorSharp from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const myProjects = [
    {
      title: "Task Manager Api",
      description: "API for task manager",
      link: "https://github.com/LeonardoAdami21/task-manager-api",
      imgUrl: projectImg1,
    },
    {
      title: "Personal Portfolio",
      description: "My personal portfolio",
      link: "https://portifolio-web-gilt.vercel.app/",
      imgUrl: projectImg2,
    },
    {
      title: "Task Manager",
      description: "Task manager web app",
      link: "https://task-manager-web-gilt.vercel.app/",
      imgUrl: projectImg3,
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
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
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
                        <ProjectCard key={index} {...project} index={index} />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Tab 2</Tab.Pane>
                <Tab.Pane eventKey="third">Tab 3</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt="img" />
    </section>
  );
};
