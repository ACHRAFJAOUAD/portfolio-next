"use client";
import { useState } from "react";

type Errors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [toast, setToast] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "// name is required";
    if (!form.email.trim()) e.email = "// email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "// invalid email address";
    if (!form.message.trim()) e.message = "// message is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      setToast(true);
      setTimeout(() => setToast(false), 5000);
    }
  };

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [key]: e.target.value });
      if (errors[key]) setErrors({ ...errors, [key]: undefined });
    },
  });

  return (
    <section id="contact" className="flex min-h-[75vh] items-center justify-center bg-[#1e1e1e] px-4 py-10 sm:px-6 lg:px-8">
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-start gap-3 rounded-xl border border-[#6a9955]/40 bg-[#252526] px-5 py-4 font-mono text-sm shadow-2xl shadow-black/50">
          <span className="mt-0.5 text-[#6a9955]">✓</span>
          <div>
            <p className="text-[#6a9955]">// message sent successfully!</p>
            <p className="mt-1 text-[#858585]">&quot;Thanks! I&apos;ll get back to you soon.&quot;</p>
          </div>
          <button onClick={() => setToast(false)} className="ml-4 cursor-pointer text-[#858585] hover:text-white transition">✕</button>
        </div>
      )}

      <div className="w-full max-w-3xl rounded-[28px] border border-[#3c3c3c] bg-gradient-to-br from-[#252526] via-[#222325] to-[#1f1f1f] p-6 shadow-2xl shadow-black/30 sm:p-8 lg:p-10">
        <div className="mb-8 text-center">
          <p className="mb-2 font-mono text-sm text-[#6a9955]">// let&apos;s connect</p>
          <h2 className="font-mono text-2xl font-semibold text-white sm:text-3xl">
            <span className="text-[#dcdcaa]">sendMessage</span>
            <span className="text-white">({"{"})</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {(["name", "email"] as const).map((key) => (
              <div key={key} className="flex flex-col gap-1">
                <label className="font-mono text-xs text-[#569cd6]">{key}:</label>
                <input
                  type={key === "email" ? "email" : "text"}
                  placeholder={key === "name" ? "Your name" : "your@email.com"}
                  {...field(key)}
                  className={`w-full border-b bg-transparent px-1 py-2 font-mono text-sm text-[#e5e7eb] outline-none transition duration-200 placeholder:text-[#5b6770] ${errors[key] ? "border-[#f44747]" : "border-[#3c3c3c] focus:border-[#569cd6]"}`}
                />
                {errors[key] && <span className="font-mono text-xs text-[#f44747]">{errors[key]}</span>}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-mono text-xs text-[#569cd6]">message:</label>
            <textarea
              rows={10}
              placeholder="Type your message..."
              {...field("message")}
              className={`w-full border-b bg-transparent px-1 py-2 font-mono text-sm text-[#e5e7eb] outline-none transition duration-200 placeholder:text-[#5b6770] resize-none ${errors.message ? "border-[#f44747]" : "border-[#3c3c3c] focus:border-[#569cd6]"}`}
            />
            {errors.message && <span className="font-mono text-xs text-[#f44747]">{errors.message}</span>}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs text-[#6a9955]">// I usually reply within 1–2 business days.</p>
            <button
              type="submit"
              className="cursor-pointer font-mono text-sm text-[#569cd6] border border-[#3c3c3c] px-6 py-2 hover:border-[#569cd6] hover:text-white transition duration-200 focus:outline-none"
            >
              submit()
            </button>
          </div>
        </form>

        <p className="mt-4 font-mono text-2xl font-semibold text-white sm:text-3xl">{"});"}</p>
      </div>
    </section>
  );
}
