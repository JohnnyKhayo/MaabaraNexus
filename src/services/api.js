import samplesData from "../data/samples.json";

export async function getSamples() {
  try {
    
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    return samplesData;
  } catch (error) {
    throw new Error("Failed to load samples");
  }
}