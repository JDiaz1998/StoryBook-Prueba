import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadTask } from "../../helpers/loadTask";
import {
  addNewEmptyTask,
  deleteTaksById,
  savingNewTask,
  setActiveTask,
  setSaving,
  setTask,
  updateTask,
} from "./taskSlice";

export const startNewTask = () => {
  return async (dispatch, getstate) => {
    dispatch(savingNewTask());

    const { uid } = getstate().auth;

    const newTask = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/story/task`));
    await setDoc(newDoc, newTask);

    newTask.id = newDoc.id;

    dispatch(addNewEmptyTask(newTask));
    dispatch(setActiveTask(newTask));
  };
};

export const startLoadingTask = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!uid) throw new Error("El UID del usuario no existe.");
    const tasks = await loadTask(uid);

    dispatch(setTask(tasks));
  };
};

export const startSaveTask = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: task } = getState().task;

    const taskToFireStore = { ...task };
    delete taskToFireStore.id;

    const docRef = doc(FirebaseDB, `${uid}/story/task/${task.id}`);
    await setDoc(docRef, taskToFireStore, { merge: true });

    dispatch(updateTask(task));
  };
};

export const startDeletingTask = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: task } = getState().task;

    const docRef = doc(FirebaseDB, `${uid}/story/task/${task.id}`);
    await deleteDoc(docRef);

    dispatch(deleteTaksById(task.id));
  };
};
