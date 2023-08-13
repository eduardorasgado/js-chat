const DEFAULT_STATE = {
  items: []
}

/* actionMap = new Map();

const initializeMap = () => {
  actionMap.set()
} */

function chatReducer(state = DEFAULT_STATE, action) {
  //actionMap.get(action);

  switch(action.type) {
    case 'CHATS_FETCH_SUCCESS' : 
      return { items: action.chatList };
    default: 
      return state;
  }
}



export default chatReducer;