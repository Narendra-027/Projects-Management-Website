import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ProjectTableRow from "./ProjectTableRow";
import './table.css';

const ProjectList = () => {
const [projects, setProjects] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/projects/")
	.then(({ data }) => {
		setProjects(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return projects.filter((res,i)=>res.email==localStorage.getItem("user")).map((res, i) => {
	return <ProjectTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
		<div className="container">
			<div className="card">
		
	<Table striped bordered hover className="t">
		<thead>
		<tr>
			<th>Project Title</th>
            <th>Professor</th>
			<th>Email</th>
            <th>Overview</th>
            <th>Pre-requisite</th>
            <th>Students Required</th>
            <th>Durantion In Months</th>
			<th>Branch</th>
			<th>Vacancy</th>
            <th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div></div>
	</div>
);
};

export default ProjectList;
