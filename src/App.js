import React, {Component} from 'react';
import {Match} from 'react-router';
import {Card} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import FormBody from './FormBody';

const styles = {
  container: {
    width: 375,
    minHeight: 360,
    margin: '30px auto',
  },
};

class App extends Component {
  state = {
    name: '',
    company: '',
    toggle: false,
  };
  handleChange = (field, valueField = 'value') => event => {
    this.setState({
      [field]: event.target[valueField],
    });
  };
  render() {
    const tabsContent = ['form', 'review', 'final'].map((type, index) => (
      <Tab
        key={index}
        label={type}
        value={type === 'form' ? '' : type}
        disabled={true}
      >
        <FormBody
          tab={type}
          form={this.state}
          onChange={this.handleChange}
        />
      </Tab>
    ));
    return (
      <Card style={styles.container}>
        <Match pattern="/(|review|final)">
          {({ pathname = '' }) => (
            <Tabs value={pathname.slice(1)}>
              {tabsContent}
            </Tabs>
          )}
        </Match>
      </Card>
    );
  }
}

export default App;
