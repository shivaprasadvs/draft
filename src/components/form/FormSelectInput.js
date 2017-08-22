import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class FormSelectInput extends Component {
  render() {
    const { name, label, input } = this.props;
    return (

      <FormGroup controlId={name}
      onChange={input.onChange}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl componentClass="select" placeholder="select" >
          {this.props.children}
          
        </FormControl>
      </FormGroup>

    )
  }
}


export default FormSelectInput;