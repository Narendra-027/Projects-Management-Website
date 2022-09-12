import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
  
const UserForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Rquired"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Rquired"),
    password: Yup.string().required("Rquired"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>Name
            <Field name="name" type="text" 
                className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>Email
            <Field name="email" type="text" 
                className="form-control" />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>Passsword
            <Field name="overview" type="text" 
                className="form-control" />
            <ErrorMessage
              name="password"
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
        </Form>
      </Formik>
    </div>
  );
};
  
export default UserForm; 