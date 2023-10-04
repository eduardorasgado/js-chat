import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ChatUserList from '../components/ChatUserList';
import ViewTitle from '../components/shared/ViewTitle';
import ChatMessageList from '../components/ChatMessageList';
import { withBaseLayout } from '../layouts/Base';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeToChat } from '../actions/chats';

function Chat() {
  const dispatch = useDispatch();
  //const currentChat = useSelector(({chat}) => chat.current);
  const { id } = useParams();

  useEffect(() => {
    const unsubFromChat = dispatch(subscribeToChat(id));

    return () => {
      //unsubFromChat();
    }
  }, []);

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList/>  {/** userList={currentChat ? currentChat.joinedUsers : []} */}
      </div>
      <div className="col-9 fh">
        <ViewTitle title={`Chat ${id}`}/> {/** currentChat ? currentChat.name : '' */}
        <ChatMessageList />
      </div>
    </div>

  )
}

export default withBaseLayout(Chat);