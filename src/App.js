import React from 'react';
import Side_menu from './components/side-menu/side_menu';
import Conversations from './components/conversations/conversations'
import './scss/base.scss'
import './App.scss';
function App() {
  return (
    <div className="App">
      <Side_menu/>
      <Conversations/>
    </div>
  );
}

export default App;
