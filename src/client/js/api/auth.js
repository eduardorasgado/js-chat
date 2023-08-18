import db from '../db/firestore';
import firebase from 'firebase/app'
import 'firebase/auth';

const _createUserProfile = (userProfile) =>
  db
    .collection('profiles')
    .doc(userProfile.uid)
    .set(userProfile);

export const getUserProfile = uid =>
  db
    .collection('profiles')
    .doc(uid)
    .get()
    .then(snapshot => snapshot.data());

export const register = async ({ email, password, username, avatar }) => {
  try {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const userProfile = {
      uid: user.uid,
      username,
      email,
      avatar,
      joinedChats: []
    };

    _createUserProfile(userProfile);

    return userProfile;
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export const login = async ({ email, password }) => {
  try {
    const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
    return await getUserProfile(user.uid);
  } catch(error) {
    return Promise.reject(error.message)
  }
}


export const logout = () => firebase.auth().signOut();

export const onAuthStateChanges = onAuth => {
  firebase.auth().onAuthStateChanged(onAuth);
}