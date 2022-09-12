import React from "react";

const CITableRow = (props) => {
const { _id,projectname, professorname, email, overview, prereq, students, duration, branch, vacancy } = props.obj;



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
	
	</tr>
);
};

export default CITableRow;
