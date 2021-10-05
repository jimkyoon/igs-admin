import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firebase";

const fileType = {
  articles: "image",
  sounds: "audio",
  stories: "images",
};

const uploadFileToStorage = async (file, page) => {
  let returnLinkForFormData;
  const folder = page === "sounds" ? "sounds/" : "images/";
  const fileRef = ref(storage, folder + file.name);
  console.log("uploadFileToStorage fileRef", fileRef);
  await uploadBytes(fileRef, file).then(async (snapshot) => {
    await getDownloadURL(snapshot.ref).then((dURL) => {
      console.log("this is durl", dURL);
      returnLinkForFormData = dURL;
    });
  });
  console.log("returnLinkForFOrmData after uploadByte", returnLinkForFormData);
  return returnLinkForFormData;
};

const storageLinkForState = async (page, formState) => {
  if (fileType[page] === "image" || fileType[page] === "audio") {
    const uploadFile = formState[fileType[page]];
    const newUploadLink = await uploadFileToStorage(uploadFile, page);
    console.log("new file", newUploadLink);
    return newUploadLink;
  }
  if (fileType[page] === "images") {
    const uploadFiles = formState[fileType[page]];
    console.log("uploadFiles before", uploadFiles);
    const uploadFilesPromiseArray = uploadFiles.map((file) =>
      uploadFileToStorage(file, page)
    );
    const resolvedUploadFiles = await Promise.all(uploadFilesPromiseArray);
    console.log("uploadFiles after", resolvedUploadFiles);
    return resolvedUploadFiles;
  }
};

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
  if (fileType[page]) {
    formState[fileType[page]] = await storageLinkForState(page, formState);
  }
  const newDoc = await addDoc(collection(db, page), formState);
};

const updatePost = async (page, postId, formState) => {
  if (fileType[page]) {
    if (formState[fileType[page]].every((file) => file instanceof File)) {
      formState[fileType[page]] = await storageLinkForState(page, formState);
    }
  }
  console.log("now updating doc");
  const edittedFormState = { ...formState };
  delete edittedFormState.id;
  const currentDoc = doc(db, page, postId);
  await updateDoc(currentDoc, edittedFormState);
  console.log("finishing up update");
};

export { getOneDoc, getAllDocs, submitNewDoc, updatePost };
