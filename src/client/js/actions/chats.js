import * as api from '../api/chats';
import db from '../db/firestore';

/* export function fetchChats() {
  return async function(dispatch) {
    const chatList = await api.fetchChatList();

    dispatch({
      type: 'CHATS_FETCH_SUCCESS',
      chatList
    });
  } 
} */
// same thing but simplified
export const fetchChats = () => dispatch =>
  api
    .fetchChatList()
    .then(chatList => dispatch({
      type: 'CHATS_FETCH_SUCCESS',
      chatList
    }));

export const createChat = (formData, userId) => async dispatch => {
  const newChat = {
    ...formData, 
    admin: db.doc(`profiles/${userId}`)
  };

  const chatId = await api.createChat(newChat);
  dispatch({type: 'CHATS_CREATE_SUCCESS'});

  await api.joinChat(userId, chatId);
  dispatch({type: 'CHATS_JOIN_SUCCESS'});
  return chatId;
}