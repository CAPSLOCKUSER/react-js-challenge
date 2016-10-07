import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';
import './index.css';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#288DEE',
    accent1Color: '#134294',
    canvasColor: '#f6f4f5',
  },
  tabs: {
    textColor: 'white',
    selectedTextColor: '#134294',
  },
});

const app = (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));
