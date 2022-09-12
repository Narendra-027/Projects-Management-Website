
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProjectForm from "./ProjectForm";

// CreateStudent Component
const CreateProject = () => {
const [formValues, setFormValues] =
	useState({ projectname: '',professorname:'', email: '', overview: '',prereq:'',students:'',duration:'',branch:'',vacancy:'' })
// onSubmit handler
const onSubmit = projectObject => {
	axios.post(
'http://localhost:4000/projects/create-project',
	projectObject)
	.then(res => {
		if (res.status === 200)
		alert('Project successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return student form
return(
	<ProjectForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Project
	</ProjectForm>
)
}

// Export CreateStudent Component
export default CreateProject
