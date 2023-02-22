// Node modules
import { collection, getDoc, getDocs, doc, addDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function createDocument(collectionName, data) {
  const reference = collection(database, collectionName);
  const document = await addDoc(reference, data);
  const result = document.id;

  return result;
}

export async function readDocument(collectionName, documentId) {
  const reference = doc(database, collectionName, documentId);
  const snapshot = await getDoc(reference);
  const result = { id: snapshot.id, ...snapshot.data() };

  return result;
}

export async function readDocuments(collectionName) {
  const querySnapshot = await getDocs(collection(database, collectionName));
  const result = [];

  querySnapshot.forEach((doc) => {
    const document = { id: doc.id, ...doc.data() };

    result.push(document);
  });

  return result;
}
