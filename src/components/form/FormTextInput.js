import React,{Component} from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class FormTextInput extends Component {
    render() {
      const { label, type, input } = this.props;
      return (
        <FormGroup>
          <ControlLabel>{label}</ControlLabel>
          <FormControl type={type} { ...input } />
        </FormGroup>
      )
    }
  }


  export default FormTextInput;