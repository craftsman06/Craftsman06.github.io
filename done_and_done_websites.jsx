import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    details: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handlePhoneChange(e) {
    // Allow only digits, parentheses, spaces, and dashes
    const cleaned = e.target.value.replace(/[^0-9()\-\s]/g, "");
    setForm((prev) => ({ ...prev, phone: cleaned }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted! Thank you.");
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      details: "",
    });
  }

  return (
    <main className="min-h-screen bg-slate-100 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-blue-700">Done and Done</h1>
          <nav className="space-x-6 hidden md:flex items-center">
            <a href="#services" className="hover:text-blue-500">
              Services
            </a>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
            <Button className="bg-blue-700 text-white h-10 px-5 ml-4">
              Book Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Reliable Local Services in Richmond, IN
        </h2>
        <p className="text-lg mb-6">
          From general help to auto detailing – We Get It Done
        </p>
        <Button className="bg-white text-blue-700 font-semibold px-6">
          Request a Free Quote
        </Button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-8">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Household Help",
            "Handyman Work",
            "Moving & Lifting",
            "Seasonal Services",
            "Auto Detailing",
            "Custom Projects",
          ].map((service, i) => (
            <Card key={i} className="bg-white shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2 text-blue-700">
                  {service}
                </h4>
                <p>
                  Professional, affordable, and friendly service tailored to
                  your needs.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <p className="max-w-3xl mx-auto text-lg">
          I'm Robert – the one-man team committed to serving the Richmond area
          with practical, affordable, and reliable help. Whether it’s yard work
          or detailing your car, I do it like it’s my own.
        </p>
      </section>

      {/* Contact/Booking Form */}
      <section id="contact" className="bg-slate-200 py-16 px-4">
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-6">Book a Service</h3>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-xl"
              value={form.name}
              onChange={handleChange}
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "John Doe")}
            />
            <input
              name="email"
              type="email"
              placeholder="johndoe1234@example.com"
              className="w-full p-3 rounded-xl"
              value={form.email}
              onChange={handleChange}
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "johndoe1234@example.com")}
            />
            <input
              name="phone"
              type="tel"
              placeholder="(123) 456-7890"
              className="w-full p-3 rounded-xl"
              value={form.phone}
              onChange={handlePhoneChange}
              required
              pattern="\(\d{3}\) \d{3}-\d{4}"
              title="Phone number format: (123) 456-7890"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "(123) 456-7890")}
              inputMode="numeric"
            />
            <input
              name="address"
              type="text"
              placeholder="123 Main St, Richmond, IN"
              className="w-full p-3 rounded-xl"
              value={form.address}
              onChange={handleChange}
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "123 Main St, Richmond, IN")}
            />
            <select
              name="service"
              className="w-full p-3 rounded-xl"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a Service
              </option>
              <option>Household Help</option>
              <option>Auto Detailing</option>
              <option>Handyman Work</option>
            </select>
            <textarea
              name="details"
              placeholder="Describe your request..."
              className="w-full p-3 rounded-xl"
              rows={4}
              value={form.details}
              onChange={handleChange}
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Describe your request...")}
            />
            <Button type="submit" className="w-full bg-blue-700 text-white">
              Submit
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>
          &copy; 2025 Done and Done Services LLC – Serving Richmond, IN and
          nearby areas
        </p>
      </footer>
    </main>
  );
}
