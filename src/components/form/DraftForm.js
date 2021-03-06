import React from 'react';
//import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import FormTextInput from './FormTextInput';
import FormSelectInput from './FormSelectInput';

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } 
  if (!values.lastName) {
    errors.lastName = 'Required'
  } 
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Required'
  } 
  if (!values.specialityRole) {
    errors.specialityRole = 'Required'
  } 
  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Required'
  } 
  if (!values.battingPosition) {
    errors.battingPosition = 'Required'
  } 
  if (!values.battingStyle) {
    errors.battingStyle = 'Required'
  } 
  if (!values.bowlingStyle) {
    errors.bowlingStyle = 'Required'
  } 
  if (!values.interestInCaptaincy) {
    errors.interestInCaptaincy = 'Required'
  } 
  return errors
}

let DraftForm = props => {
  const { handleSubmit, submitting } = props
  return (
    <form  onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        label="First Name"
        placeholder=""
        component={FormTextInput}
      />
      <Field
        name="lastName"
        type="text"
        label="Last Name"
        placeholder=""
        component={FormTextInput}
      />
      <Field
        name="email"
        type="email"
        label="Email Address"
        placeholder=""
        component={FormTextInput}
      />
      <Field
        name="dateOfBirth"
        label="Date of Birth"
        type="date"
        component={FormTextInput}
      />



      <Field
        label="Speciality Role"
        name="specialityRole"
        component={FormSelectInput}
      //options={roleOptions}

      >
        <option value=""></option>
        <option value="All Rounder">All Rounder</option>
        <option value="Batsman">Batsman</option>
        <option value="Bowler">Bowler</option>
        <option value="Wicket-Keeper">Wicket-Keeper</option>
      </Field>

      <Field
        label="Batting Position"
        name="battingPosition"
        component={FormSelectInput}
      >
        <option value=""></option>
        <option value="Opener">Opener (Position: 1 and 2)</option>
        <option value="Top Order">Top Order (Position: 3 to 5)</option>
        <option value="Middle Order">Middle Order (Position: 6 to 8)</option>
        <option value="Tail">Tail (Position: 9 to 11)</option>
      </Field>

      <Field
        label="Batting Style"
        name="battingStyle"
        component={FormSelectInput}
      >
        <option value=""></option>
        <option value="Left-handed">Left-handed</option>
        <option value="Right-handed">Right-handed</option>
      </Field>

      <Field
        label="Bowling Style"
        name="bowlingStyle"
        component={FormSelectInput}
      >
        <optgroup>
          <option value=""></option>
          <option value="na">N/A</option>
        </optgroup>
        <optgroup label="Pace">
          <option value="Right-arm Fast">Right-arm Fast</option>
          <option value="Right-arm Fast Medium">Right-arm Fast Medium</option>
          <option value="Right-arm Medium">Right-arm Medium</option>
          <option value="Left-arm Fast">Left-arm Fast</option>
          <option value="Left-arm Fast Medium">Left-arm Fast Medium</option>
          <option value="Left-arm Medium">Left-arm Medium</option>
        </optgroup>
        <optgroup label="Spin">
          <option value="Right-arm Off Break">Right-arm Off Break</option>
          <option value="Right-arm Leg Break">Right-arm Leg Break</option>
          <option value="Left-arm Orthodox">Left-arm Orthodox</option>
          <option value="Left-arm Chinaman">Left-arm Chinaman</option>
        </optgroup>
      </Field>

      <Field
        label="Are you Interested in Captaincy?"
        name="interestInCaptaincy"
        component={FormSelectInput}
      >
<option />
          <option value="Yes">Yes</option>
          <option value="Maybe">Maybe</option>
          <option value="No">No</option>


      </Field>






      <center><Button bsClass="btn" bsStyle="primary" type="submit" disabled={submitting}>
        Submit
      </Button></center>
      <br/>
      <br/>
    </form>
  );

}

DraftForm = reduxForm({
  // a unique name for the form
  form: 'register',
  enableReinitialize : true,
  validate
})(DraftForm)

export default connect(state => ({
  initialValues: { firstName : state.login.first_name,
  lastName: state.login.last_name,
  email: state.login.email
}
}))(DraftForm);
