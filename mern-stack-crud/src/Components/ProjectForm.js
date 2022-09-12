import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
  
const ProjectForm = (props) => {
  const validationSchema = Yup.object().shape({
    projectname: Yup.string().required("Required"),
    professorname: Yup.string().required("Required"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
    overview: Yup.string().required("Required"),
    prereq: Yup.string().required("Required"),
    students: Yup.number()
      .positive("Invalid number")
      .integer("Invalid number")
      .required("Required"),
    duration: Yup.number()
    .positive("Invalid month")
    .integer("Invalid month")
    .required("Required"),
    vacancy: Yup.number()
      .positive("Invalid")
      .integer("Invalid ")
      .required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <center>
          <FormGroup><h5 style={{color:"white"}}>Project Title </h5>
            <Field name="projectname" type="text" 
                className="form-control" />
            <ErrorMessage
              name="projectname"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup><h5 style={{color:"white"}}>Professor Name</h5>
            <Field name="professorname" type="text" 
                className="form-control" />
            <ErrorMessage
              name="professorname"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup><h5 style={{color:"white"}}>Email</h5>
            <Field name="email" type="text" 
                className="form-control" />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup><h5 style={{color:"white"}}>Overview of the project</h5>
            <Field name="overview" type="text" 
                className="form-control" />
            <ErrorMessage
              name="overview"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup><h5 style={{color:"white"}}>Pre-requisite</h5>
            <Field name="prereq" type="text" 
                className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup><h5 style={{color:"white"}}>Students Required</h5>
            <Field name="students" type="number" 
                className="form-control" />
            <ErrorMessage
              name="students"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup><h5 style={{color:"white"}}>Duration In Months</h5>
            <Field name="duration" type="number" 
                className="form-control" />
            <ErrorMessage
              name="duration"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup><h5 style={{color:"white"}}>Branch</h5>
          
            <Field name="branch" type="text" 
            
                className="form-control" />
            <ErrorMessage
              name="branch"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
         
          <FormGroup><h5 style={{color:"white"}}>Vacancy</h5>
            <Field name="vacancy" type="number" 
                className="form-control" />
            <ErrorMessage
              name="vacancy"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <br/>
          <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
          <br/>
          </center>
        </Form>
      </Formik>
    </div>
  );
};
  
export default ProjectForm; 