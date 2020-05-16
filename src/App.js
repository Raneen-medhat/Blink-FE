import React from 'react';
import Side_menu from './components/side-menu/side_menu';
import Conversations from './components/conversations/conversations';
import Conversation_details from './components/conversations/conversation-details/conversation_details';
import './scss/base.scss';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Side_menu/>
      <Conversations/>
      <Conversation_details/>
    </div>
  );
}

export default App;
