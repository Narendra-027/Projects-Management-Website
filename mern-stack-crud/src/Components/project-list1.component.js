import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ProjectTableRow1 from "./ProjectTableRow1";
import './table.css';



const ProjectList1 = () => {
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
	return projects.map((res, i) => {
	return <ProjectTableRow1 obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
		<div className="container">
			<div className="card">
	<Table striped bordered hover className="t">
		<thead>
		<tr>Project List</tr>
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
           
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div></div>
	</div>
);
};

export default ProjectList1;
