import db from "../db/firestore";
import firebase from 'firebase/app';

const _extractSnapshotData = (snapshot) => 
  snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

export const fetchChatList = async () => {

  const snapshot = await db
                    .collection('chats')
                    .get();

  return _extractSnapshotData(snapshot);
}

export const createChat = chat => {
  return db
    .collection('chats')
    .add(chat)
    .then(docRef => docRef.id);
}

export const joinChat = (userId, chatId) => {
  const userRef = db.doc(`profiles/${userId}`);
  const chatRef = db.doc(`chats/${chatId}`);

  const fsFieldValue = firebase.firestore.FieldValue;

  userRef.update({joinedChats: fsFieldValue.arrayUnion(chatRef)})
  chatRef.update({joinedUsers: fsFieldValue.arrayUnion(userRef)});
}