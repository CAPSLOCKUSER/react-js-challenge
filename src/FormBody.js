import React from 'react';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  buttonNext: {
    float: 'right',
  },
  formBody: {
    padding: 20,
  },
  textInput: {
    width: '100%',
  },
  toggleInput: {
    marginTop: 30,
    marginBottom: 30,
  },
};

const FormBody = ({ tab, form, onChange }) => {
  const isForm = tab === 'form';
  const isReview = tab === 'review';
  const isFinal = tab === 'final';
  const nextButtonText = isReview ? 'Submit' : 'Review';
  const nextButtonHref = isReview ? '/final' : '/review';
  const isFormFilled = form.name.length && form.company.length && form.toggle;
  return (
    <div style={styles.formBody}>
      <TextField
        hintText="Your name"
        floatingLabelText="Name"
        value={form.name}
        onChange={onChange('name')}
        disabled={isFinal}
        style={styles.textInput}
      /><br />
      <TextField
        hintText="Your company"
        floatingLabelText="Company"
        value={form.company}
        onChange={onChange('company')}
        disabled={isFinal}
        style={styles.textInput}
      /><br />
      <Toggle
        label="I agree to the terms of service"
        defaultToggled={form.toggle}
        onToggle={onChange('toggle', 'checked')}
        style={styles.toggleInput}
        disabled={!isForm}
      />
      {isReview ? <Link to="/"><RaisedButton label="Back" /></Link> : null}
      {!isFinal ? (
        <Link to={nextButtonHref}>
          <RaisedButton
            label={nextButtonText}
            style={styles.buttonNext}
            disabled={!isFormFilled}
          />
        </Link>
      ) : null}
    </div>
  );
};

export default FormBody;
