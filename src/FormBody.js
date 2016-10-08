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
  toggle: {
    marginTop: 30,
    marginBottom: 30,
  },
};

const FormBody = ({ tab }) => {
  const isForm = tab === 'form';
  const isReview = tab === 'review';
  const isFinal = tab === 'final';
  const nextButtonText = isReview ? 'Submit' : 'Review';
  const nextButtonHref = isReview ? '/final' : '/review';
  return (
    <div style={styles.formBody}>
      <TextField
        hintText="Your name"
        floatingLabelText="Name"
        disabled={!isForm}
      /><br />
      <TextField
        hintText="Your company"
        floatingLabelText="Company"
        disabled={!isForm}
      /><br />
      <Toggle
        label="I agree to the terms of service"
        style={styles.toggle}
        disabled={!isForm}
      />
      {isReview ? <Link to="/"><RaisedButton label="Back" /></Link> : null}
      {!isFinal ? (
        <Link to={nextButtonHref}>
          <RaisedButton label={nextButtonText} style={styles.buttonNext} />
        </Link>
      ) : null}
    </div>
  );
};

export default FormBody;
