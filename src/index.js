import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home.js';

//StateLess Component
const StateLessComponent = () => {
  return <h2>StateLess Component</h2>
}

//StateFull Component
class StateFullComponent extends React.Component {
    render() {
        return <p>StateFull Component</p> 
    }
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

