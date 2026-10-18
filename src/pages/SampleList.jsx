import { useEffect, useState } from "react";
import { getSamples } from "../services/api";
import { Link } from "react-router-dom";
import SampleCard from "../components/samples/SampleCard";

function SampleList() {
  const [samples, setSamples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSamples() {
      try {
        setLoading(true);
        setError(null);
        const data = await getSamples();
        setSamples(data);
      } catch (err) {
        setError("Could not load samples. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadSamples();
  }, []);

  if (loading) {
    return <div className="py-16 text-center text-muted-foreground">Loading samples...</div>;
  }

  if (error) {
    return <div className="py-16 text-center text-red-600">{error}</div>;
  }

  if (samples.length === 0) {
    return <div className="py-16 text-center text-muted-foreground">No samples found.</div>;
  }

  return (
    <>
    {/* BUTTON */}
<div className="mb-6 flex items-center justify-between">
  <h1 className="text-2xl font-semibold">Samples</h1>
  <Link
    to="/samples/new"
    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"> Add Sample
  </Link>
 </div>

    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold">Samples</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {samples.map((sample) => (
          <SampleCard key={sample.id} sample={sample} />
        ))}
      </div>
    </div>
    </>
  );
}

export default SampleList