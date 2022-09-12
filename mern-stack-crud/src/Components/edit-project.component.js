import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectForm from "./ProjectForm";


const EditProject = (props) => {
const [formValues, setFormValues] = useState({
	name: "",
	professorname: "", 
	email: "", 
	overview: "", 
	prereq: "", 
	students: "", 
	duration: "", 
	branch: "", 
	vacancy: "",
});
	
//onSubmit handler
const onSubmit = (projectObject) => {
	axios
	.put(
		"http://localhost:4000/projects/update-project/" +
		props.match.params.id,
		projectObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Project successfully updated");
		props.history.push("/project-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize student form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/projects/update-project/"
		+ props.match.params.id
	)
	.then((res) => {
		const { projectname, professorname, email, overview, prereq, students, duration, branch, vacancy } = res.data;
		setFormValues({ projectname, professorname, email, overview, prereq, students, duration, branch, vacancy });
	})
	.catch((err) => console.log(err));
}, []);

// Return student form
return (
	<ProjectForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Project
	</ProjectForm>
);
};

// Export EditStudent Component
export default EditProject;
