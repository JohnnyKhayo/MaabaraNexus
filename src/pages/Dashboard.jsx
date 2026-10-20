import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSamples } from "../services/api";

function Dashboard() {
  const [samples, setSamples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getSamples();
      setSamples(data);
      setLoading(false);
    }
    load();
  }, []);

  const received = samples.filter((s) => s.status === "received").length;
  const processing = samples.filter((s) => s.status === "processing").length;
  const completed = samples.filter((s) => s.status === "completed").length;

  if (loading) {
    return <div className="py-16 text-center">Loading dashboard...</div>;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold">Dashboard</h1>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-muted-foreground">Received</p>
          <p className="mt-1 text-3xl font-semibold text-red-600">{received}</p>
        </div>

        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-muted-foreground">Processing</p>
          <p className="mt-1 text-3xl font-semibold text-amber-600">{processing}</p>
        </div>
        
        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-muted-foreground">Completed</p>
          <p className="mt-1 text-3xl font-semibold text-green-600">{completed}</p>
        </div>
      </div>

      <div className="mt-8">
        <Link
          to="/samples" className="text-sm font-medium text-primary hover:underline">
          View all samples
        </Link>
      </div>
    </div>
  );
}
export default Dashboard