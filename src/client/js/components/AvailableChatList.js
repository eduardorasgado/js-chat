import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinChat } from '../actions/chats';

function AvailableChatList({ chatList }) {
  const dispatch = useDispatch();

  const user = useSelector(({auth}) => auth.user);
  
  const askForConfirmation = chat => {
    const isConfirming = window.confirm(`Do you want to join the chat: ${chat.name}?`)
    if(isConfirming) {
      dispatch(joinChat(chat, user.uid));
    }
  }
  
  const isChatListEmpty = (chatList) => {
    return chatList == null || chatList == undefined || chatList.length == 0
  }

  return (
    <div className="row mt-3">
      {isChatListEmpty(chatList) &&
        <div className="container-fluid">
          <div className="alert alert-warning">No chats to join :(</div>
        </div>}
      {
        chatList.map(chat =>
          <div
            key={`chat-${chat.id}`} 
            className="col-lg-3 col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{chat.name}</h5>
                <p className="card-text">{chat.description}</p>
                <button
                  onClick={() => { askForConfirmation(chat) }}
                  className="btn btn-outline-primary">Join Chat</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default AvailableChatList;