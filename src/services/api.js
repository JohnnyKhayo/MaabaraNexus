import samplesData from "../data/samples.json";

// Working copy of the data (so we can add new samples)
let samples = [...samplesData];

// Getting all samples
export async function getSamples() {
  // Small delay to feel like a real request
  await new Promise((resolve) => setTimeout(resolve, 500));
  return samples;
}

// Add a new sample
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

  // new sample to list top
  samples = [newSample, ...samples];

  return newSample;
}