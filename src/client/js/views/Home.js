import React, { useEffect } from "react";
import JoinedChatList from "../components/JoinedChatList";
import AvailableChatList from "../components/AvailableChatList";
import ViewTitle from "../components/shared/ViewTitle";

import { useDispatch, useSelector } from 'react-redux'
import { fetchChats } from "../actions/chats";

function Home() {
  const chatList = useSelector((state) => state.chat.items)
  const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(fetchChats());
  }, [dispatch]);
  
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatList chatList={chatList}/>
      </div>
      <div className="col-9 fh">
        <ViewTitle title={'Choose your channel'}/>
        <div className="container-fluid">
          <AvailableChatList chatList={chatList}/>
        </div>
      </div>
    </div>
  );
}

export default Home;