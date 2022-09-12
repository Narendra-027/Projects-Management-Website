import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import METableRow from "./METableRow";

const MEList = () => {
const [projects, setProjects] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/projects/branch/mechanical engineering")
	.then(({ data }) => {
		setProjects(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return projects.map((res, i) => {
	return <METableRow obj={res} key={i} />;
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
            
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div></div></div>
);
};

export default MEList;
