import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSamples } from "../services/api";
import SampleCard from "../components/samples/SampleCard";

function SampleList() {
  const [samples, setSamples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

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
      }}
    loadSamples();
  }, []);

  const filteredSamples = samples.filter((sample) => {
    const matchesSearch =
      sample.patientName.toLowerCase().includes(search.toLowerCase()) ||
      sample.patientId.toLowerCase().includes(search.toLowerCase()) ||
      sample.id.toLowerCase().includes(search.toLowerCase()) ||
      sample.testType.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || sample.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return <div className="py-16 text-center text-muted-foreground">Loading samples...</div>;
  }

  if (error) {
    return <div className="py-16 text-center text-red-600">{error}</div>;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold">Samples</h1>
        <Link
          to="/samples/new" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          Add Sample
        </Link>
      </div>

      {/* Search + Filter */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="text" placeholder="Search by name, ID, or test..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-md border px-3 py-2"/>
        <select
          value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-md border px-3 py-2"
        >
          <option value="all">All Status</option>
          <option value="received">Received</option>
          <option value="processing">Processing</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {filteredSamples.length === 0 ? (
        <div className="py-16 text-center text-muted-foreground">
          No samples match your search.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSamples.map((sample) => (
            <SampleCard key={sample.id} sample={sample} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SampleList
