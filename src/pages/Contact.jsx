import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-semibold">Contact Us</h1>
      <p className="mb-8 text-muted-foreground">
        Have a question or want to work with us? Reach out below.
      </p>

      <div className="mb-8 space-y-1 text-sm">
        <p>
          Email:{" "}
          <a href="mailto:info@maabaranexus.com" className="text-primary hover:underline">
            info@maabaranexus.com
          </a>
        </p>
        
        <p>
          WhatsApp:{" "}
          <a
            href="https://wa.me/254700000000" target="_blank" rel="noreferrer" className="text-primary hover:underline">
            +254 700 000 000
          </a>
        </p>
      </div>

      {submitted ? (
        <div className="rounded-md border border-green-200 bg-green-50 p-4 text-green-800">
          <p className="font-medium">Message sent</p>
          <p className="mt-1 text-sm">Thank you. We'll get back to you soon.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-3 text-sm text-primary hover:underline">
            Send another message
          </button>

        </div>

      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name" value={form.name} onChange={handleChange}
              className="mt-1 w-full rounded-md border px-3 py-2" required/>
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email" name="email" value={form.email} onChange={handleChange}
              className="mt-1 w-full rounded-md border px-3 py-2" required/>
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              rows={4} className="mt-1 w-full rounded-md border px-3 py-2" required/>
          </div>

          <button
            type="submit"
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">
            Send Message
          </button>

        </form>
      )}
    </div>
  );
}