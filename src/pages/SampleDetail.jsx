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
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [success, setSuccess] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
// loading sample
  useEffect(() => {
    async function loadSample() {
      try {
        setLoading(true);
        setError("");
        const data = await getSampleById(id);
        setSample(data);
        setStatus(data.status || "");
        setResult(data.result || "");
        setNotes(data.notes || "");
      } catch (err) {
        setError("Sample not found.");
      } finally {
        setLoading(false);
      }
    }
    loadSample();
  }, [id]);
// update
  async function handleUpdate(e) {
    e.preventDefault();
    setError("");

    try {
      setSaving(true);
      const updated = await updateSample(id, {
        status,
        result,
        notes,
      });

      setSample(updated);
      setStatus(updated.status || "");
      setResult(updated.result || "");
      setNotes(updated.notes || "");

      setSuccess("Sample updated successfully.");
      setTimeout(() => setSuccess(""), 3000);
    } 
    // 
    catch (err) {
      setError("Failed to update sample. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  function handleDeleteClick() {
    setShowConfirm(true);
  }

  async function confirmDelete() {
    try {
      setDeleting(true);
      await deleteSample(id);
      navigate("/samples");
    } catch (err) {
      setError("Failed to delete sample.");
    } finally {
      setDeleting(false);
      setShowConfirm(false);
    }
  }

  if (loading) return <div className="py-16 text-center">Loading sample...</div>;
  if (error) return <div className="py-16 text-center text-red-600">{error}</div>;
  if (!sample) return null;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <button
        onClick={() => navigate("/samples")}
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
        <IoArrowBack className="text-base" />
        <span>Back to Samples</span>
      </button>

      <h1 className="mb-6 text-2xl font-semibold">Sample {sample.id}</h1>

      <div className="mb-8 space-y-2 rounded-lg border bg-white p-5">
        <p><span className="font-medium">Patient:</span> {sample.patientName}</p>
        <p><span className="font-medium">Patient ID:</span> {sample.patientId}</p>
        <p><span className="font-medium">Test:</span> {sample.testType}</p>
        <p><span className="font-medium">Source:</span> {sample.collectedFrom}</p>
        <p><span className="font-medium">Date Received:</span> {sample.dateReceived}</p>
        {sample.notes && (
          <p><span className="font-medium">Notes:</span> {sample.notes}</p>
        )}
        {sample.result && (
          <p><span className="font-medium">Result:</span> {sample.result}</p>
        )}
      </div>
      
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2">
            <option value="received">Received</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Result</label>
          <textarea
            value={result} onChange={(e) => setResult(e.target.value)}
            rows={3}
            className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Enter result when available"/>
        </div>

        <div>
          <label className="block text-sm font-medium">Notes</label>
          <textarea
            value={notes} onChange={(e) => setNotes(e.target.value)}
            rows={3} className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="Add or update notes"/>
        </div>
        {/* success update message */}
        {success && (
          <div className="mb-4 rounded-md bg-green-50 px-4 py-2 text-sm text-green-900">
          {success}
          </div>
        )}

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60">
            {saving ? "Saving..." : "Update Sample"}
          </button>
          
          {/* admin only can delete */}
          {user?.role === "admin" && (
            <button
              type="button" onClick={handleDeleteClick} disabled={deleting}
              className="rounded-md bg-red-600 px-5 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-60">
              {deleting ? "Deleting..." : "Delete Sample"}
            </button>
          )}
        </div>

        {showConfirm && (
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-medium text-red-700">
              Are you sure you want to delete this sample? This action cannot be undone.
            </p>
            
            <div className="mt-3 flex gap-2">
              <button
                type="button" onClick={confirmDelete} disabled={deleting} className="rounded bg-red-600 px-4 py-1.5 text-sm text-white disabled:opacity-60">
                {deleting ? "Deleting..." : "Yes, Delete"}
              </button>
              <button
                type="button" onClick={() => setShowConfirm(false)} className="rounded border px-4 py-1.5 text-sm">
                Cancel
              </button>
            </div>
          </div>
        )}
        
      </form>
  
    </div>
  );
}