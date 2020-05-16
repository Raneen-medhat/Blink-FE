import React from 'react';
import SideMenu from './components/sideMenu/sideMenu';
import Conversations from './components/conversations/conversations';
import ConversationDetails from './components/conversations/conversationDetails/conversationDetails';
import './scss/base.scss';
import './App.scss';
function App() {
  return (
    <div className="App">
      <SideMenu/>
      <Conversations/>
      <ConversationDetails/>
    </div>
  );
}

export default App;
