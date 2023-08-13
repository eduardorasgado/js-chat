import * as api from '../api/chats';

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