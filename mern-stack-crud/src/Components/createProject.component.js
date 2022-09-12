import React from "react";

import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./nav2.css";
import { BrowserRouter as Router, Switch,
	Route, Link } from "react-router-dom";


import CreateProject from
	"./create-project.component";
import EditProject from
	"./edit-project.component";
import ProjectList from
	"./project-list.component";


const Add = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="danger" variant="dark" color="black" text-color="black">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-project"}
				className="nav-link">
				Progetto - Professor Portal
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-project"}
					className="nav-link">
					Create Project
				</Link>
				</Nav>

				<Nav>
				<Link to={"/project-list"}
					className="nav-link">
					My Projects
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Switch>
				<Route exact path="/"
					component={CreateProject} />
				<Route path="/create-project"
					component={CreateProject} />
				<Route path="/edit-project/:id"
					component={EditProject} />
				<Route path="/project-list"
					component={ProjectList} />
				</Switch>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default Add;
