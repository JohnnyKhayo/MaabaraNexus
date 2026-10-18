import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import { getSampleById, updateSample, deleteSample } from "../services/api";
import { IoArrowBack } from "react-icons/io5";

export default function SampleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();                  

  const [sample, setSample] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [result, setResult] = useState("");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await getSampleById(id);
        setSample(data);
        setStatus(data.status);
        setResult(data.result || "");
      } catch (err) {
        setError("Sample not found.");
      } finally {
        setLoading(false);
      }}
    load();
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      setSaving(true);
      const updated = await updateSample(id, { status, result });
      setSample(updated);
      alert("Sample updated successfully.");
    } catch (err) {
      setError("Failed to update sample.");
    } finally {
      setSaving(false);
    }
  }

    async function handleDelete() {                
    if (!window.confirm("Are you sure you want to delete this sample? This action cannot be undone.")) {
      return;
    }

    try {
      setDeleting(true);
      await deleteSample(id);
      navigate("/samples");
    } catch (err) {
      setError("Failed to delete sample.");
    } finally {
      setDeleting(false);
    }
  }


  if (loading) return <div className="py-16 text-center">Loading sample...</div>;
  if (error) return <div className="py-16 text-center text-red-600">{error}</div>;
  if (!sample) return null;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <button
      onClick={() => navigate("/samples")} className="mb-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"><IoArrowBack className="text-base"/> <span>Back to Samples</span>
      </button>

      <h1 className="mb-6 text-2xl font-semibold">Sample {sample.id}</h1>

      <div className="mb-8 space-y-2 rounded-lg border bg-white p-5">
        <p><span className="font-medium">Patient:</span> {sample.patientName}</p>
        <p><span className="font-medium">Patient ID:</span> {sample.patientId}</p>
        <p><span className="font-medium">Test:</span> {sample.testType}</p>
        <p><span className="font-medium">Source:</span> {sample.collectedFrom}</p>
        <p><span className="font-medium">Date Received:</span> {sample.dateReceived}</p>
        {sample.notes && <p><span className="font-medium">Notes:</span> {sample.notes}</p>}
      </div>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            value={status} onChange={(e) => setStatus(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2">
            <option value="received">Received</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Result</label>
          <textarea
            value={result} onChange={(e) => setResult(e.target.value)} rows={3}
            className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Enter result when available"/>
        </div>

     <div className="flex items-center gap-3 pt-2">
        <button type="submit" disabled={saving} className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60"> {saving ? "Saving..." : "Update Sample"}</button> 
        {user?.role === "admin" && (
     <button type="button" onClick={handleDelete} disabled={deleting}
      className="rounded-md bg-red-600 px-5 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-60">
      {deleting ? "Deleting..." : "Delete Sample"}
     </button>
     )}
     </div>
      </form>
    </div>
    
  );
}