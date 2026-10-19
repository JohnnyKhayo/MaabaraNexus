import samplesData from "../data/samples.json";

let samples = [...samplesData];

export async function getSamples() {
  // Small delay to feel like a real request
  await new Promise((resolve) => setTimeout(resolve, 500));
  return samples;
}

export async function addSample(formData) {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const newIdNumber = samples.length + 1;
  const sampleId = "SMP-" + String(newIdNumber).padStart(3, "0");

  const newSample = {
    id: sampleId,
    status: "received",
    dateReceived: new Date().toISOString().split("T")[0],
    patientName: formData.patientName,
    patientId: formData.patientId,
    testType: formData.testType,
    collectedFrom: formData.collectedFrom,
    notes: formData.notes || "",
  };

  samples = [newSample, ...samples];

  return newSample;
}

export async function getSampleById(id) {
  await new Promise((r) => setTimeout(r, 400));
  const sample = samples.find((s) => s.id === id);
  if (!sample) throw new Error("Sample not found");
  return sample;
}

export async function updateSample(id, updates) {
  await new Promise((r) => setTimeout(r, 400));
  samples = samples.map((s) =>
    s.id === id ? { ...s, ...updates } : s
  );
  return samples.find((s) => s.id === id);
}

export async function deleteSample(id) {
  await new Promise((r) => setTimeout(r, 300));
  samples = samples.filter((s) => s.id !== id);
  return true;
}