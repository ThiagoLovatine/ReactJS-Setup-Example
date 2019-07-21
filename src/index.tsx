import './ReactotronConfig';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

interface Console {
  tron: any
}

ReactDOM.render(<App />, document.getElementById('root'));
