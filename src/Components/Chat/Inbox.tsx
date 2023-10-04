import React from 'react'
import './Inbox.scss'
import InboxFrame from './InboxFrame'
import SendMessage from './SendMessage'
import SidebarResponsive from '../Sidebar/Sidebar'

function App() {
  return (
    <div className='inbox__wrap wrapper'>
      {SidebarResponsive()}
      <div className="inbox__content content">
        <div className="chat">
          <InboxFrame />
          <SendMessage />
        </div>
      </div>
    </div>
  );
}

export default App;
