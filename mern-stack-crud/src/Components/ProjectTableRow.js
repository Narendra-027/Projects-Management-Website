import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ProjectTableRow = (props) => {
const { _id,projectname, professorname, email, overview, prereq, students, duration, branch, vacancy } = props.obj;

const deleteProject = () => {
	axios
	.delete(
"http://localhost:4000/projects/delete-project/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Project successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{projectname}</td>
    <td>{professorname}</td>
	<td>{email}</td>
    <td>{overview}</td>
    <td>{prereq}</td>
    <td>{students}</td>
    <td>{duration}</td>
	<td>{branch}</td>
    <td>{vacancy}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-project/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteProject}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default ProjectTableRow;
