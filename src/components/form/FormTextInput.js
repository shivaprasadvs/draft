import React,{Component} from 'react';
import { FormGroup, ControlLabel, FormControl, Glyphicon } from 'react-bootstrap';

class FormTextInput extends Component {
    render() {
      const { label, type, input, meta: { touched, error, warning } } = this.props;
      return (
        <FormGroup>
          <ControlLabel>{label}</ControlLabel>
          <FormControl type={type} { ...input } />
          { touched && ((error && <span><Glyphicon glyph="hand-up" /> {error}</span>) || (warning && <span><Glyphicon glyph="hand-up" />{warning}</span>))}
        </FormGroup>
      )
    }
  }


  export default FormTextInput;