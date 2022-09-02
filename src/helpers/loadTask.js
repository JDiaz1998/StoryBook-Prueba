import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadTask = async (uid = "") => {
  if (!uid) throw new Error("El UID del usuario no existe.");

  const collectionRef = collection(FirebaseDB, `${uid}/story/task`);

  const docs = await getDocs(collectionRef);

  const task = [];

  docs.forEach((doc) => {
    task.push({ id: doc.id, ...doc.data() });
  });
  return task;
};
