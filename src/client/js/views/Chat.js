import React from 'react';
import { useParams } from 'react-router-dom';

import ChatUserList from '../components/ChatUserList';
import ViewTitle from '../components/shared/ViewTitle';
import ChatMessageList from '../components/ChatMessageList';
import BaseLayout from '../layouts/Base';

function ChatView() {

  const { id } = useParams();

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList />
      </div>
      <div className="col-9 fh">
        <ViewTitle title={`Channel ${id}`}/>
        <ChatMessageList />
      </div>
    </div>

  )
}

function Chat() {
  return ( 
    <BaseLayout>
      <ChatView />
    </BaseLayout>
   );
}

export default Chat;