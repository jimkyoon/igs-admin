import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const getAllDocs = async (page) => {
  if (page.length !== 0) {
    const querySnapshot = await getDocs(collection(db, page));
    const queryArray = [];
    querySnapshot.forEach((doc) => {
      const newObj = doc.data();
      newObj.id = doc.id;
      queryArray.push(newObj);
    });
    return queryArray;
  }
  return [];
};

const submitNewDoc = async (page, formState) => {
  console.log("now submitting form");
  const newDoc = await addDoc(collection(db, page), formState);
  console.log("new doc", newDoc);
};

const updatePost = async (page, postId, formState) => {
  console.log("now updating doc");
  const edittedFormState = { ...formState };
  delete edittedFormState.id;
  const currentDoc = doc(db, page, postId);
  await updateDoc(currentDoc, edittedFormState);
  console.log("finishing up update");
};

export { getAllDocs, submitNewDoc, updatePost };
