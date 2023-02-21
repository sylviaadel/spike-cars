// Node modules
import { collection, getDocs } from "firebase/firestore";

import { database } from "./firebaseSetup";

export async function readDocuments(collectionName) {
  const querySnapshot = await getDocs(collection(database, collectionName));
  const result = [];

  querySnapshot.forEach((doc) => {
    const document = { id: doc.id, ...doc.data() };

    result.push(document);
  });

  return result;
}
