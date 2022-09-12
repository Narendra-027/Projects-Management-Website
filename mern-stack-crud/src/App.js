import React from "react";

import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


import "./App.css";


import { BrowserRouter as Router, Switch,
	Route, Link } from "react-router-dom";


import CreateProject from
	"./Components/create-project.component";
import EditProject from
	"./Components/edit-project.component";
import ProjectList from
	"./Components/project-list.component";
import ProjectList1 from
"./Components/project-list1.component";
import Home from 
	"./Components/Home.component";
	
import Add from "./Components/createProject.component";
import About from "./Components/About.component";
import Grid from "./Components/Grid.component";

import Sign from "./Components/sign.component"

import AIList from "./Components/Branch/ai.component";
import BBList from "./Components/Branch/bb.component";
import CHList from "./Components/Branch/ch.component";
import CIList from "./Components/Branch/ci.component";
import CSList from "./Components/Branch/cs.component";
import EEList from "./Components/Branch/ee.component";
import MTList from "./Components/Branch/mt.component";
import MEList from "./Components/Branch/me.component";


const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/Home"}
				className="nav-link">
				<h2><b>Progetto</b> </h2>
				</Link>
			</Navbar.Brand>
			
			<Nav className="justify-content-end">
			<Nav>
				<Link to={"/Home"}
					className="nav-link">
					<h5><b>Home</b></h5>
				</Link>
				</Nav>

				<Nav>
				<Link to={"/Sign"}
					className="nav-link">
					<h5><b>Professor Login</b></h5>
				</Link>
				</Nav>

				<Nav>
				<Link to={"/project-list1"}
					className="nav-link">
					<h5><b>Project List</b></h5>
				</Link>
				</Nav>
				<Nav>
				<Link to={"/About"}
					className="nav-link">
					<h5><b>About</b></h5>
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
					component={Home} />
				<Route path="/create-project"
					component={CreateProject} />
				<Route path="/edit-project/:id"
					component={EditProject} />
				<Route path="/project-list"
					component={ProjectList} />
				<Route path="/project-list1"
					component={ProjectList1} />
				<Route path="/project-list"
					component={Home} />
				<Route path="/Add"
					component={Add} />
				<Route path="/Home"
					component={Grid} />
				<Route path="/About"
					component={About} />
				<Route path="/ai"
					component={AIList} />
				<Route path="/bb"
					component={BBList} />
				<Route path="/ch"
					component={CHList} />
				<Route path="/ci"
					component={CIList} />
				<Route path="/cs"
					component={CSList} />
				<Route path="/ee"
					component={EEList} />
				<Route path="/mt"
					component={MTList} />
				<Route path="/me"
					component={MEList} />
				<Route path="/Sign"
					component={Sign} />
				
				</Switch>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>

	// <Router>
	// <div className="App">
	// 	<header className="App-header">
	// 	<Navbar bg="dark" variant="dark">
	// 		<Container>
	// 		<Navbar.Brand>
	// 			<Link to={"/create-project"}
	// 			className="nav-link">
	// 			Progetto - Professor Portal
	// 			</Link>
	// 		</Navbar.Brand>

	// 		<Nav className="justify-content-end">
	// 			<Nav>
	// 			<Link to={"/create-project"}
	// 				className="nav-link">
	// 				Create Project
	// 			</Link>
	// 			</Nav>

	// 			<Nav>
	// 			<Link to={"/project-list"}
	// 				className="nav-link">
	// 				Project List
	// 			</Link>
	// 			</Nav>
	// 		</Nav>
	// 		</Container>
	// 	</Navbar>
	// 	</header>

	// 	<Container>
	// 	<Row>
	// 		<Col md={12}>
	// 		<div className="wrapper">
	// 			<Switch>
	// 			<Route exact path="/"
	// 				component={Createproject} />
	// 			<Route path="/create-project"
	// 				component={Createproject} />
	// 			<Route path="/edit-project/:id"
	// 				component={Editproject} />
	// 			<Route path="/project-list"
	// 				component={projectList} />
	// 			</Switch>
	// 		</div>
	// 		</Col>
	// 	</Row>
	// 	</Container>
	// </div>
	// </Router>
);
};

export default App;
