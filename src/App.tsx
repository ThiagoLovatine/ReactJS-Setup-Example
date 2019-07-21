import React from 'react';
import { Provider } from 'react-redux';
import Sidebar from './components/Sidebar';
import Video from './components/Video';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Video />
      <Sidebar />
    </Provider>
  );
}

export default App;
