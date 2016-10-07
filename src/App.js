import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: {
    width: 400,
    minHeight: 360,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  formBody: {
    padding: 20,
  },
  buttonNext: {
    float: 'right',
  },
  toggle: {
    marginTop: 30,
    marginBottom: 30,
  },
};

const FormBody = ({ tab }) => (
  <div style={styles.formBody}>
    <TextField
      hintText="Your name"
      floatingLabelText="Name"
    /><br />
    <TextField
      hintText="Your company"
      floatingLabelText="Company"
    /><br />
    <Toggle
      label="I agree to the terms of service"
      style={styles.toggle}
    />
    {tab === 'review' ? <RaisedButton label="Back" /> : null}
    {tab !== 'final' ? <RaisedButton label={tab === 'review' ? 'Submit' : 'Review'} style={styles.buttonNext} /> : null}
  </div>
);

class App extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <Tabs>
          <Tab label="Form" >
            <FormBody tab="form" />
          </Tab>
          <Tab label="Review" >
            <FormBody tab="review" />
          </Tab>
          <Tab label="Final">
            <FormBody tab="final" />
          </Tab>
        </Tabs>
      </Card>
    );
  }
}

export default App;
