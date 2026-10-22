import { 
  collection, 
  getDocs, 
  addDoc, 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc,
  query,
  orderBy 
} from "firebase/firestore";
import { db } from "../firebase";

const samplesCollection = collection(db, "samples");

export async function getSamples() {
  const q = query(samplesCollection, orderBy("dateReceived", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function addSample(formData) {
  const newSample = {
    patientName: formData.patientName,
    patientId: formData.patientId,
    testType: formData.testType,
    collectedFrom: formData.collectedFrom,
    notes: formData.notes || "",
    status: "received",
    dateReceived: new Date().toISOString().split("T")[0],
    createdAt: new Date().toISOString(),
  };

  const docRef = await addDoc(samplesCollection, newSample);
  return { id: docRef.id, ...newSample };
}
// getSampleById(id)
export async function getSampleById(id) {
  const docRef = doc(db, "samples", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error("Sample not found");
  }

  return { id: snapshot.id, ...snapshot.data() };
}
// 
export async function updateSample(id, updates) {
  const docRef = doc(db, "samples", id);
  await updateDoc(docRef, updates);
  const updated = await getDoc(docRef);
  return { id: updated.id, ...updated.data() };
}

export async function deleteSample(id) {
  const docRef = doc(db, "samples", id);
  await deleteDoc(docRef);
  return true;
}