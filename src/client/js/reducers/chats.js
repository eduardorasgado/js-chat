import { combineReducers } from "redux";

function createChatReducer() {
  const joined = (state = [], action) => {
    switch (action.type) {
      case 'CHATS_FETCH_SUCCESS':
        return action.joined;
      case 'CHATS_JOIN_SUCCESS':
        return [...state, action.chat];
      case 'CHATS_FETCH_RESTART':
        return [];
      default:
        return state;
    }
  }

  const available = (state = [], action) => {
    switch (action.type) {
      case 'CHATS_FETCH_SUCCESS':
        return action.available;
      case 'CHATS_JOIN_SUCCESS':
        return state.filter(chat => action.chat.id !== chat.id);
      case 'CHATS_FETCH_RESTART':
        return [];
      default:
        return state;
    }
  }

  const current = (state = null, action) => {
    switch (action.type) {
      case 'CHATS_SET_ACTIVE_CHAT':
        return action.chat;
      default:
        return state;
    }
  }

  return combineReducers({
    joined,
    available,
    current
  });
}

export default createChatReducer();