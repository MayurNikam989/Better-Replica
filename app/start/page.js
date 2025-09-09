"use client";
import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    goal: "buy",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container">
        <section className="hero">
          <h1>Thanks, {form.firstName || "friend"}!</h1>
          <p>
            We received your info. In a real app we’d create an account and
            guide you to pre-approval.
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="container">
      <section className="hero">
        <h1>Let’s get you started</h1>
        <p>Tell us a bit about you and your homeownership goals.</p>
      </section>

      <form
        onSubmit={onSubmit}
        className="card"
        style={{ maxWidth: 720, margin: "0 auto" }}
      >
        <div className="row">
          <div className="col-6">
            <label className="label">First name</label>
            <input
              className="input"
              value={form.firstName}
              onChange={update("firstName")}
              required
            />
          </div>
          <div className="col-6">
            <label className="label">Last name</label>
            <input
              className="input"
              value={form.lastName}
              onChange={update("lastName")}
              required
            />
          </div>
          <div className="col-6">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              value={form.email}
              onChange={update("email")}
              required
            />
          </div>
          <div className="col-6">
            <label className="label">Phone</label>
            <input
              className="input"
              type="tel"
              value={form.phone}
              onChange={update("phone")}
            />
          </div>
          <div className="col-6">
            <label className="label">ZIP</label>
            <input
              className="input"
              value={form.zip}
              onChange={update("zip")}
            />
          </div>
          <div className="col-6">
            <label className="label">Your goal</label>
            <select value={form.goal} onChange={update("goal")}>
              <option value="buy">Buy a home</option>
              <option value="refi">Refinance</option>
            </select>
          </div>
        </div>

        <div style={{ display: "flex", gap: ".75rem", marginTop: "1rem" }}>
          <button type="submit" className="btnPrimary">
            Continue
          </button>
          <a href="/mortgage-calculator" className="btnOutline">
            Try calculator
          </a>
        </div>
      </form>
    </div>
  );
}
