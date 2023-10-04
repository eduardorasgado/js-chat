import { useState } from 'react';
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
export const fetchChats = () => async (dispatch, getState) => {
  const { user } = getState().auth;

  dispatch({ type: 'CHATS_FETCH_INIT' });

  const chatList = await api.fetchChatList();
  chatList.forEach(chat => chat.joinedUsers = chat.joinedUsers.map(user => user.id));


  const sortedChatList = chatList.reduce((accuChats, chat) => {
    const chatToJoin = chat.joinedUsers.includes(user.uid)
      ? 'joined'
      : 'available';
    accuChats[chatToJoin].push(chat);

    return accuChats;
  }, { joined: [], available: [] });

  dispatch({ type: 'CHATS_FETCH_SUCCESS', ...sortedChatList })
  return sortedChatList;
}

export const joinChat = (chat, userId) => dispatch => {
  api.joinChat(userId, chat.id)
    .then(_ => {
      dispatch({ type: 'CHATS_JOIN_SUCCESS', chat });
    })
}

export const createChat = (formData, userId) => async dispatch => {
  const newChat = {
    ...formData,
    admin: db.doc(`profiles/${userId}`)
  };

  const chatId = await api.createChat(newChat);
  dispatch({ type: 'CHATS_CREATE_SUCCESS' });

  await api.joinChat(userId, chatId);
  //dispatch({ type: 'CHATS_JOIN_SUCCESS' });
  return chatId;
}

export const subscribeToChat = chatId => dispatch => {
  api
    .subscribeToChat(chatId, async chat => {
      const joinedUsersPromList = chat.joinedUsers.map(async userRef => {
        const userSnapshot = await userRef.get();

        return userSnapshot.data();
      });

      const joinedUsers = await Promise.all(joinedUsersPromList);
      debugger
      dispatch({ type: 'CHATS_SET_ACTIVE_CHAT', chat });
    });
}