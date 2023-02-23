import { async } from "@firebase/util";
import { doc, collection, getDoc } from "firebase/firestore";
import { addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
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

export async function removeDocument(collectionName, documentId) {
  const reference = doc(database, collectionName, documentId);
  const snapshot = await deleteDoc(reference);
  //const result = { id: snapshot.id, ...snapshot.data() };

  return snapshot;
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

export async function updateDocument(collectionName, documentToUpdate) {
  const reference = doc(database, collectionName, documentToUpdate.id);

  await updateDoc(reference, documentToUpdate);
  return `${documentToUpdate.id}`;
}
