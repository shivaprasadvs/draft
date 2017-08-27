import React from 'react';
//import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import FormTextInput from './FormTextInput';
import FormSelectInput from './FormSelectInput';
import {store} from '../../index.js';


let DraftForm = props => {
  const { handleSubmit } = props
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
        <option value="all">All Rounder</option>
        <option value="bat">Batsman</option>
        <option value="bowl">Bowler</option>
        <option value="keep">Wicket-Keeper</option>
      </Field>

      <Field
        label="Batting Position"
        name="battingPosition"
        component={FormSelectInput}
      >
        <option value=""></option>
        <option value="open">Opener (Position: 1 and 2)</option>
        <option value="top">Top Order (Position: 3 to 5)</option>
        <option value="middle">Middle Order (Position: 6 to 8)</option>
        <option value="tail">Tail (Position: 9 to 11)</option>
      </Field>

      <Field
        label="Batting Style"
        name="battingStyle"
        component={FormSelectInput}
      >
        <option value=""></option>
        <option value="left">Left-handed</option>
        <option value="right">Right-handed</option>
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
          <option value="rf">Right-arm Fast</option>
          <option value="rfm">Right-arm Fast Medium</option>
          <option value="rm">Right-arm Medium</option>
          <option value="lf">Left-arm Fast</option>
          <option value="lfm">Left-arm Fast Medium</option>
          <option value="lm">Left-arm Medium</option>
        </optgroup>
        <optgroup label="Spin">
          <option value="ob">Right-arm Off Break</option>
          <option value="lb">Right-arm Leg Break</option>
          <option value="slo">Left-arm Orthodox</option>
          <option value="slc">Left-arm Chinaman</option>
        </optgroup>
      </Field>

      <Field
        label="Are you Interested in Captaincy?"
        name="interestInCaptaincy"
        component={FormSelectInput}
      >
<option />
          <option value="yes">Yes</option>
          <option value="maybe">Maybe</option>
          <option value="no">No</option>


      </Field>






      <center><Button bsClass="btn" bsStyle="primary" type="submit">
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
  enableReinitialize : true
})(DraftForm)

export default connect(state => ({
  initialValues: { firstName : store.getState().login.first_name,
  lastName: store.getState().login.last_name,
  email: store.getState().login.email
}
}))(DraftForm);
