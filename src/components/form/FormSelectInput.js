import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Glyphicon } from 'react-bootstrap';

class FormSelectInput extends Component {
  render() {
    const { name, label, input, meta: { touched, error, warning } } = this.props;
    return (

      <FormGroup controlId={name}
      onChange={input.onChange}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl componentClass="select" placeholder="select" >
          {this.props.children}
          
        </FormControl>
        { touched && ((error && <span><Glyphicon glyph="hand-up" /> {error}</span>) || (warning && <span><Glyphicon glyph="hand-up" />{warning}</span>))}
      </FormGroup>

    )
  }
}


export default FormSelectInput;