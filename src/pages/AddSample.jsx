import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSample } from "../services/api";

const initialForm = {
  patientName: "",
  patientId: "",
  testType: "",
  collectedFrom: "",
  notes: "",
};

export default function AddSample() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.patientName || !form.patientId || !form.testType || !form.collectedFrom) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setSubmitting(true);
      await addSample(form);
      navigate("/samples");
    } catch (err) {
      setError("Failed to add sample. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold">Add New Sample</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Patient Name *</label>
          <input
            name="patientName"
            value={form.patientName}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Patient ID *</label>
          <input
            name="patientId"
            value={form.patientId}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Test Type *</label>
          <input
            name="testType"
            value={form.testType}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Collected From *</label>
          <select
            name="collectedFrom"
            value={form.collectedFrom}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border px-3 py-2"
          >
            <option value="">Select source</option>
            <option value="Walk-in">Walk-in</option>
            <option value="Clinic referral">Clinic referral</option>
            <option value="Field collection">Field collection</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60"
        >
          {submitting ? "Adding..." : "Add Sample"}
        </button>
      </form>
    </div>
  );
}