import db from "../db/firestore";

const _extractSnapshotData = (snapshot) => 
  snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

export const fetchChatList = async () => {

  const snapshot = await db
                    .collection('chats')
                    .get();

  return _extractSnapshotData(snapshot);
}