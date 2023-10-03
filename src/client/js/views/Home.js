import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import JoinedChatList from "../components/JoinedChatList";
import AvailableChatList from "../components/AvailableChatList";
import ViewTitle from "../components/shared/ViewTitle";
import { withBaseLayout } from '../layouts/Base';
import { fetchChats } from "../actions/chats";
import Notification from '../utils/notifications'
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();

  const joinedChatList = useSelector((state) => state.chat.joined);
  const availableChatList = useSelector((state) => state.chat.available);
  
  useEffect(() => {
    Notification.setup();
    
    dispatch(fetchChats());
  }, [dispatch]);
  
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatList chatList={joinedChatList}/>
      </div>
      <div className="col-9 fh">
        <ViewTitle title={'Choose your channel'}>
          <Link className='btn btn-outline-primary btn-sm' to='/chatCreate'>
            New
          </Link>
        </ViewTitle>
        <div className="container-fluid">
          <AvailableChatList chatList={availableChatList}/>
        </div>
      </div>
    </div>
  );
}

export default withBaseLayout(Home, {canGoBack: false});